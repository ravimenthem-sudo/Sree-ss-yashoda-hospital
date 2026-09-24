import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { specialities } from '@/content/specialities';
import { doctors } from '@/content/doctors';
import { siteConfig } from '@/content/site.config';
import { submitAppointment } from '@/lib/appointment';
import { useInView, useReducedMotion } from '@/hooks';
import { trackEvent } from '@/lib/analytics';

// Zod schema
const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z.string().regex(/^(?:\+91)?[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  speciality: z.string().min(1, 'Please select a speciality'),
  doctor: z.string().optional(),
  preferredDate: z.string().min(1, 'Please choose a date').refine((d) => {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    return new Date(d) >= today;
  }, 'Date cannot be in the past'),
  preferredTime: z.string().min(1, 'Please select a time preference'),
  message: z.string().max(500, 'Max 500 characters').optional(),
  consent: z.literal(true, { errorMap: () => ({ message: 'Please confirm your consent' }) }),
  honeypot: z.string().max(0).optional(), // anti-spam
});

type FormValues = z.infer<typeof schema>;

const EASE = [0.22, 1, 0.36, 1] as const;

export function Appointment() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema) as Parameters<typeof useForm<FormValues>>[0]['resolver'],
  });

  const selectedSpeciality = watch('speciality');
  const filteredDoctors = selectedSpeciality
    ? doctors.filter((d) => d.specialitySlug === specialities.find((s) => s.name === selectedSpeciality)?.slug)
    : doctors;

  // Pre-fill doctor from URL param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const doctorSlug = params.get('doctor');
    if (doctorSlug) {
      const doctor = doctors.find((d) => d.slug === doctorSlug);
      if (doctor) {
        reset({ doctor: doctor.name, speciality: doctor.speciality });
      }
    }
  }, [reset]);

  const onSubmit = async (data: FormValues) => {
    setStatus('submitting');
    try {
      const result = await submitAppointment({
        fullName: data.fullName,
        phone: data.phone,
        speciality: data.speciality,
        doctor: data.doctor,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        message: data.message,
        consent: data.consent,
      });
      if (result.success) {
        setStatus('success');
        trackEvent('appointment_submit_success');
      } else {
        setStatus('error');
        setErrorMsg('Something went wrong. Please try again or call us.');
        trackEvent('appointment_submit_error');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
      trackEvent('appointment_submit_error');
    }
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section
      id="appointment"
      ref={ref}
      className="section"
      aria-labelledby="appointment-heading"
      style={{ background: 'var(--maroon-50)' }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2rem, 5vw, 5rem)',
          alignItems: 'start',
        }}>
          {/* Left */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ position: 'sticky', top: 100 }}
          >
            <div className="section-label">Book Appointment</div>
            <h2 id="appointment-heading" className="display-lg" style={{ marginBottom: '1rem' }}>
              Take the Next Step Towards{' '}
              <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Better Healthcare</span>
            </h2>
            <p className="lead" style={{ marginBottom: '2rem' }}>
              Fill the form or call us directly. We'll confirm your appointment details personally.
            </p>

            <a
              href={`tel:${siteConfig.contact.phone}`}
              onClick={() => trackEvent('cta_call_click')}
              className="btn btn-primary"
              id="appointment-call-btn"
              style={{ width: 'fit-content' }}
            >
              <Phone size={18} />
              Call {siteConfig.contact.phoneDisplay}
            </a>

            <div style={{
              marginTop: '2rem',
              padding: '16px 20px',
              background: 'var(--white)',
              borderRadius: 16,
              border: '1px solid var(--border)',
            }}>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--text)' }}>Note:</strong> This is an appointment request, not an instant booking. The hospital will contact you to confirm. Please don't include detailed medical information in the form.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {status === 'success' ? (
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: 'var(--white)',
                  borderRadius: 28,
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-lg)',
                  textAlign: 'center',
                }}
              >
                <CheckCircle2 size={56} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--text)' }}>
                  Request Received
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  We've received your request. The hospital will contact you to confirm — this is not a confirmed booking.
                </p>
                <button
                  onClick={() => { setStatus('idle'); reset(); }}
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '1.5rem' }}
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-labelledby="appointment-heading"
                style={{
                  background: 'var(--white)',
                  borderRadius: 28,
                  padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                }}
              >
                {/* Honeypot */}
                <input {...register('honeypot')} type="text" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                {/* Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">
                    Full Name <span className="required" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    className={`form-input ${errors.fullName ? 'error' : ''}`}
                    placeholder="Your full name"
                    aria-required="true"
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    {...register('fullName')}
                  />
                  {errors.fullName && (
                    <span id="fullName-error" className="form-error" role="alert">
                      <AlertCircle size={12} />{errors.fullName.message}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone Number <span className="required" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="numeric"
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="10-digit mobile number"
                    aria-required="true"
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <span id="phone-error" className="form-error" role="alert">
                      <AlertCircle size={12} />{errors.phone.message}
                    </span>
                  )}
                </div>

                {/* Speciality */}
                <div className="form-group">
                  <label className="form-label" htmlFor="speciality">
                    Speciality <span className="required" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="speciality"
                    className={`form-select ${errors.speciality ? 'error' : ''}`}
                    aria-required="true"
                    aria-describedby={errors.speciality ? 'speciality-error' : undefined}
                    {...register('speciality')}
                  >
                    <option value="">Select a speciality</option>
                    {specialities.map((s) => (
                      <option key={s.slug} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                  {errors.speciality && (
                    <span id="speciality-error" className="form-error" role="alert">
                      <AlertCircle size={12} />{errors.speciality.message}
                    </span>
                  )}
                </div>

                {/* Doctor (dependent) */}
                <div className="form-group">
                  <label className="form-label" htmlFor="doctor">
                    Preferred Doctor <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(Optional)</span>
                  </label>
                  <select id="doctor" className="form-select" {...register('doctor')}>
                    <option value="">No preference</option>
                    {filteredDoctors.map((d) => (
                      <option key={d.slug} value={d.name}>{d.name} — {d.designation}</option>
                    ))}
                  </select>
                </div>

                {/* Date & Time */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="preferredDate">
                      Preferred Date <span className="required" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      min={todayStr}
                      className={`form-input ${errors.preferredDate ? 'error' : ''}`}
                      aria-required="true"
                      {...register('preferredDate')}
                    />
                    {errors.preferredDate && (
                      <span className="form-error" role="alert">
                        <AlertCircle size={12} />{errors.preferredDate.message}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="preferredTime">
                      Preferred Time <span className="required" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="preferredTime"
                      className={`form-select ${errors.preferredTime ? 'error' : ''}`}
                      aria-required="true"
                      {...register('preferredTime')}
                    >
                      <option value="">Select</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                    {errors.preferredTime && (
                      <span className="form-error" role="alert">
                        <AlertCircle size={12} />{errors.preferredTime.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Reason / Message <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(Optional, max 500 chars)</span>
                  </label>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: 6 }}>
                    Please don't include detailed medical information here.
                  </p>
                  <textarea
                    id="message"
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    placeholder="Briefly describe the reason for your visit..."
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    maxLength={500}
                    {...register('message')}
                  />
                  {errors.message && (
                    <span id="message-error" className="form-error" role="alert">
                      <AlertCircle size={12} />{errors.message.message}
                    </span>
                  )}
                </div>

                {/* Consent */}
                <div className="checkbox-group">
                  <input
                    id="consent"
                    type="checkbox"
                    aria-required="true"
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                    {...register('consent')}
                  />
                  <label htmlFor="consent" style={{ fontSize: '0.875rem', color: 'var(--text-muted)', cursor: 'pointer', lineHeight: 1.5 }}>
                    I agree to be contacted about this appointment request.{' '}
                    <Link to="/privacy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Privacy Policy</Link>
                  </label>
                </div>
                {errors.consent && (
                  <span id="consent-error" className="form-error" role="alert" aria-live="polite">
                    <AlertCircle size={12} />{errors.consent.message}
                  </span>
                )}

                {errorMsg && (
                  <div role="alert" aria-live="assertive" style={{
                    padding: '12px 16px',
                    background: '#FEF2F2',
                    border: '1px solid #FCA5A5',
                    borderRadius: 12,
                    color: '#DC2626',
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}>
                    <AlertCircle size={14} />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  id="appointment-submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%' }}
                >
                  {status === 'submitting' ? 'Sending Request…' : 'Request Appointment'}
                  {status !== 'submitting' && <ArrowRight size={18} />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #appointment > .container > div { grid-template-columns: 1fr !important; }
          #appointment > .container > div > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}
