import { motion } from 'framer-motion';
import { BedDouble, LayoutGrid, MapPin, Award } from 'lucide-react';
import { useInView, useCountUp, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { icon: BedDouble,   number: 52,   suffix: '',  label: 'Beds',           sub: 'Inpatient Capacity',  color: '#C0183E', bg: '#FFF1F4', border: '#F5C2CE' },
  { icon: LayoutGrid,  number: 9,    suffix: '+', label: 'Specialities',   sub: 'Areas of Expert Care', color: '#1C3A6E', bg: '#EFF4FF', border: '#C7D5F0' },
  { icon: Award,       number: null, suffix: '',  label: 'Specialists',    sub: 'Expert Doctors On-Site', color: '#0891B2', bg: '#ECFEFF', border: '#BAE6F7' },
  { icon: MapPin,      number: null, suffix: '',  label: 'Khaja Nagar',    sub: 'Anantapur, AP',        color: '#D97706', bg: '#FFFBEB', border: '#FDE68A' },
];

function StatItem({ icon: Icon, number, suffix, label, sub, index, color, bg, border }: {
  icon: React.ComponentType<{ size?: number; color?: string }>;
  number: number | null; suffix: string; label: string; sub: string;
  index: number; color: string; bg: string; border: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const reducedMotion = useReducedMotion();
  const count = useCountUp(number ?? 0, inView && !reducedMotion, 1600);

  return (
    <motion.div
      ref={ref}
      className="trust-item"
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: bg, border: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon size={20} color={color} />
        </div>
        {number !== null ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 700, color, lineHeight: 1 }}>
              {reducedMotion ? number : count}{suffix}
            </div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', marginTop: 4 }}>{label}</div>
            <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>{sub}</div>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', fontWeight: 600, color, lineHeight: 1.2 }}>{label}</div>
            <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)', marginTop: 4 }}>{sub}</div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function TrustStrip() {
  return (
    <section id="trust-strip" aria-label="Hospital at a glance" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="trust-strip">
          {stats.map((s, i) => <StatItem key={s.label} {...s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
