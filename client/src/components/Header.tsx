import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { trackLanguageChange } from '@/lib/analytics';
import logoImg from '@assets/Primario-ebony-2048x645.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, currentLanguage, setLanguage } = useLanguage();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const oldLang = currentLanguage.code;
    const newLang = currentLanguage.code === 'en' ? 
      { code: 'es' as const, name: 'Español' } : 
      { code: 'en' as const, name: 'English' };

    trackLanguageChange(oldLang, newLang.code);
    setLanguage(newLang);
  };

  const handleNavClick = (link: any) => {
    if (link.isHome && link.scrollTo && location === '/') {
      const element = document.getElementById(link.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar - Schedule Consultation */}
      <div 
        className="py-3 text-center" 
        style={{ 
          backgroundColor: '#F5F3EE', 
          borderBottom: '2px solid #E8E4DB' 
        }}
      >
        <Link 
          href="/connect-with-us" 
          className="text-xs uppercase tracking-[0.15em] font-light" 
          style={{ 
            color: '#3C3C3C',
            fontFamily: 'Montserrat, system-ui, sans-serif' 
          }}
        >
          {t('header.schedule_consultation')}
        </Link>
      </div>

      {/* Main Navigation Bar with Logo */}
      <nav 
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300`}
        style={{ 
          backgroundColor: '#F5F3EE',
          borderBottom: '2px solid #E8E4DB',
          boxShadow: isScrolled ? '0 2px 10px rgba(60, 60, 60, 0.08)' : 'none'
        }}
        data-testid="main-navigation"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">

            {/* Desktop Layout - All on same line */}
            <div className="hidden lg:flex items-center justify-center w-full">

              {/* Left Navigation */}
              <div className="flex items-center space-x-10 flex-1 justify-end">
                <Link
                  href="/"
                  className="text-xs uppercase tracking-[0.15em] transition-colors duration-200"
                  style={{
                    color: '#3C3C3C',
                    fontFamily: 'Montserrat, system-ui, sans-serif',
                    fontWeight: 400
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#8B9574'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#3C3C3C'}
                >
                  {t('nav.home')}
                </Link>
                <Link
                  href="/about"
                  className="text-xs uppercase tracking-[0.15em] transition-colors duration-200"
                  style={{ 
                    color: '#3C3C3C',
                    fontFamily: 'Montserrat, system-ui, sans-serif',
                    fontWeight: 400
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#8B9574'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#3C3C3C'}
                >
                  {t('nav.about')}
                </Link>
                <Link
                  href="/services"
                  className="text-xs uppercase tracking-[0.15em] transition-colors duration-200"
                  style={{ 
                    color: '#3C3C3C',
                    fontFamily: 'Montserrat, system-ui, sans-serif',
                    fontWeight: 400
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#8B9574'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#3C3C3C'}
                >
                  {t('nav.services')}
                </Link>
              </div>

              {/* Center Logo */}
              <div className="px-16">
                <Link href="/" className="inline-block">
                  <img 
                    src={logoImg} 
                    alt="Tidy Home - Your Space Matters" 
                    className="h-16 w-auto"
                  />
                </Link>
              </div>

              {/* Right Navigation */}
              <div className="flex items-center space-x-10 flex-1">
                <Link
                  href="/connect-with-us"
                  className="text-xs uppercase tracking-[0.15em] transition-colors duration-200"
                  style={{ 
                    color: '#3C3C3C',
                    fontFamily: 'Montserrat, system-ui, sans-serif',
                    fontWeight: 400
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#8B9574'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#3C3C3C'}
                >
                  {t('nav.connect')}
                </Link>
                <Link
                  href="/portfolio"
                  className="text-xs uppercase tracking-[0.15em] transition-colors duration-200"
                  style={{ 
                    color: '#3C3C3C',
                    fontFamily: 'Montserrat, system-ui, sans-serif',
                    fontWeight: 400
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#8B9574'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#3C3C3C'}
                >
                  {t('nav.portfolio')}
                </Link>
                <Link
                  href="/faqs"
                  className="text-xs uppercase tracking-[0.15em] transition-colors duration-200"
                  style={{ 
                    color: '#3C3C3C',
                    fontFamily: 'Montserrat, system-ui, sans-serif',
                    fontWeight: 400
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#8B9574'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#3C3C3C'}
                >
                  {t('nav.faqs')}
                </Link>
              </div>
            </div>

            {/* Language - Far Right */}
            <div className="hidden lg:flex items-center space-x-4 absolute right-6">
              <div className="flex items-center space-x-2">
                <Globe className="w-3 h-3" style={{ color: '#3C3C3C' }} />
                <button 
                  onClick={toggleLanguage}
                  className="text-xs transition-colors duration-200"
                  style={{ 
                    color: currentLanguage.code === 'en' ? '#8B9574' : '#3C3C3C',
                    fontFamily: 'Montserrat, system-ui, sans-serif',
                    fontWeight: 400
                  }}
                >
                  EN
                </button>
                <span style={{ color: '#E8E4DB' }}>|</span>
                <button 
                  onClick={toggleLanguage}
                  className="text-xs transition-colors duration-200"
                  style={{ 
                    color: currentLanguage.code === 'es' ? '#8B9574' : '#3C3C3C',
                    fontFamily: 'Montserrat, system-ui, sans-serif',
                    fontWeight: 400
                  }}
                >
                  ES
                </button>
              </div>
            </div>

            {/* Mobile: Logo on left, Menu button on right */}
            <div className="lg:hidden flex items-center justify-between w-full">
              <Link href="/" className="inline-block">
                <img 
                  src={logoImg} 
                  alt="Tidy Home" 
                  className="h-12 w-auto"
                />
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                data-testid="mobile-menu-button"
                style={{ color: '#3C3C3C' }}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden" style={{ backgroundColor: '#F5F3EE', borderTop: '1px solid #E8E4DB' }}>
              <div className="px-4 py-4 space-y-3">
                <Link 
                  href="/" 
                  className="block text-xs uppercase tracking-[0.15em] py-2" 
                  style={{ 
                    color: '#3C3C3C',
                    fontFamily: 'Montserrat, system-ui, sans-serif',
                    fontWeight: 400
                  }}
                >
                  {t('nav.home')}
                </Link>
                <Link
                  href="/about" 
                  className="block text-xs uppercase tracking-[0.15em] py-2" 
                  style={{ 
                    color: '#3C3C3C',
                    fontFamily: 'Montserrat, system-ui, sans-serif',
                    fontWeight: 400
                  }}
                >
                  {t('nav.about')}
                </Link>
                <Link
                  href="/services" 
                  className="block text-xs uppercase tracking-[0.15em] py-2" 
                  style={{ 
                    color: '#3C3C3C',
                    fontFamily: 'Montserrat, system-ui, sans-serif',
                    fontWeight: 400
                  }}
                >
                  {t('nav.services')}
                </Link>
                <Link
                  href="/connect-with-us" 
                  className="block text-xs uppercase tracking-[0.15em] py-2" 
                  style={{ 
                    color: '#3C3C3C',
                    fontFamily: 'Montserrat, system-ui, sans-serif',
                    fontWeight: 400
                  }}
                >
                  {t('nav.connect')}
                </Link>
                <Link
                  href="/portfolio" 
                  className="block text-xs uppercase tracking-[0.15em] py-2" 
                  style={{ 
                    color: '#3C3C3C',
                    fontFamily: 'Montserrat, system-ui, sans-serif',
                    fontWeight: 400
                  }}
                >
                  {t('nav.portfolio')}
                </Link>
                <Link
                  href="/faqs" 
                  className="block text-xs uppercase tracking-[0.15em] py-2" 
                  style={{ 
                    color: '#3C3C3C',
                    fontFamily: 'Montserrat, system-ui, sans-serif',
                    fontWeight: 400
                  }}
                >
                  {t('nav.faqs')}
                </Link>
                <div className="flex items-center pt-3 border-t" style={{ borderColor: '#E8E4DB' }}>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-3 h-3" style={{ color: '#3C3C3C' }} />
                    <button 
                      onClick={toggleLanguage}
                      className="text-xs"
                      style={{ 
                        color: currentLanguage.code === 'en' ? '#8B9574' : '#3C3C3C',
                        fontFamily: 'Montserrat, system-ui, sans-serif'
                      }}
                    >
                      EN
                    </button>
                    <span style={{ color: '#E8E4DB' }}>|</span>
                    <button 
                      onClick={toggleLanguage}
                      className="text-xs"
                      style={{ 
                        color: currentLanguage.code === 'es' ? '#8B9574' : '#3C3C3C',
                        fontFamily: 'Montserrat, system-ui, sans-serif'
                      }}
                    >
                      ES
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}