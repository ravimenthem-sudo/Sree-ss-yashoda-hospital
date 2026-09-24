import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, ExternalLink, Map } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { useInView, useReducedMotion } from '@/hooks';
import { trackEvent } from '@/lib/analytics';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  const mapsUrl = siteConfig.contact.googleMapsUrl;

  return (
    <section
      id="contact"
      ref={ref}
      className="section"
      aria-labelledby="contact-heading"
      style={{ background: 'var(--maroon-50)' }}
    >
      <div className="container">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Contact & Location</div>
          <h2 id="contact-heading" className="display-lg" style={{ maxWidth: 480, margin: '0 auto' }}>
            Find Us in{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Anantapur</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '380px 1fr',
          gap: 32,
          alignItems: 'start',
        }}>
          {/* Contact card */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            style={{
              background: 'var(--white)',
              borderRadius: 24,
              padding: '2rem',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.3rem', fontWeight: 600, color: 'var(--text)', marginBottom: '1.5rem' }}>
              Hospital Details
            </h3>

            {/* Address */}
            <div style={{ display: 'flex', gap: 12, marginBottom: '1.25rem' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'var(--maroon-100)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <MapPin size={18} color="var(--primary)" />
              </div>
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>Address</div>
                <address style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontStyle: 'normal', lineHeight: 1.6 }}>
                  D.No. 13-3-385-6, Khaja Nagar (Old Town)<br />
                  Beside Chaitanya Junior College<br />
                  Near RTC Bus Stand<br />
                  Anantapur, Andhra Pradesh
                </address>
              </div>
            </div>

            <hr className="hairline" style={{ margin: '1.25rem 0' }} />

            {/* Phone */}
            <div style={{ display: 'flex', gap: 12, marginBottom: '1.5rem' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'var(--maroon-100)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Phone size={18} color="var(--primary)" />
              </div>
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>Phone</div>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  onClick={() => trackEvent('cta_call_click')}
                  style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--primary)' }}
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('directions_click')}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              id="get-directions-btn"
            >
              Get Directions
              <ExternalLink size={16} />
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {!mapLoaded ? (
              // Privacy facade — map loads only on click
              <div
                className="map-facade"
                style={{ cursor: 'pointer', minHeight: 380, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}
                onClick={() => { setMapLoaded(true); trackEvent('map_load_click'); }}
                role="button"
                tabIndex={0}
                aria-label="Load interactive map"
                onKeyDown={(e) => { if (e.key === 'Enter') { setMapLoaded(true); trackEvent('map_load_click'); } }}
              >
                <div style={{ width: 64, height: 64, borderRadius: 16, background: 'var(--maroon-200)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Map size={32} color="var(--primary)" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>
                    Load Map
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    Click to load Google Maps
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)', marginTop: 4 }}>
                    Sree SS Yashoda Hospital, Anantapur
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: 'var(--shadow-md)', minHeight: 380 }}>
                <iframe
                  title="Sree SS Yashoda Hospital location on Google Maps"
                  src={`https://maps.google.com/maps?q=${siteConfig.contact.mapQuery}&output=embed`}
                  width="100%"
                  height="420"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact > .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
