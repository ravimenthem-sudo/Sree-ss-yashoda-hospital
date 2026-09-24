// ============================================================
// APPOINTMENT SUBMISSION ADAPTER
// Chosen by VITE_APPOINTMENT_MODE: 'mock' | 'whatsapp' | 'api'
// ============================================================
import { siteConfig } from '@/content/site.config';

export interface AppointmentPayload {
  fullName: string;
  phone: string;
  speciality: string;
  doctor?: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  consent: boolean;
}

export interface AppointmentResult {
  success: boolean;
  message: string;
}

type AppointmentMode = 'mock' | 'whatsapp' | 'api';

function getMode(): AppointmentMode {
  const mode = import.meta.env.VITE_APPOINTMENT_MODE as AppointmentMode | undefined;
  return mode ?? 'mock';
}

function buildWhatsAppText(payload: AppointmentPayload): string {
  const lines = [
    `*Appointment Request — Sree SS Yashoda Hospital*`,
    ``,
    `Name: ${payload.fullName}`,
    `Phone: ${payload.phone}`,
    `Speciality: ${payload.speciality}`,
    payload.doctor ? `Doctor: ${payload.doctor}` : null,
    `Preferred Date: ${payload.preferredDate}`,
    `Preferred Time: ${payload.preferredTime}`,
    payload.message ? `Message: ${payload.message}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  return encodeURIComponent(lines);
}

async function submitMock(_payload: AppointmentPayload): Promise<AppointmentResult> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1200));
  if (import.meta.env.DEV) {
    console.log('[Appointment Mock] Payload:', _payload);
  }
  return {
    success: true,
    message: "We've received your request. The hospital will contact you to confirm — this is not a confirmed booking.",
  };
}

async function submitWhatsApp(payload: AppointmentPayload): Promise<AppointmentResult> {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER ?? siteConfig.contact.whatsapp;
  const text = buildWhatsAppText(payload);
  const url = `https://wa.me/${number}?text=${text}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  return {
    success: true,
    message: "Opening WhatsApp with your appointment details. Please send the message to complete your request.",
  };
}

async function submitApi(payload: AppointmentPayload): Promise<AppointmentResult> {
  const endpoint = import.meta.env.VITE_APPOINTMENT_ENDPOINT;
  if (!endpoint) {
    throw new Error('VITE_APPOINTMENT_ENDPOINT is not set');
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      // Retry once on server error
      const retry = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!retry.ok) throw new Error(`Server error: ${retry.status}`);
    }

    return {
      success: true,
      message: "We've received your request. The hospital will contact you to confirm — this is not a confirmed booking.",
    };
  } catch (err) {
    clearTimeout(timeout);
    if (err instanceof Error && err.name === 'AbortError') {
      throw new Error('Request timed out. Please try again or call us directly.');
    }
    throw err;
  }
}

export async function submitAppointment(payload: AppointmentPayload): Promise<AppointmentResult> {
  const mode = getMode();
  switch (mode) {
    case 'whatsapp': return submitWhatsApp(payload);
    case 'api': return submitApi(payload);
    case 'mock':
    default: return submitMock(payload);
  }
}
