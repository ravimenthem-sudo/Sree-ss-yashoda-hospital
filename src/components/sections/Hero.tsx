import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, BedDouble, Phone, ShieldCheck, Activity,
  Stethoscope, Clock, Award, MapPin, HeartPulse, UserCheck,
  CheckCircle2, Sparkles, ChevronRight, Zap
} from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { useReducedMotion } from '@/hooks';
import { trackEvent } from '@/lib/analytics';

import hospitalImg from '@/assets/hero/hospital.png';
import doctorSiva from '@/assets/doctors/doctor-sivasankar.png';
import doctorSwetha from '@/assets/doctors/doctor-swetha.png';

const EASE = [0.22, 1, 0.36, 1] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* Framer Variants */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } }
};

/* Specialty Ticker Item */
const tickerSpecialties = [
  'General & Laparoscopic Surgery',
  'Gynaecology & Obstetrics',
  'Neurosurgery & Spine Care',
  'Orthopaedics & Joint Care',
  'General Medicine & Diabetology',
  'Neurology & Brain Care',
];

export function Hero() {
  const rm = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, rm ? 0 : 35]);

  /* Animated Specialty Ticker index */
  const [tickerIndex, setTickerIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex(prev => (prev + 1) % tickerSpecialties.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      aria-label="Hero Section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 60%, #F1F5F9 100%)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '86px',
        paddingBottom: '2rem',
      }}
    >
      {/* ══ PROFESSIONAL ARCHITECTURAL MEDICAL BACKGROUND ADD-ONS ══════════════ */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        
        {/* ADD-ON 1: Soft Ambient Mesh Glow Spheres */}
        <div style={{
          position: 'absolute', top: '-10%', right: '5%', width: '650px', height: '650px',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%', filter: 'blur(50px)',
        }} />

        <div style={{
          position: 'absolute', bottom: '10%', left: '-5%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(192, 24, 62, 0.05) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%', filter: 'blur(50px)',
        }} />

        {/* ADD-ON 2: Concentric Medical Focus Rings behind Hospital Frame */}
        <motion.div
          animate={rm ? {} : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', top: '12%', right: '5%', width: '580px', height: '580px',
            borderRadius: '50%', border: '1.5px dashed rgba(2, 132, 199, 0.12)',
          }}
        />
        <motion.div
          animate={rm ? {} : { rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', top: '18%', right: '9%', width: '460px', height: '460px',
            borderRadius: '50%', border: '1px solid rgba(192, 24, 62, 0.08)',
          }}
        />

        {/* ADD-ON 3: Architectural Hexagonal / Medical Lattice Pattern Grid */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.035 }}>
          <pattern id="hex-grid" width="40" height="69.282" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 20 11.547 L 0 0 L 0 23.094 L 20 34.641 L 40 23.094 Z M 0 34.641 L 20 46.188 L 0 57.735 L 0 80.829 L 20 92.376 L 40 80.829 L 40 57.735 L 20 46.188 Z" fill="none" stroke="#0F172A" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hex-grid)" />
        </svg>

        {/* ADD-ON 4: Faint Medical Cross Watermark Emblem (Left Side Background) */}
        <svg
          style={{ position: 'absolute', top: '25%', left: '3%', opacity: 0.03, pointerEvents: 'none' }}
          width="240" height="240" viewBox="0 0 24 24" fill="#C0183E"
        >
          <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/>
        </svg>

        {/* Top Brand Accent Gradient Bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
          background: 'linear-gradient(90deg, #C0183E 0%, #0284C7 50%, #10B981 100%)'
        }} />
      </div>

      {/* ══ MAIN HERO CONTENT CONTAINER ═══════════════════════════════════ */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: 1340,
        margin: '0 auto',
        width: '100%',
        padding: 'clamp(1.5rem, 3vh, 3rem) clamp(1.25rem, 3vw, 2.5rem)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 'clamp(2rem, 4vw, 3.5rem)',
          alignItems: 'center',
        }}>

          {/* ══ LEFT COLUMN: High-Contrast Copy & Action Hub (7 Cols) ═════════ */}
          <motion.div
            style={{ gridColumn: 'span 7' }}
            initial={rm ? false : 'hidden'}
            animate="visible"
            variants={containerVariants}
            className="hero-left-col"
          >
            {/* Live Hospital Badge */}
            <motion.div variants={itemVariants} style={{ marginBottom: '1.25rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                padding: '7px 16px',
                borderRadius: '100px',
                background: '#FFF0F3',
                border: '1px solid #F9C0CC',
                boxShadow: '0 2px 8px rgba(192, 24, 62, 0.05)',
              }}>
                <motion.span
                  animate={rm ? {} : { scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    background: '#22C55E',
                    boxShadow: '0 0 10px #22C55E',
                  }}
                />
                <span style={{ fontSize: '0.8125rem', fontWeight: 750, color: '#C0183E', letterSpacing: '0.01em' }}>
                  24/7 Multi-Speciality & Emergency Care in Anantapur
                </span>
                <span style={{ width: '1px', height: '14px', background: '#F43F5E30', margin: '0 2px' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 650, color: '#0284C7', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Zap size={12} color="#0284C7" /> Active ICU Ready
                </span>
              </div>
            </motion.div>

            {/* Dynamic Animated Specialty Ticker Bar */}
            <motion.div variants={itemVariants} style={{ marginBottom: '1.25rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '10px',
                background: '#F0F9FF',
                border: '1px solid #BAE6FD',
                color: '#0369A1',
                fontSize: '0.8125rem',
                fontWeight: 650,
              }}>
                <Sparkles size={14} color="#0284C7" />
                <span>Speciality Focus:</span>
                <div style={{ height: '20px', overflow: 'hidden', position: 'relative', width: '240px' }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={tickerIndex}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      style={{ position: 'absolute', left: 0, top: 0, fontWeight: 750, color: '#0284C7', whiteSpace: 'nowrap' }}
                    >
                      {tickerSpecialties[tickerIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Headline H1 */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: 'clamp(2.75rem, 4.5vw, 4.1rem)',
                fontWeight: 850,
                lineHeight: 1.1,
                letterSpacing: '-0.035em',
                color: '#0F172A',
                margin: '0 0 1.25rem 0',
              }}
            >
              Compassionate Care.{' '}
              <span style={{
                background: 'linear-gradient(135deg, #C0183E 0%, #E11D48 50%, #9F1239 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}>
                Trusted Expertise.
              </span>
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
                color: '#475569',
                lineHeight: 1.7,
                maxWidth: '580px',
                margin: '0 0 2.25rem 0',
                fontWeight: 450,
              }}
            >
              Anantapur's premier 52-bed facility delivering advanced general & laparoscopic surgery, gynaecology, orthopaedics, neurosurgery, and round-the-clock emergency medical response.
            </motion.p>

            {/* CTA Buttons Row */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '2.5rem',
              }}
            >
              {/* Primary Book Appointment Button */}
              <motion.button
                onClick={() => { trackEvent('cta_book_click'); scrollTo('appointment'); }}
                id="hero-book-btn"
                whileHover={rm ? {} : { scale: 1.03, y: -3, boxShadow: '0 18px 36px rgba(192, 24, 62, 0.4)' }}
                whileTap={rm ? {} : { scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 34px',
                  borderRadius: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  background: 'linear-gradient(135deg, #C0183E 0%, #9F1239 100%)',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  fontWeight: 750,
                  boxShadow: '0 10px 28px rgba(192, 24, 62, 0.3)',
                  fontFamily: 'Inter, system-ui, sans-serif',
                }}
              >
                Book an Appointment <ArrowRight size={18} />
              </motion.button>

              {/* Emergency Call Button */}
              <motion.a
                href={`tel:${siteConfig.contact.phone}`}
                onClick={() => trackEvent('cta_call_click')}
                id="hero-phone-btn"
                whileHover={rm ? {} : { scale: 1.02, y: -2, background: '#FFFFFF', borderColor: '#0284C7', boxShadow: '0 8px 24px rgba(2, 132, 199, 0.15)' }}
                whileTap={rm ? {} : { scale: 0.98 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 26px',
                  borderRadius: '16px',
                  border: '1.5px solid #CBD5E1',
                  background: '#FFFFFF',
                  color: '#0F172A',
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                  transition: 'all 200ms ease',
                }}
              >
                <div style={{
                  width: '30px', height: '30px', borderRadius: '50%', background: '#EFF6FF',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(2, 132, 199, 0.2)'
                }}>
                  <Phone size={15} color="#0284C7" />
                </div>
                <span>Call Emergency: {siteConfig.contact.phoneDisplay}</span>
              </motion.a>
            </motion.div>

            {/* Doctor Panel Teaser Badges (6 Doctors Summary) */}
            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', paddingTop: '1.25rem', borderTop: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', alignItems: 'center', margin: '0 -4px' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #FFF', overflow: 'hidden', background: '#FFF', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                  <img src={doctorSiva} alt="Dr. B. Siva Sankar Naik" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%', border: '2px solid #FFF',
                  background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', color: '#FFF',
                  marginLeft: -10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.72rem', fontWeight: 800, boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                }}>
                  +5
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.84rem', fontWeight: 750, color: '#0F172A' }}>
                  6 Registered APMC Senior Doctors
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <CheckCircle2 size={12} color="#16A34A" /> General Surgery, OBG, Ortho, Neuro & Medicine
                </div>
              </div>
            </motion.div>
          </motion.div>


          {/* ══ RIGHT COLUMN: Elevated 3D Hospital Showcase & Floating Glass Cards (5 Cols) ═════════ */}
          <motion.div
            style={{ gridColumn: 'span 5' }}
            initial={rm ? false : { opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
            className="hero-right-col"
          >
            <div style={{ position: 'relative' }}>

              {/* Dynamic Soft Glow Behind Card */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute', inset: '-16px',
                  background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(192, 24, 62, 0.1) 60%, transparent 100%)',
                  borderRadius: '36px',
                  filter: 'blur(25px)',
                  zIndex: 0,
                }}
              />

              {/* Main Visual Showcase Frame */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                background: '#FFFFFF',
                borderRadius: '28px',
                padding: '14px',
                boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.15), 0 4px 16px rgba(0, 0, 0, 0.04)',
                border: '1.5px solid rgba(226, 232, 240, 0.9)',
              }}>

                {/* Expanded Vertical Photo Frame */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(460px, 58vh, 600px)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: '#F1F5F9',
                }}>
                  <motion.img
                    src={hospitalImg}
                    alt="Sree SS Yashoda Hospital Exterior Building in Anantapur"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 42%',
                    }}
                    style2={{ y: heroY }}
                  />

                  {/* Soft Cinematic Vignette Overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.65) 0%, rgba(15, 23, 42, 0.05) 50%, transparent 100%)',
                  }} />

                  {/* ✦ FLOATING GLASS BADGE 1: APPCB Certified (Top Right) */}
                  <motion.div
                    animate={rm ? {} : { y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute', top: '16px', right: '16px', zIndex: 3,
                      display: 'flex', alignItems: 'center', gap: '8px',
                      padding: '8px 16px', borderRadius: '100px',
                      background: 'rgba(15, 23, 42, 0.88)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    }}
                  >
                    <ShieldCheck size={15} color="#93C5FD" />
                    <span style={{ fontSize: '0.78rem', fontWeight: 750, color: '#FFFFFF' }}>
                      APPCB Reg. 53622
                    </span>
                  </motion.div>

                  {/* ✦ FLOATING GLASS BADGE 2: Beds Capacity Pill (Top Left) */}
                  <motion.div
                    animate={rm ? {} : { y: [0, 5, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    style={{
                      position: 'absolute', top: '16px', left: '16px', zIndex: 3,
                      display: 'flex', alignItems: 'center', gap: '8px',
                      padding: '8px 16px', borderRadius: '100px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(12px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                      border: '1px solid #F9C0CC',
                    }}
                  >
                    <BedDouble size={15} color="#C0183E" />
                    <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0F172A' }}>
                      52 Inpatient Beds Facility
                    </span>
                  </motion.div>

                  {/* ✦ FLOATING GLASS BADGE 3: Location Tag (Bottom Left) */}
                  <div style={{
                    position: 'absolute', bottom: '18px', left: '16px', zIndex: 3,
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '9px 18px', borderRadius: '100px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                    border: '1px solid rgba(255,255,255,0.8)',
                  }}>
                    <MapPin size={16} color="#C0183E" />
                    <div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 800, color: '#0F172A', lineHeight: 1 }}>Khaja Nagar</div>
                      <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: '#64748B', marginTop: 2 }}>Anantapur, Andhra Pradesh</div>
                    </div>
                  </div>
                </div>

                {/* REAL-TIME DYNAMIC ANIMATED ECG HEARTBEAT WIDGET (Bottom Bar) */}
                <div style={{
                  marginTop: '12px',
                  padding: '14px 18px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  boxShadow: '0 8px 20px rgba(15, 23, 42, 0.15)',
                }}>
                  {/* Heart Icon with Pulse animation */}
                  <motion.div
                    animate={rm ? {} : { scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      width: 36, height: 36, borderRadius: 10, background: 'rgba(244, 63, 94, 0.15)',
                      border: '1px solid rgba(244, 63, 94, 0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}
                  >
                    <HeartPulse size={20} color="#F43F5E" />
                  </motion.div>

                  {/* Animated SVG Pulse Line */}
                  <div style={{ flex: 1, position: 'relative', overflow: 'hidden', height: 26 }}>
                    <svg width="100%" height="26" viewBox="0 0 160 26" preserveAspectRatio="none">
                      <motion.polyline
                        points="0,13 30,13 40,4 50,22 60,2 70,24 80,13 160,13"
                        fill="none"
                        stroke="#F43F5E"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      />
                    </svg>
                  </div>

                  {/* Status Indicator */}
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 750, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
                      <motion.span
                        animate={rm ? {} : { opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E' }}
                      />
                      Active ICU & Surgery
                    </div>
                    <div style={{ fontSize: '0.6875rem', color: '#94A3B8', marginTop: 1 }}>72 BPM · 24/7 Operations</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ══ BOTTOM DYNAMIC CAPABILITY CARDS STRIP ═════════════════════════ */}
        <motion.div
          initial={rm ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginTop: 'clamp(2.5rem, 5vh, 4rem)',
          }}
        >
          {[
            {
              icon: Stethoscope,
              title: '9+ Specialities',
              desc: 'General Surgery, OBG, Ortho & Neurosurgery',
              accent: '#C0183E',
              bg: '#FFF0F3',
              border: '#F9C0CC',
              link: 'specialities'
            },
            {
              icon: BedDouble,
              title: '52 Inpatient Beds',
              desc: 'Modern ICU, Surgical & General Wards',
              accent: '#0284C7',
              bg: '#F0F9FF',
              border: '#BAE6FD',
              link: 'why-choose'
            },
            {
              icon: Clock,
              title: '24/7 Active Care',
              desc: 'Round-the-Clock Emergency & Trauma Unit',
              accent: '#10B981',
              bg: '#ECFDF5',
              border: '#A7F3D0',
              link: 'contact'
            },
            {
              icon: UserCheck,
              title: '6 APMC Doctors',
              desc: 'Senior Registered Medical Specialists',
              accent: '#8B5CF6',
              bg: '#F5F3FF',
              border: '#DDD6FE',
              link: 'doctors'
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              whileHover={rm ? {} : { y: -6, boxShadow: '0 16px 32px rgba(15, 23, 42, 0.08)' }}
              onClick={() => scrollTo(card.link)}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '20px',
                border: '1.5px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                transition: 'all 240ms ease',
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                background: card.bg,
                border: `1.5px solid ${card.border}`,
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                flexShrink: 0,
              }}>
                <card.icon size={24} color={card.accent} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  {card.title}
                  <ChevronRight size={16} color="#94A3B8" />
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '3px', lineHeight: 1.4 }}>
                  {card.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 992px) {
          .hero-left-col { grid-column: span 12 !important; text-align: center; }
          .hero-left-col p { margin-left: auto !important; margin-right: auto !important; }
          .hero-left-col div[style*="justifyContent"] { justify-content: center !important; }
          .hero-right-col { grid-column: span 12 !important; margin-top: 1.5rem; }
        }
      `}</style>
    </section>
  );
}
