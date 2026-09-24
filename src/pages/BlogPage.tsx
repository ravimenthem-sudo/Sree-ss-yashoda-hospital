import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/content/blog';
import { siteConfig } from '@/content/site.config';

export function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Health Articles | Sree SS Yashoda Hospital, Anantapur</title>
        <meta name="description" content="Read health articles and guides from Sree SS Yashoda Hospital, Anantapur." />
        <link rel="canonical" href={`${siteConfig.seo.siteUrl}/blog`} />
      </Helmet>

      <div style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--bg)' }}>
        <div className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Health Articles</div>
              <h1 className="display-lg" style={{ maxWidth: 480, margin: '0 auto' }}>
                Health Information{' '}
                <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>You Can Trust</span>
              </h1>
              <p className="lead" style={{ marginTop: '1rem', maxWidth: 520, margin: '1rem auto 0' }}>
                Medically-conservative articles to help you understand health topics and make informed decisions.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  style={{
                    background: 'var(--white)',
                    borderRadius: 24,
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ height: 6, background: 'linear-gradient(90deg, var(--primary) 0%, var(--primary-light) 100%)' }} />
                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                      <span className="badge badge-primary">{post.category}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem', color: 'var(--text-faint)' }}>
                        <Clock size={12} />{post.readTime}
                      </span>
                    </div>
                    <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text)', marginBottom: 10, flex: 1 }}>
                      {post.title}
                    </h2>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 16 }}>
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.slug}`} className="btn btn-ghost btn-sm" style={{ alignSelf: 'flex-start', paddingLeft: 0 }}>
                      Read Article <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
