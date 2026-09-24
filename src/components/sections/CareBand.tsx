import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Heart } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { useInView, useReducedMotion } from '@/hooks';
import { trackEvent } from '@/lib/analytics';

const EASE = [0.22, 1, 0.36, 1] as const;

export function CareBand() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      aria-labelledby="care-band-heading"
      style={{
        background: 'linear-gradient(145deg, var(--navy-dark) 0%, var(--navy) 50%, #1E4D9A 100%)',
        padding: 'clamp(4rem, 7vw, 6.5rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid overlay */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px', pointerEvents: 'none',
      }} />
      {/* Glow */}
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(192,24,62,0.2), transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: EASE }}
          style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', borderRadius: 100, background: 'rgba(192,24,62,0.2)', border: '1px solid rgba(192,24,62,0.3)', marginBottom: '1.5rem' }}>
            <Heart size={12} color="#FCA5A5" fill="#FCA5A5" />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(252,165,165,0.9)' }}>Our Philosophy</span>
          </div>

          <h2 id="care-band-heading" style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 600,
            color: 'rgba(255,255,255,0.95)', lineHeight: 1.4, fontStyle: 'italic',
            letterSpacing: '-0.01em', marginBottom: '2.5rem',
          }}>
            "We focus on providing{' '}
            <span style={{ background: 'linear-gradient(135deg, #FCA5A5, #F87171)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              accessible, compassionate healthcare
            </span>{' '}
            for patients and families across Anantapur — every single day."
          </h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <a href={`tel:${siteConfig.contact.phone}`} onClick={() => trackEvent('cta_call_click')} className="btn btn-white btn-lg" id="care-band-call">
              <Phone size={17} /> {siteConfig.contact.phoneDisplay}
            </a>
            <Link to="/#appointment" onClick={() => trackEvent('cta_book_click')} className="btn btn-outline-white btn-lg" id="care-band-book">
              Book Appointment <ArrowRight size={17} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
