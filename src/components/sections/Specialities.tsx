import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Stethoscope, Microscope, Zap, Activity, Heart, Shield, Droplets, Bone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { specialities } from '@/content/specialities';
import { useInView, useReducedMotion } from '@/hooks';

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Stethoscope, Microscope, Zap, Activity, Heart, Shield, Droplets, Bone, Ear: Activity,
};
const EASE = [0.22, 1, 0.36, 1] as const;

export function Specialities() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();
  const activeSpec = specialities[active];
  const Icon = iconMap[activeSpec.icon] ?? Stethoscope;

  return (
    <section id="specialities" ref={ref} className="section" aria-labelledby="spec-heading" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Specialities</div>
          <h2 id="spec-heading" style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700,
            lineHeight: 1.12, letterSpacing: '-0.02em', color: 'var(--text)', maxWidth: 520, margin: '0 auto',
          }}>
            Specialist Care Across{' '}
            <span style={{ color: 'var(--navy)', fontStyle: 'italic' }}>9 Areas</span>
          </h2>
        </motion.div>

        {/* Desktop */}
        <div className="spec-desktop" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 28, alignItems: 'start' }}>
          {/* List panel */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE }}
            style={{ background: 'white', borderRadius: 22, padding: 8, border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}
            role="listbox" aria-label="Select a speciality"
          >
            {specialities.map((spec, i) => (
              <div
                key={spec.slug}
                role="option" aria-selected={active === i}
                tabIndex={0}
                onClick={() => setActive(i)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActive(i); }}
                className={`spec-list-item ${active === i ? 'active' : ''}`}
              >
                <span className="spec-name">{spec.name}</span>
                <ChevronRight size={15} color={active === i ? 'white' : 'var(--primary)'} style={{ opacity: active === i ? 0.7 : 0, transition: 'opacity 200ms', flexShrink: 0 }} />
              </div>
            ))}
          </motion.div>

          {/* Detail panel */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE }}
            style={{ position: 'sticky', top: 90 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: EASE }}
                style={{
                  background: 'white', borderRadius: 28,
                  padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Top accent */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--primary), var(--navy), var(--teal))', borderRadius: '28px 28px 0 0' }} />

                <div style={{ width: 60, height: 60, borderRadius: 16, background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: 'var(--shadow-red)' }}>
                  <Icon size={28} color="white" />
                </div>

                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--text)', marginBottom: '0.875rem', lineHeight: 1.2 }}>
                  {activeSpec.name}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1.375rem', fontSize: '0.9375rem' }}>
                  {activeSpec.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: '2rem' }}>
                  {activeSpec.tags.map((tag) => (
                    <span key={tag} className="badge badge-navy">{tag}</span>
                  ))}
                </div>

                <Link to={`/specialities/${activeSpec.slug}`} className="btn btn-primary" style={{ width: 'fit-content' }}>
                  Learn More <ChevronRight size={15} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Mobile accordion */}
        <div className="spec-mobile">
          {specialities.map((spec, i) => {
            const SpecIcon = iconMap[spec.icon] ?? Stethoscope;
            return (
              <div key={spec.slug} className="accordion-item">
                <button className="accordion-trigger" aria-expanded={active === i} onClick={() => setActive(active === i ? -1 : i)} id={`spec-trigger-${i}`} aria-controls={`spec-panel-${i}`}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: active === i ? 'var(--primary)' : 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 200ms' }}>
                      <SpecIcon size={15} color={active === i ? 'white' : 'var(--primary)'} />
                    </div>
                    <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.05rem' }}>{spec.name}</span>
                  </span>
                  <span className={`accordion-icon ${active === i ? 'open' : ''}`}>
                    <ChevronRight size={13} style={{ transform: 'rotate(90deg)' }} />
                  </span>
                </button>
                <AnimatePresence>
                  {active === i && (
                    <motion.div id={`spec-panel-${i}`} role="region" aria-labelledby={`spec-trigger-${i}`} initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} style={{ overflow: 'hidden' }}>
                      <div className="accordion-body">
                        <p>{spec.description}</p>
                        <Link to={`/specialities/${spec.slug}`} className="btn btn-ghost btn-sm" style={{ marginTop: 10 }}>
                          Learn More <ChevronRight size={13} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .spec-desktop { display: none !important; } .spec-mobile { display: block !important; } }
        @media (min-width: 901px) { .spec-mobile { display: none !important; } }
      `}</style>
    </section>
  );
}
