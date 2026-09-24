import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { trackEvent } from '@/lib/analytics';
import logoFull from '@/assets/logo/logo-full.png';

const E = [0.22, 1, 0.36, 1] as const;

type NavItem = { label: string; href: string; sectionId?: string };

const navLinks: NavItem[] = [
  { label: 'Home',         href: '/',              sectionId: 'home' },
  { label: 'About',        href: '/#about',        sectionId: 'about' },
  { label: 'Doctors',      href: '/#doctors',      sectionId: 'doctors' },
  { label: 'Specialities', href: '/#specialities', sectionId: 'specialities' },
  { label: 'Services',     href: '/#why-choose',   sectionId: 'why-choose' },
  { label: 'Blog',         href: '/blog' },
  { label: 'Contact',      href: '/#contact',      sectionId: 'contact' },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeSection,  setActiveSection]  = useState('home');
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sectionIds = navLinks.map(n => n.sectionId).filter(Boolean) as string[];
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 130) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection('home');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleClick = useCallback((item: NavItem) => {
    setMobileOpen(false);
    if (item.sectionId && location.pathname === '/') scrollTo(item.sectionId);
  }, [location.pathname]);

  const isItemActive = (item: NavItem) =>
    item.sectionId ? activeSection === item.sectionId : location.pathname === item.href;

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 9999, height: 3,
          background: 'linear-gradient(90deg, #C0183E, #0891B2)',
          transformOrigin: 'left',
          width: '100%',
          scaleX: 0,
        }}
        id="scroll-bar"
      />

      <header
        role="banner"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          /* Always white — clean, professional */
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
          borderBottom: `1px solid ${scrolled ? '#E2E8F0' : 'rgba(226,232,240,0.6)'}`,
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.07)' : 'none',
          backdropFilter: 'blur(18px) saturate(180%)',
          transition: 'box-shadow 300ms, border-color 300ms',
        }}
      >
        <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 clamp(1.25rem, 3vw, 2.5rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: 66, gap: 8, justifyContent: 'space-between' }}>

            {/* Logo */}
            <Link
              to="/"
              onClick={() => scrollTo('home')}
              aria-label="Sree SS Yashoda Hospital"
              style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0, textDecoration: 'none' }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 11, overflow: 'hidden',
                background: 'white', border: '1.5px solid #F9C0CC',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(192,24,62,0.1)', flexShrink: 0,
              }}>
                <img src={logoFull} alt="" aria-hidden="true" style={{ height: 30, width: 'auto', objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '0.9rem', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.2 }}>
                  Sree SS Yashoda
                </div>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B' }}>
                  Hospital · Anantapur
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Main navigation" className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navLinks.map((item) => {
                const active = isItemActive(item);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={(e) => {
                      if (item.sectionId && location.pathname === '/') {
                        e.preventDefault();
                        handleClick(item);
                      }
                    }}
                    aria-current={active ? 'page' : undefined}
                    style={{
                      display: 'inline-block',
                      padding: '6px 13px', borderRadius: 8,
                      fontSize: '0.875rem', fontWeight: active ? 600 : 500,
                      textDecoration: 'none',
                      color: active ? '#C0183E' : '#374151',
                      background: active ? '#FFF0F3' : 'transparent',
                      transition: 'color 140ms, background 140ms',
                      whiteSpace: 'nowrap', outline: 'none',
                    }}
                    onMouseEnter={e => {
                      if (!active) {
                        (e.currentTarget as HTMLElement).style.color = '#C0183E';
                        (e.currentTarget as HTMLElement).style.background = '#FFF7F8';
                      }
                    }}
                    onMouseLeave={e => {
                      if (!active) {
                        (e.currentTarget as HTMLElement).style.color = '#374151';
                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="desktop-ctas" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                onClick={() => trackEvent('nav_call_click')}
                id="nav-phone"
                style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  padding: '8px 14px', borderRadius: 9,
                  background: '#F8FAFC', border: '1px solid #E2E8F0',
                  fontSize: '0.875rem', fontWeight: 600, color: '#374151',
                  textDecoration: 'none', transition: 'border-color 140ms',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#F9C0CC'; (e.currentTarget as HTMLElement).style.color = '#C0183E'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#E2E8F0'; (e.currentTarget as HTMLElement).style.color = '#374151'; }}
              >
                <Phone size={14} color="#C0183E" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <button
                onClick={() => { trackEvent('nav_book_click'); scrollTo('appointment'); }}
                id="nav-book-btn"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  padding: '8px 18px', borderRadius: 9, border: 'none', cursor: 'pointer',
                  background: 'linear-gradient(135deg, #C0183E 0%, #A6152F 100%)',
                  color: 'white', fontSize: '0.875rem', fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(192,24,62,0.25)',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  whiteSpace: 'nowrap',
                  transition: 'box-shadow 200ms',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(192,24,62,0.4)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 14px rgba(192,24,62,0.25)'; }}
              >
                Contact Us <ArrowRight size={14} />
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
              onClick={() => setMobileOpen(v => !v)}
              className="hamburger-btn"
              style={{
                width: 40, height: 40, borderRadius: 9, border: '1px solid #E2E8F0',
                background: mobileOpen ? '#FFF0F3' : '#F8FAFC',
                display: 'none', alignItems: 'center', justifyContent: 'center',
                color: '#374151', cursor: 'pointer', flexShrink: 0,
                transition: 'background 150ms',
              }}
            >
              {mobileOpen ? <X size={19} color="#C0183E" /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            role="dialog" aria-modal="true" aria-label="Site navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: E }}
            style={{
              position: 'fixed', top: 66, left: 0, right: 0, bottom: 0, zIndex: 999,
              background: 'white', borderTop: '1px solid #E2E8F0',
              padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 4,
            }}
          >
            {navLinks.map((item, i) => (
              <motion.div key={item.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.18, delay: i * 0.04 }}>
                <Link
                  to={item.href}
                  onClick={e => {
                    if (item.sectionId && location.pathname === '/') { e.preventDefault(); handleClick(item); }
                    else setMobileOpen(false);
                  }}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '13px 0', borderBottom: '1px solid #F1F5F9',
                    fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.2rem', fontWeight: 500,
                    color: isItemActive(item) ? '#C0183E' : '#0D1B2A', textDecoration: 'none',
                  }}
                >
                  {item.label}
                  <ArrowRight size={15} color="#94A3B8" />
                </Link>
              </motion.div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: '1.5rem' }}>
              <a href={`tel:${siteConfig.contact.phone}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '13px', borderRadius: 12, border: '1.5px solid #E2E8F0', background: '#F8FAFC', fontSize: '0.9375rem', fontWeight: 700, color: '#0D1B2A', textDecoration: 'none' }}>
                <Phone size={16} color="#C0183E" /> {siteConfig.contact.phoneDisplay}
              </a>
              <button onClick={() => { setMobileOpen(false); scrollTo('appointment'); }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '13px', borderRadius: 12, border: 'none', background: '#C0183E', color: 'white', fontSize: '0.9375rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, system-ui, sans-serif' }}>
                Book Appointment <ArrowRight size={16} />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 960px) { .desktop-nav, .desktop-ctas { display: none !important; } .hamburger-btn { display: flex !important; } }
        @media (min-width: 961px) { .hamburger-btn { display: none !important; } }
        header a:focus, header button:focus { outline: none; }
      `}</style>
    </>
  );
}
