import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { getSpecialityBySlug } from '@/content/specialities';
import { doctors } from '@/content/doctors';
import { siteConfig } from '@/content/site.config';
import { NotFoundPage } from './NotFoundPage';

export function SpecialityPage() {
  const { slug } = useParams<{ slug: string }>();
  const spec = slug ? getSpecialityBySlug(slug) : undefined;

  if (!spec) return <NotFoundPage />;

  const relatedDoctors = doctors.filter((d) => d.specialitySlug === spec.slug);

  return (
    <>
      <Helmet>
        <title>{spec.name} | Sree SS Yashoda Hospital, Anantapur</title>
        <meta name="description" content={`${spec.name} at Sree SS Yashoda Hospital, Anantapur. ${spec.description}`} />
        <link rel="canonical" href={`${siteConfig.seo.siteUrl}/specialities/${spec.slug}`} />
      </Helmet>

      <div style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--bg)' }}>
        <div className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem', maxWidth: 900 }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: 8, listStyle: 'none', padding: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              <li><Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link></li>
              <li><ChevronRight size={14} /></li>
              <li><Link to="/#specialities" style={{ color: 'var(--text-muted)' }}>Specialities</Link></li>
              <li><ChevronRight size={14} /></li>
              <li aria-current="page" style={{ color: 'var(--text)', fontWeight: 500 }}>{spec.name}</li>
            </ol>
          </nav>

          <Link to="/#specialities" className="btn btn-secondary btn-sm" style={{ marginBottom: '2rem', width: 'fit-content' }}>
            <ArrowLeft size={14} /> All Specialities
          </Link>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '1rem' }}>
            {spec.tags.map((tag) => (
              <span key={tag} className="badge badge-primary">{tag}</span>
            ))}
          </div>

          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: 'var(--text)', marginBottom: '1.5rem' }}>
            {spec.name}
          </h1>
          <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 680 }}>
            {spec.description}
          </p>

          {relatedDoctors.length > 0 && (
            <>
              <hr className="hairline" style={{ margin: '2rem 0' }} />
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.4rem', fontWeight: 600, color: 'var(--text)', marginBottom: '1.5rem' }}>
                Specialists in {spec.name}
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                {relatedDoctors.map((d) => (
                  <Link
                    key={d.slug}
                    to={`/doctors/${d.slug}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '12px 16px',
                      background: 'var(--white)',
                      border: '1px solid var(--border)',
                      borderRadius: 16,
                      boxShadow: 'var(--shadow-sm)',
                      textDecoration: 'none',
                      transition: 'box-shadow 200ms',
                    }}
                  >
                    <img
                      src={d.photo}
                      alt={d.photoAlt}
                      width={48}
                      height={48}
                      style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', flexShrink: 0 }}
                    />
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9375rem' }}>{d.name}</div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{d.designation}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          <hr className="hairline" style={{ margin: '2.5rem 0' }} />

          <Link to="/#appointment" className="btn btn-primary btn-lg">
            Book a Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
