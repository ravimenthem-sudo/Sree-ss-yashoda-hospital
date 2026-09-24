import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyCallBar } from '@/components/layout/StickyCallBar';
import { LogoWatermarkField } from '@/components/effects/LogoWatermarkField';
import { HomePage } from '@/pages/HomePage';
import { DoctorPage } from '@/pages/DoctorPage';
import { SpecialityPage } from '@/pages/SpecialityPage';
import { BlogPage } from '@/pages/BlogPage';
import { BlogPostPage } from '@/pages/BlogPostPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

function SkipLink() {
  return <a href="#main-content" className="skip-link">Skip to main content</a>;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <SkipLink />
        <LogoWatermarkField />
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/doctors/:slug" element={<DoctorPage />} />
            <Route path="/specialities/:slug" element={<SpecialityPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <StickyCallBar />
      </BrowserRouter>
    </HelmetProvider>
  );
}
