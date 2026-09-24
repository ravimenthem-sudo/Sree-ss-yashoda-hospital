import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ShieldCheck, Stethoscope, Activity, Brain, User } from 'lucide-react';
import { doctors, Doctor } from '@/content/doctors';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

/* Helper icon mapper for specialities */
function getDoctorIcon(slug: string) {
  if (slug.includes('neuro')) return Brain;
  if (slug.includes('surg') || slug.includes('siva')) return Stethoscope;
  return Activity;
}

export function Doctors() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="doctors"
      ref={ref}
      aria-labelledby="doctors-heading"
      style={{
        padding: 'clamp(4rem, 8vh, 6rem) 0',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
      }}
    >
      <div className="container" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(1.25rem, 3vw, 2.5rem)' }}>
        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 14px', borderRadius: 100, background: '#FFF0F3', border: '1px solid #F9C0CC',
            fontSize: '0.8125rem', fontWeight: 700, color: '#C0183E', marginBottom: 12,
          }}>
            <ShieldCheck size={14} color="#C0183E" /> APMC Registered Medical Specialists
          </div>

          <h2 id="doctors-heading" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800,
            lineHeight: 1.15, letterSpacing: '-0.025em', color: '#0F172A',
            maxWidth: 650, margin: '0 auto',
          }}>
            Our Doctor Panel &{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C0183E 0%, #E11D48 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Senior Specialists
            </span>
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#475569', marginTop: '0.875rem', maxWidth: 560, margin: '0.875rem auto 0', lineHeight: 1.6 }}>
            Consult with our panel of registered medical specialists in General Surgery, Medicine, Gynaecology, Orthopaedics, and Neurosurgery.
          </p>
        </motion.div>

        {/* Doctor Grid (6 Doctors) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '24px',
        }}>
          {doctors.map((doctor: Doctor, i: number) => {
            const DoctorIcon = getDoctorIcon(doctor.slug);
            const hasPhoto = Boolean(doctor.photo);

            return (
              <motion.div
                key={doctor.slug}
                initial={reducedMotion ? false : { opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                whileHover={reducedMotion ? {} : { y: -5, boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.12)' }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 250ms ease',
                }}
              >
                {/* Header Image or Avatar Frame */}
                <div style={{
                  position: 'relative',
                  height: hasPhoto ? '260px' : '160px',
                  background: hasPhoto ? '#F1F5F9' : 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {hasPhoto ? (
                    <img
                      src={doctor.photo}
                      alt={doctor.photoAlt}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                    />
                  ) : (
                    /* Stylized Medical Avatar Placeholder when photo is missing */
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                      <div style={{
                        width: '70px', height: '70px', borderRadius: '50%',
                        background: 'rgba(255,255,255,0.1)',
                        border: '2px solid rgba(255,255,255,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 10px',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                      }}>
                        <DoctorIcon size={32} color="#FDA4AF" />
                      </div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        Sree SS Yashoda Medical Faculty
                      </div>
                    </div>
                  )}

                  {/* Speciality Tag Badge - Top Left */}
                  <div style={{ position: 'absolute', top: 14, left: 14 }}>
                    <span style={{
                      display: 'inline-block', padding: '5px 12px', borderRadius: '100px',
                      background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
                      fontSize: '0.75rem', fontWeight: 750, color: '#C0183E',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}>
                      {doctor.speciality}
                    </span>
                  </div>

                  {/* APMC Reg Badge - Top Right */}
                  <div style={{ position: 'absolute', top: 14, right: 14 }}>
                    <span style={{
                      display: 'inline-block', padding: '4px 10px', borderRadius: '100px',
                      background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(8px)',
                      fontSize: '0.7rem', fontWeight: 650, color: '#93C5FD',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}>
                      {doctor.apmcReg}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Doctor Name */}
                  <h3 style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '1.25rem', fontWeight: 800, color: '#0F172A',
                    margin: '0 0 4px 0', lineHeight: 1.3,
                  }}>
                    {doctor.name}
                  </h3>

                  {/* Designation */}
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#C0183E', marginBottom: '8px' }}>
                    {doctor.designation}
                  </div>

                  {/* Qualifications */}
                  <div style={{
                    fontSize: '0.8125rem', color: '#64748B', lineHeight: 1.5,
                    marginBottom: '16px', paddingBottom: '14px', borderBottom: '1px solid #F1F5F9',
                    minHeight: '42px',
                  }}>
                    {doctor.qualifications}
                  </div>

                  {/* Focus Area Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {doctor.focusAreas.map((area: string) => (
                      <span key={area} style={{
                        padding: '4px 10px', borderRadius: '8px',
                        fontSize: '0.72rem', fontWeight: 600,
                        background: '#F1F5F9', color: '#334155',
                        border: '1px solid #E2E8F0',
                      }}>
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* Footer Buttons */}
                  <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '10px' }}>
                    <Link
                      to={`/#appointment?doctor=${doctor.slug}`}
                      className="btn-primary"
                      id={`book-${doctor.slug}`}
                      style={{
                        flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        gap: '6px', padding: '11px 16px', borderRadius: '12px',
                        background: 'linear-gradient(135deg, #C0183E 0%, #9F1239 100%)',
                        color: 'white', fontSize: '0.84rem', fontWeight: 700,
                        textDecoration: 'none', textAlign: 'center', boxShadow: '0 4px 12px rgba(192,24,62,0.2)',
                      }}
                    >
                      {doctor.appointmentLabel}
                    </Link>

                    <Link
                      to={`/doctors/${doctor.slug}`}
                      style={{
                        width: '42px', height: '42px', borderRadius: '12px',
                        background: '#F8FAFC', border: '1.5px solid #E2E8F0',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#64748B', textDecoration: 'none', flexShrink: 0,
                        transition: 'all 150ms ease',
                      }}
                      aria-label={`View profile of ${doctor.name}`}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#C0183E'; (e.currentTarget as HTMLElement).style.color = '#C0183E'; (e.currentTarget as HTMLElement).style.background = '#FFF0F3'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#E2E8F0'; (e.currentTarget as HTMLElement).style.color = '#64748B'; (e.currentTarget as HTMLElement).style.background = '#F8FAFC'; }}
                    >
                      <ExternalLink size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
