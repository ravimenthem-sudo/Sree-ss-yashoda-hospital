import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, ChevronRight } from 'lucide-react';
import { getBlogPostBySlug } from '@/content/blog';
import { siteConfig } from '@/content/site.config';
import { NotFoundPage } from './NotFoundPage';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) return <NotFoundPage />;

  // Simple markdown-to-HTML for the content (headings, bold, paragraphs)
  function renderContent(content: string) {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let key = 0;

    lines.forEach((line) => {
      key++;
      if (line.startsWith('## ')) {
        elements.push(<h2 key={key} style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.3rem, 2vw, 1.75rem)', fontWeight: 600, color: 'var(--text)', margin: '2rem 0 0.75rem' }}>{line.replace('## ', '')}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={key} style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text)', margin: '1.5rem 0 0.5rem' }}>{line.replace('### ', '')}</h3>);
      } else if (line.startsWith('---')) {
        elements.push(<hr key={key} className="hairline" style={{ margin: '2rem 0' }} />);
      } else if (line.startsWith('- ')) {
        elements.push(<li key={key} style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 4 }}>{line.replace('- ', '')}</li>);
      } else if (line.startsWith('*') && line.endsWith('*')) {
        elements.push(<p key={key} style={{ color: 'var(--text-faint)', fontSize: '0.875rem', fontStyle: 'italic', lineHeight: 1.6 }}>{line.replace(/\*/g, '')}</p>);
      } else if (line.trim() === '') {
        elements.push(<div key={key} style={{ height: 8 }} />);
      } else {
        // Bold handling
        const parts = line.split(/\*\*(.*?)\*\*/g);
        const children = parts.map((part, i) =>
          i % 2 === 1 ? <strong key={i} style={{ color: 'var(--text)', fontWeight: 600 }}>{part}</strong> : part
        );
        elements.push(<p key={key} style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>{children}</p>);
      }
    });

    return elements;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Sree SS Yashoda Hospital</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`${siteConfig.seo.siteUrl}/blog/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.seo.siteUrl,
          },
          datePublished: post.publishedDate,
        })}</script>
      </Helmet>

      <div style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: 760, paddingTop: '3rem', paddingBottom: '5rem' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: 8, listStyle: 'none', padding: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              <li><Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link></li>
              <li><ChevronRight size={14} /></li>
              <li><Link to="/blog" style={{ color: 'var(--text-muted)' }}>Blog</Link></li>
              <li><ChevronRight size={14} /></li>
              <li aria-current="page" style={{ color: 'var(--text)', fontWeight: 500 }}>{post.title}</li>
            </ol>
          </nav>

          <Link to="/blog" className="btn btn-secondary btn-sm" style={{ marginBottom: '2rem', width: 'fit-content' }}>
            <ArrowLeft size={14} /> Back to Articles
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.25rem' }}>
            <span className="badge badge-primary">{post.category}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              <Clock size={14} />{post.readTime}
            </span>
          </div>

          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 600, color: 'var(--text)', lineHeight: 1.15, marginBottom: '2rem' }}>
            {post.title}
          </h1>

          <div style={{ background: 'var(--white)', borderRadius: 24, border: '1px solid var(--border)', padding: 'clamp(1.5rem, 4vw, 2.5rem)', boxShadow: 'var(--shadow-sm)' }}>
            <ul style={{ paddingLeft: 20, marginBlock: 0 }}>
              {renderContent(post.content)}
            </ul>
          </div>

          <div style={{ marginTop: '2.5rem', padding: '1.25rem 1.5rem', background: 'var(--maroon-50)', borderRadius: 16, border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--text)' }}>Medical Disclaimer:</strong> This article is for general information and isn't a substitute for professional medical advice. If you have concerns about your health, please consult a qualified healthcare professional.
            </p>
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link to="/#appointment" className="btn btn-primary btn-lg">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
