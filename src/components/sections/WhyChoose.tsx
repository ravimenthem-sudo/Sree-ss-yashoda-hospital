import { useInView, useReducedMotion } from '@/hooks';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const whyItems = [
  { number: '01', title: 'Specialist Care',      desc: 'Qualified specialists across 9 medical and surgical areas, under one roof in Anantapur.' },
  { number: '02', title: 'Surgical Expertise',   desc: 'Experienced surgical team offering general, laparoscopic, laser and endoscopic procedures.' },
  { number: '03', title: 'Inpatient Facility',   desc: 'A 52-bed facility providing structured care and recovery support for admitted patients.' },
  { number: '04', title: 'Accessible Location',  desc: 'Near RTC Bus Stand in Khaja Nagar — easy to reach from across Anantapur district.' },
  { number: '05', title: 'Patient-Centered Care','desc': 'Every aspect of care is designed around the patient, from consultation through follow-up.' },
];

const COLORS = ['#C0183E', '#1C3A6E', '#0891B2', '#D97706', '#C0183E'];

export function WhyChoose() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section id="why-choose" ref={ref} className="section" aria-labelledby="why-heading" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Why Choose Us</div>
          <h2 id="why-heading" style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700,
            lineHeight: 1.12, letterSpacing: '-0.02em', color: 'var(--text)', maxWidth: 520, margin: '0 auto',
          }}>
            Five Reasons to Trust{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Your Care to Us</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 18 }}>
          {whyItems.map((item, i) => (
            <motion.div
              key={item.number}
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09, ease: EASE }}
              whileHover={reducedMotion ? {} : { y: -4 }}
              style={{ cursor: 'default' }}
            >
              <div style={{
                background: 'white', borderRadius: 20,
                padding: '1.5rem', border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)', height: '100%',
                transition: 'box-shadow 280ms',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Color top strip */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: COLORS[i], borderRadius: '20px 20px 0 0' }} />

                {/* Number chip */}
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: COLORS[i], color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.8125rem', fontWeight: 800, marginBottom: 14,
                  boxShadow: `0 4px 12px ${COLORS[i]}33`,
                }}>
                  {item.number}
                </div>

                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.125rem', fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
