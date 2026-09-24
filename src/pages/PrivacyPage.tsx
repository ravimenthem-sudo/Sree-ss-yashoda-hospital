// REVIEW WITH HOSPITAL'S LEGAL ADVISOR BEFORE LAUNCH

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/content/site.config';

export function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Sree SS Yashoda Hospital</title>
        <meta name="description" content="Privacy policy for Sree SS Yashoda Hospital website and appointment request form." />
      </Helmet>

      <div style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: 760, paddingTop: '3rem', paddingBottom: '5rem' }}>
          <div style={{ background: 'var(--maroon-50)', border: '1px solid var(--border)', borderRadius: 12, padding: '12px 16px', marginBottom: '2rem', fontSize: '0.875rem', color: 'var(--primary)' }}>
            ⚠️ This is a draft privacy policy. Please review with a legal advisor before publishing.
          </div>

          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 600, color: 'var(--text)', marginBottom: '2rem' }}>
            Privacy Policy
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            <section>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.75rem' }}>About This Policy</h2>
              <p>This Privacy Policy describes how Sree SS Yashoda Hospital ("we", "us", "the hospital") collects and uses information submitted through this website. Please read this carefully.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.75rem' }}>Information We Collect</h2>
              <p>When you submit an appointment request form on this website, we collect:</p>
              <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                <li>Your name</li>
                <li>Your phone number</li>
                <li>Your preferred speciality, doctor, date and time</li>
                <li>Any optional message you choose to provide</li>
              </ul>
              <p style={{ marginTop: 12 }}>We ask that you do not include detailed medical information in the appointment request form.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.75rem' }}>How We Use Your Information</h2>
              <p>Information collected through the appointment form is used solely for the purpose of contacting you to confirm or arrange an appointment at Sree SS Yashoda Hospital. We do not sell or share your information with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.75rem' }}>Medical Disclaimer</h2>
              <p>Information on this website is for general awareness only and does not constitute or replace professional medical advice, diagnosis or treatment. Always consult a qualified healthcare professional for medical concerns.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.75rem' }}>External Links</h2>
              <p>This website may contain links to external websites (such as Google Maps). We are not responsible for the privacy practices of those sites.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.75rem' }}>Contact</h2>
              <p>For questions about this privacy policy, please contact us by phone at <a href={`tel:${siteConfig.contact.phone}`} style={{ color: 'var(--primary)' }}>{siteConfig.contact.phoneDisplay}</a> or in writing at {siteConfig.contact.address.street}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state}.</p>
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
