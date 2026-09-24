import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/content/blog';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

export function BlogPreview() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();
  const preview = blogPosts.slice(0, 3);

  return (
    <section
      id="blog-preview"
      ref={ref}
      className="section"
      aria-labelledby="blog-preview-heading"
      style={{ background: 'var(--bg)' }}
    >
      <div className="container">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 'clamp(2rem, 4vw, 3rem)' }}
        >
          <div>
            <div className="section-label">Health Articles</div>
            <h2 id="blog-preview-heading" className="display-lg" style={{ maxWidth: 400 }}>
              Informed{' '}
              <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Patients,</span>{' '}
              Better Outcomes
            </h2>
          </div>
          <Link to="/blog" className="btn btn-secondary" style={{ flexShrink: 0 }}>
            All Articles
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {preview.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: EASE }}
              style={{
                background: 'var(--white)',
                borderRadius: 24,
                border: '1px solid var(--border)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                transition: 'box-shadow 300ms, transform 300ms',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Category banner */}
              <div style={{
                height: 6,
                background: 'linear-gradient(90deg, var(--primary) 0%, var(--primary-light) 100%)',
              }} />

              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span className="badge badge-primary">{post.category}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem', color: 'var(--text-faint)' }}>
                    <Clock size={12} />{post.readTime}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1.3, marginBottom: 10, flex: 1 }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 16 }}>
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="btn btn-ghost btn-sm"
                  style={{ alignSelf: 'flex-start', paddingLeft: 0 }}
                  aria-label={`Read: ${post.title}`}
                >
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
