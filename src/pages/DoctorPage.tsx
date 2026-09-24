import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Award, ChevronRight, ShieldCheck, Stethoscope } from 'lucide-react';
import { getDoctorBySlug } from '@/content/doctors';
import { siteConfig } from '@/content/site.config';
import { NotFoundPage } from './NotFoundPage';

export function DoctorPage() {
  const { slug } = useParams<{ slug: string }>();
  const doctor = slug ? getDoctorBySlug(slug) : undefined;

  if (!doctor) return <NotFoundPage />;

  return (
    <>
      <Helmet>
        <title>{doctor.name} — {doctor.designation} | Sree SS Yashoda Hospital</title>
        <meta name="description" content={`${doctor.name} is a ${doctor.designation} at Sree SS Yashoda Hospital, Anantapur. ${doctor.qualifications}. ${doctor.apmcReg}. ${doctor.focusAreas.join(', ')}.`} />
        <link rel="canonical" href={`${siteConfig.seo.siteUrl}/doctors/${doctor.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Physician',
          name: doctor.name,
          medicalSpecialty: doctor.speciality,
          alumniOf: doctor.qualifications,
          identifier: doctor.apmcReg,
          worksFor: {
            '@type': 'Hospital',
            name: siteConfig.name,
          },
        })}</script>
      </Helmet>

      <div style={{ paddingTop: 80, minHeight: '100vh', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', paddingTop: '3rem', paddingBottom: '5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: 8, listStyle: 'none', padding: 0, fontSize: '0.875rem', color: '#64748B' }}>
              <li><Link to="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link></li>
              <li><ChevronRight size={14} /></li>
              <li><Link to="/#doctors" style={{ color: '#64748B', textDecoration: 'none' }}>Doctors</Link></li>
              <li><ChevronRight size={14} /></li>
              <li aria-current="page" style={{ color: '#0F172A', fontWeight: 600 }}>{doctor.name}</li>
            </ol>
          </nav>

          <Link to="/#doctors" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 16px', borderRadius: 10, background: '#FFFFFF', border: '1px solid #E2E8F0',
            fontSize: '0.875rem', fontWeight: 600, color: '#334155', textDecoration: 'none',
            marginBottom: '2rem', boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
          }}>
            <ArrowLeft size={15} /> Back to Doctors Panel
          </Link>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', alignItems: 'start',
            background: '#FFFFFF', padding: '2.5rem', borderRadius: '24px',
            border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
          }}>
            {/* Left Photo Column */}
            <div style={{ gridColumn: 'span 4' }}>
              <div style={{
                borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                aspectRatio: '3/4', background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                position: 'relative',
              }}>
                {doctor.photo ? (
                  <img
                    src={doctor.photo}
                    alt={doctor.photoAlt}
                    width={360}
                    height={480}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  />
                ) : (
                  <div style={{
                    width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', color: 'white', padding: '2rem', textAlign: 'center'
                  }}>
                    <div style={{
                      width: '80px', height: '80px', borderRadius: '50%',
                      background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem'
                    }}>
                      <Stethoscope size={40} color="#FDA4AF" />
                    </div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>{doctor.name}</div>
                    <div style={{ fontSize: '0.8125rem', color: '#93C5FD', marginTop: '6px', fontWeight: 600 }}>{doctor.apmcReg}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Info Column */}
            <div style={{ gridColumn: 'span 8' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: '1rem', alignItems: 'center' }}>
                <span style={{
                  padding: '5px 14px', borderRadius: 100, background: '#FFF0F3', border: '1px solid #F9C0CC',
                  fontSize: '0.8125rem', fontWeight: 750, color: '#C0183E'
                }}>
                  {doctor.speciality}
                </span>

                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '5px 14px', borderRadius: 100, background: '#EFF6FF', border: '1px solid #BFDBFE',
                  fontSize: '0.8125rem', fontWeight: 700, color: '#1E40AF'
                }}>
                  <ShieldCheck size={14} color="#1E40AF" /> {doctor.apmcReg}
                </span>
              </div>

              <h1 style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 850, color: '#0F172A',
                marginBottom: '0.5rem', lineHeight: 1.15
              }}>
                {doctor.name}
              </h1>

              <div style={{ fontSize: '1.125rem', color: '#C0183E', fontWeight: 750, marginBottom: '0.875rem' }}>
                {doctor.designation}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem', background: '#F8FAFC', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <Award size={18} color="#C0183E" />
                <span style={{ color: '#334155', fontWeight: 600, fontSize: '0.9375rem' }}>{doctor.qualifications}</span>
              </div>

              <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '1.025rem', marginBottom: '1.75rem' }}>
                {doctor.bio}
              </p>

              <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.875rem' }}>
                Areas of Clinical Focus
              </h2>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '2.5rem' }}>
                {doctor.focusAreas.map((area) => (
                  <span key={area} style={{
                    padding: '6px 14px', borderRadius: '100px', background: '#F1F5F9', border: '1px solid #CBD5E1',
                    fontSize: '0.8125rem', fontWeight: 600, color: '#1E293B'
                  }}>
                    {area}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to={`/#appointment?doctor=${doctor.slug}`} style={{
                  padding: '14px 28px', borderRadius: '12px', background: 'linear-gradient(135deg, #C0183E 0%, #9F1239 100%)',
                  color: 'white', fontWeight: 750, fontSize: '0.9375rem', textDecoration: 'none', boxShadow: '0 4px 14px rgba(192,24,62,0.25)'
                }}>
                  {doctor.appointmentLabel}
                </Link>
                <Link to={`/specialities/${doctor.specialitySlug}`} style={{
                  padding: '14px 24px', borderRadius: '12px', background: '#F8FAFC', border: '1.5px solid #E2E8F0',
                  color: '#334155', fontWeight: 650, fontSize: '0.9375rem', textDecoration: 'none'
                }}>
                  View Speciality Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .container > div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
          .container > div[style*="grid-template-columns"] > div { grid-column: span 12 !important; }
        }
      `}</style>
    </>
  );
}
