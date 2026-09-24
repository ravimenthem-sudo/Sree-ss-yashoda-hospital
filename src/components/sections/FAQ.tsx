import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/content/faq';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

export function FAQ() {
  const [open, setOpen] = useState<string | null>(null);
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="faq"
      ref={ref}
      className="section"
      aria-labelledby="faq-heading"
      style={{ background: 'var(--bg)' }}
    >
      <div className="container" style={{ maxWidth: 760, margin: '0 auto' }}>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>FAQ</div>
          <h2 id="faq-heading" className="display-lg" style={{ maxWidth: 460, margin: '0 auto' }}>
            Common{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Questions</span>
          </h2>
        </motion.div>

        <motion.dl
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {faqs.map((faq) => (
            <div key={faq.id} className="accordion-item">
              <dt>
                <button
                  className="accordion-trigger"
                  aria-expanded={open === faq.id}
                  aria-controls={`faq-${faq.id}`}
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => setOpen(open === faq.id ? null : faq.id)}
                >
                  <span style={{ fontSize: '1rem', fontWeight: 500 }}>{faq.question}</span>
                  <span className={`accordion-icon ${open === faq.id ? 'open' : ''}`}>
                    <ChevronDown size={16} />
                  </span>
                </button>
              </dt>
              <dd>
                <AnimatePresence>
                  {open === faq.id && (
                    <motion.div
                      id={`faq-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
