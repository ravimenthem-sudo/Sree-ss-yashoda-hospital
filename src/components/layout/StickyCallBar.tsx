import { Link } from 'react-router-dom';
import { Phone, CalendarDays } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { trackEvent } from '@/lib/analytics';

export function StickyCallBar() {
  return (
    <div className="sticky-call-bar" role="navigation" aria-label="Quick actions">
      <a
        href={`tel:${siteConfig.contact.phone}`}
        onClick={() => trackEvent('cta_call_click')}
        className="btn btn-secondary btn-sm"
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <Phone size={16} />
        Call Us
      </a>
      <Link
        to="/#appointment"
        onClick={() => trackEvent('cta_book_click')}
        className="btn btn-primary btn-sm"
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <CalendarDays size={16} />
        Book Appointment
      </Link>
    </div>
  );
}
