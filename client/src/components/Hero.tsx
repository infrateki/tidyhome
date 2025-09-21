import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://tidyhomepr.com/wp-content/uploads/2025/03/TIDYHOME.webm" type="video/webm" />
      </video>

      {/* Dark overlay - optional */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Hero Content - Positioned at top and bottom */}
      <div className="relative z-10 h-full flex flex-col justify-between px-4">

        {/* Text at top */}
        <div className="flex flex-col justify-center items-center pt-20 md:pt-24 space-y-4">
          <p 
            className="text-sm md:text-base text-center uppercase tracking-[0.2em]"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              color: '#FFFFFF',
              textShadow: '2px 2px 6px rgba(0,0,0,0.4)'
            }}
          >
            {t('hero.main_title')}
          </p>
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl text-center"
            style={{ 
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 300,
              letterSpacing: '0.02em',
              color: '#FFFFFF',
              textShadow: '2px 2px 6px rgba(0,0,0,0.4)'
            }}
          >
            {t('hero.company_name')}
          </h1>
          <p 
            className="max-w-3xl text-center text-lg md:text-xl px-6"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              color: '#FFFFFF',
              textShadow: '1px 1px 4px rgba(0,0,0,0.4)',
              lineHeight: '1.6'
            }}
          >
            {t('hero.description')}
          </p>
        </div>

        {/* Empty space in middle for video visibility */}
        <div className="flex-1"></div>

        {/* Buttons at bottom */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pb-20 md:pb-24">
          <Link href="/connect-with-us">
            <button 
              className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#8B9574',
                color: '#FFFFFF',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              {t('hero.cta.book_consultation')}
            </button>
          </Link>
          <Link href="/about#process">
            <button
              className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'transparent',
                border: '2px solid #FFFFFF',
                color: '#FFFFFF',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              {t('hero.cta.discover_process')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}