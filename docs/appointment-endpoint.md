# Appointment Endpoint — Implementation Guide

> **Note:** This is documentation only. No backend is included in this project. The appointment form uses `mock` mode by default.

---

## Overview

When `VITE_APPOINTMENT_MODE=api`, the appointment form POSTs JSON to `VITE_APPOINTMENT_ENDPOINT`.

## Request Format

```http
POST /api/appointment
Content-Type: application/json
```

```json
{
  "fullName": "Patient Name",
  "phone": "9876543210",
  "speciality": "General Surgery",
  "doctor": "Dr. B. Siva Sankar Naik",
  "preferredDate": "2024-12-15",
  "preferredTime": "morning",
  "message": "Brief reason for visit",
  "consent": true
}
```

## Expected Response

Success (200):
```json
{ "success": true }
```

Error (4xx/5xx): the client will show a generic error and retry once.

---

## Example Serverless Handler (Node.js)

```javascript
// Vercel/Netlify function example
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // 1. Rate limiting (e.g. Upstash Redis)
  // const ip = req.headers['x-forwarded-for'];
  // if (await isRateLimited(ip)) return res.status(429).json({ error: 'Too many requests' });

  // 2. Validate payload
  const { fullName, phone, speciality, preferredDate } = req.body;
  if (!fullName || !phone || !speciality || !preferredDate) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // 3. Forward to your preferred destination:

  // Option A: Send email via Resend / Nodemailer
  // await sendEmail({
  //   to: 'hospital@example.com',
  //   subject: `New Appointment Request — ${speciality}`,
  //   text: JSON.stringify(req.body, null, 2),
  // });

  // Option B: Append to Google Sheets via Google Sheets API
  // await appendToSheet(sheetId, req.body);

  // Option C: Create a lead in your CRM (e.g. Zoho, HubSpot)
  // await crmClient.createLead(req.body);

  return res.status(200).json({ success: true });
}
```

## Switching Modes

| Mode | `.env.local` setting |
|---|---|
| Development (no backend) | `VITE_APPOINTMENT_MODE=mock` |
| WhatsApp (simplest live option) | `VITE_APPOINTMENT_MODE=whatsapp` + `VITE_WHATSAPP_NUMBER=918712251147` |
| Custom backend | `VITE_APPOINTMENT_MODE=api` + `VITE_APPOINTMENT_ENDPOINT=https://...` |

WhatsApp mode is the fastest way to go live — no backend needed.
