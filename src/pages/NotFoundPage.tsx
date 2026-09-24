import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Sree SS Yashoda Hospital</title>
      </Helmet>

      <div style={{
        paddingTop: 80,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg)',
        textAlign: 'center',
        padding: '80px 24px',
      }}>
        <div>
          <div style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(6rem, 15vw, 10rem)',
            fontWeight: 700,
            color: 'var(--maroon-100)',
            lineHeight: 1,
            marginBottom: '1rem',
          }}>
            404
          </div>
          <h1 style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 600,
            color: 'var(--text)',
            marginBottom: '1rem',
          }}>
            Page Not Found
          </h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: 400, margin: '0 auto 2rem' }}>
            The page you're looking for doesn't exist. Try going back to the home page.
          </p>
          <Link to="/" className="btn btn-primary btn-lg">
            <Home size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
