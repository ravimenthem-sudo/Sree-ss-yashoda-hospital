import { Link } from 'react-router-dom';
import { Phone, MapPin, Heart } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { specialities } from '@/content/specialities';
import logoFull from '@/assets/logo/logo-full.png';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--dark-bg)',
        color: 'var(--dark-text)',
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
      }}
    >
      <div className="container">
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(2rem, 4vw, 3rem)',
          paddingBottom: '3rem',
          borderBottom: '1px solid var(--dark-border)',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            {/* Original Logo Container (White background pill to showcase full original logo crisp & clear) */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '10px 16px',
              borderRadius: '16px',
              background: '#FFFFFF',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
              marginBottom: '1.25rem',
            }}>
              <img
                src={logoFull}
                alt="Sree SS Yashoda Hospital"
                style={{ height: 48, width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <p style={{ color: 'var(--dark-text-muted)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 280 }}>
              {siteConfig.tagline}
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--dark-text-muted)', fontSize: '0.875rem', transition: 'color 150ms' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--dark-text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--dark-text-muted)')}
              >
                <Phone size={14} />
                {siteConfig.contact.phoneDisplay}
              </a>
              <span style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: 'var(--dark-text-muted)', fontSize: '0.875rem' }}>
                <MapPin size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--dark-text)' }}>
              Navigation
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', padding: 0, margin: 0 }}>
              {['/', '/#about', '/#doctors', '/#specialities', '/#services', '/blog', '/#contact'].map((href, i) => {
                const labels = ['Home', 'About', 'Doctors', 'Specialities', 'Services', 'Blog', 'Contact'];
                return (
                  <li key={href}>
                    <Link
                      to={href}
                      style={{ color: 'var(--dark-text-muted)', fontSize: '0.875rem', transition: 'color 150ms' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--dark-text)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--dark-text-muted)')}
                    >
                      {labels[i]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--dark-text)' }}>
              Specialities
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', padding: 0, margin: 0 }}>
              {specialities.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/specialities/${s.slug}`}
                    style={{ color: 'var(--dark-text-muted)', fontSize: '0.875rem', transition: 'color 150ms' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--dark-text)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--dark-text-muted)')}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Support */}
          <div>
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--dark-text)' }}>
              Patient Support
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <Link to="/#appointment" style={{ color: 'var(--dark-text-muted)', fontSize: '0.875rem', transition: 'color 150ms' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--dark-text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--dark-text-muted)')}>
                  Book Appointment
                </Link>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} style={{ color: 'var(--dark-text-muted)', fontSize: '0.875rem', transition: 'color 150ms' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--dark-text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--dark-text-muted)')}>
                  Call Hospital
                </a>
              </li>
              <li>
                <a href={siteConfig.contact.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--dark-text-muted)', fontSize: '0.875rem', transition: 'color 150ms' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--dark-text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--dark-text-muted)')}>
                  Find Us
                </a>
              </li>
              {siteConfig.features.showEmergency && (
                <li>
                  <Link to="/#emergency" style={{ color: 'var(--dark-text-muted)', fontSize: '0.875rem' }}>
                    Emergency Information
                  </Link>
                </li>
              )}
            </ul>

            <div style={{ marginTop: '1.5rem', padding: '12px 16px', background: 'var(--dark-surface)', borderRadius: 12, border: '1px solid var(--dark-border)' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--dark-text-muted)', lineHeight: 1.6 }}>
                Information on this website is for general awareness and doesn't replace professional medical advice.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          paddingTop: '1.5rem',
        }}>
          <p style={{ fontSize: '0.8125rem', color: 'var(--dark-text-muted)' }}>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Link to="/privacy" style={{ fontSize: '0.8125rem', color: 'var(--dark-text-muted)', transition: 'color 150ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--dark-text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--dark-text-muted)')}>
              Privacy Policy
            </Link>
            <Link to="/terms" style={{ fontSize: '0.8125rem', color: 'var(--dark-text-muted)', transition: 'color 150ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--dark-text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--dark-text-muted)')}>
              Terms of Use
            </Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--dark-text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
            Made with <Heart size={12} style={{ color: 'var(--primary)', fill: 'var(--primary)' }} /> in Anantapur
          </p>
        </div>
      </div>
    </footer>
  );
}
