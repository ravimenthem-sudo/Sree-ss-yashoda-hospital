// ============================================================
// ANALYTICS — Privacy-friendly, provider-agnostic wrapper
// No-op unless VITE_ANALYTICS_ID is set.
// No cookies used in this default implementation.
// ============================================================

type EventName =
  | 'cta_call_click'
  | 'cta_book_click'
  | 'appointment_submit_success'
  | 'appointment_submit_error'
  | 'directions_click'
  | 'map_load_click'
  | 'speciality_view'
  | 'doctor_view';

interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

function isEnabled(): boolean {
  return !!import.meta.env.VITE_ANALYTICS_ID;
}

export function trackEvent(name: EventName, props?: EventProperties): void {
  if (!isEnabled()) {
    if (import.meta.env.DEV) {
      console.log('[Analytics]', name, props ?? {});
    }
    return;
  }

  // Swap in your analytics provider here (e.g. Plausible, Fathom, GA4)
  // Example for Plausible:
  // window.plausible?.(name, { props });

  // Example for Fathom:
  // window.fathom?.trackEvent(name);

  // Example for GA4:
  // window.gtag?.('event', name, props);
}

export function trackPageView(path: string): void {
  if (!isEnabled()) {
    if (import.meta.env.DEV) {
      console.log('[Analytics] pageview:', path);
    }
    return;
  }
  // window.plausible?.('pageview');
}
