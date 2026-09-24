import { motion } from 'framer-motion';
import { BedDouble, MapPin, Stethoscope, Users, CheckCircle2 } from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

const pillars = [
  { icon: Stethoscope, label: '9 Specialities',      desc: 'Medical & surgical areas under one roof' },
  { icon: BedDouble,   label: '52-Bed Facility',     desc: 'Full inpatient infrastructure' },
  { icon: MapPin,      label: 'Accessible Location', desc: 'Near RTC Bus Stand, Old Town' },
  { icon: Users,       label: 'Patient-Centered',    desc: 'From consultation through to follow-up' },
];

const highlights = ['Surgical & Laparoscopic Care', 'Urology & Gynaecology', 'Orthopaedics & ENT', 'Diabetology & Nephrology'];

export function About() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      ref={ref}
      className="section"
      aria-labelledby="about-heading"
      style={{ background: 'var(--bg-alt)' }}
    >
      <div className="container">
        <div className="grid-2">
          {/* Left */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="section-label">About the Hospital</div>
            <h2 id="about-heading" style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', fontWeight: 700,
              lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: '1.25rem',
            }}>
              Healthcare Built Around{' '}
              <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>People</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
              Sree SS Yashoda Hospital is a 52-bed healthcare facility in Anantapur focused on accessible medical and surgical care in a professional, patient-centered environment.
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Located in Khaja Nagar near the RTC Bus Stand, the hospital serves patients from Anantapur and surrounding areas with specialist consultations, surgical services and inpatient support.
            </p>

            {/* Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: '2rem' }}>
              {highlights.map((h) => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle2 size={16} color="var(--primary)" />
                  <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text)' }}>{h}</span>
                </div>
              ))}
            </div>

            {/* Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {pillars.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease: EASE }}
                  style={{
                    padding: '14px 16px', borderRadius: 16,
                    background: 'white', border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-xs)',
                    transition: 'box-shadow 250ms, transform 250ms',
                  }}
                  whileHover={reducedMotion ? {} : { y: -2, boxShadow: 'var(--shadow-md)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--primary-bg)', border: '1px solid var(--primary-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={14} color="var(--primary)" />
                    </div>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text)' }}>{label}</span>
                  </div>
                  <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ position: 'relative' }}
          >
            {/* Navy card */}
            <div style={{
              borderRadius: 28, overflow: 'hidden',
              background: 'linear-gradient(145deg, var(--navy) 0%, var(--navy-dark) 100%)',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: 'var(--shadow-xl)',
              padding: '2.5rem',
              position: 'relative',
            }}>
              {/* Decorative circle */}
              <div aria-hidden="true" style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.06), transparent 70%)', pointerEvents: 'none' }} />
              <div aria-hidden="true" style={{ position: 'absolute', bottom: -30, left: -20, width: 140, height: 140, borderRadius: '50%', background: 'radial-gradient(circle, rgba(192,24,62,0.15), transparent 70%)', pointerEvents: 'none' }} />

              {/* Hosp icon */}
              <div style={{
                width: 64, height: 64, borderRadius: 18,
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
              }}>
                <Stethoscope size={32} color="rgba(255,255,255,0.85)" />
              </div>

              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: 'white', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                Compassionate, Multidisciplinary Care
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '0.9375rem', marginBottom: '2rem' }}>
                A team of qualified specialists working together to provide the best possible outcome for every patient.
              </p>

              <div style={{ display: 'flex', gap: 16, paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                {[{ v: '52', l: 'Beds' }, { v: '9', l: 'Specialities' }, { v: 'AP', l: 'Registered' }].map(({ v, l }) => (
                  <div key={l}>
                    <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.35rem', fontWeight: 700, color: 'white' }}>{v}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 16, rotate: -2 }}
              animate={inView ? { opacity: 1, y: 0, rotate: -2 } : {}}
              transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
              style={{
                position: 'absolute', bottom: -18, left: -18,
                background: 'white', borderRadius: 18, padding: '14px 18px',
                border: '1px solid var(--border)', boxShadow: 'var(--shadow-xl)',
                display: 'flex', alignItems: 'center', gap: 12,
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 11, background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: 'var(--shadow-red)' }}>
                <Users size={20} color="white" />
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)' }}>Specialist Doctors</div>
                <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Multiple disciplines, one facility</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
