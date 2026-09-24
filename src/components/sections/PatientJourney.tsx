import { motion } from 'framer-motion';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: '01',
    title: 'Book or Call',
    desc: 'Request an appointment online or call us directly. Our team will help you connect with the right specialist.',
  },
  {
    number: '02',
    title: 'Consultation with a Specialist',
    desc: 'Meet with a qualified doctor who will review your history, listen to your concerns and assess your condition.',
  },
  {
    number: '03',
    title: 'Treatment Plan & Care',
    desc: 'Receive a clear, personalised treatment plan. Your doctor will guide you through the recommended approach at every step.',
  },
  {
    number: '04',
    title: 'Recovery & Follow-up',
    desc: 'Post-treatment support and follow-up consultations to monitor your progress and address any ongoing concerns.',
  },
];

export function PatientJourney() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="patient-journey"
      ref={ref}
      className="section"
      aria-labelledby="journey-heading"
      style={{ background: 'var(--maroon-50)' }}
    >
      <div className="container">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Your Care Journey</div>
          <h2 id="journey-heading" className="display-lg" style={{ maxWidth: 500, margin: '0 auto' }}>
            What to Expect{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Step by Step</span>
          </h2>
        </motion.div>

        <div className="timeline" style={{ maxWidth: 720, margin: '0 auto', paddingLeft: 64 }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={reducedMotion ? false : { opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: EASE }}
              style={{
                position: 'relative',
                paddingBottom: i < steps.length - 1 ? '2.5rem' : 0,
              }}
            >
              {/* Step circle */}
              <div style={{
                position: 'absolute',
                left: -64,
                top: 0,
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: inView ? 'var(--primary)' : 'var(--maroon-100)',
                border: '3px solid var(--maroon-100)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--white)',
                fontFamily: 'Fraunces, Georgia, serif',
                fontWeight: 700,
                fontSize: '0.9rem',
                boxShadow: 'var(--shadow-md)',
                transition: 'background 400ms var(--ease-out)',
                transitionDelay: `${i * 150}ms`,
                zIndex: 1,
              }}>
                {step.number}
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={inView ? { height: '100%' } : {}}
                  transition={{ duration: 0.5, delay: (i + 1) * 0.15 }}
                  style={{
                    position: 'absolute',
                    left: -41,
                    top: 48,
                    width: 2,
                    background: 'var(--primary)',
                    opacity: 0.3,
                  }}
                />
              )}

              {/* Content */}
              <div style={{
                background: 'var(--white)',
                borderRadius: 20,
                padding: '1.5rem 1.75rem',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.9375rem' }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
