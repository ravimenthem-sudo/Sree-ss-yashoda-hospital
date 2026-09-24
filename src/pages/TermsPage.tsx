// REVIEW WITH HOSPITAL'S LEGAL ADVISOR BEFORE LAUNCH

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/content/site.config';

export function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Use | Sree SS Yashoda Hospital</title>
        <meta name="description" content="Terms of use for the Sree SS Yashoda Hospital website." />
      </Helmet>

      <div style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: 760, paddingTop: '3rem', paddingBottom: '5rem' }}>
          <div style={{ background: 'var(--maroon-50)', border: '1px solid var(--border)', borderRadius: 12, padding: '12px 16px', marginBottom: '2rem', fontSize: '0.875rem', color: 'var(--primary)' }}>
            ⚠️ This is a draft terms of use. Please review with a legal advisor before publishing.
          </div>

          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 600, color: 'var(--text)', marginBottom: '2rem' }}>
            Terms of Use
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            <section>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.75rem' }}>Acceptance</h2>
              <p>By using this website, you agree to these Terms of Use. If you do not agree, please do not use this website.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.75rem' }}>Medical Information</h2>
              <p>The content on this website is provided for general informational purposes only and is not intended as medical advice. It is not a substitute for professional medical advice, diagnosis or treatment from a qualified healthcare provider. Always seek the advice of your doctor or other qualified health professional regarding a medical condition.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.75rem' }}>Appointment Requests</h2>
              <p>Submitting an appointment request form on this website does not constitute a confirmed appointment. Appointment details will be confirmed by the hospital team directly. This website and its appointment form should not be used to communicate urgent or emergency medical concerns — please contact emergency services or visit the hospital directly in such cases.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.75rem' }}>Identity</h2>
              <p>Sree SS Yashoda Hospital, Anantapur is an independent hospital. It is not affiliated with or part of the Yashoda Hospitals group headquartered in Hyderabad.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.75rem' }}>Intellectual Property</h2>
              <p>All content on this website — including text, images and design — is the property of Sree SS Yashoda Hospital unless otherwise stated. Unauthorised reproduction or use is not permitted.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.75rem' }}>Changes</h2>
              <p>We may update these terms from time to time. Continued use of the website after changes constitutes your acceptance of the updated terms.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.75rem' }}>Contact</h2>
              <p>For questions, please contact us at <a href={`tel:${siteConfig.contact.phone}`} style={{ color: 'var(--primary)' }}>{siteConfig.contact.phoneDisplay}</a>.</p>
            </section>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/" className="btn btn-secondary btn-sm">← Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}
