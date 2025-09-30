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
          <h2
            className="text-center uppercase tracking-[0.2em] font-body text-ebony"
            style={{
              fontSize: '33.6px',  /* 40% larger than 24px */
              opacity: 0.75,
              textShadow: '2px 2px 6px rgba(85,88,67,0.4)',
              fontWeight: 400
            }}
          >
            {t('hero.main_title')}
          </h2>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl text-center font-heading text-alabaster"
            style={{
              textShadow: '2px 2px 6px rgba(85,88,67,0.4)',
              fontWeight: 400
            }}
          >

          </h1>
          <p
            className="max-w-3xl text-center text-lg md:text-xl px-6 font-body-light text-alabaster"
            style={{
              textShadow: '1px 1px 4px rgba(85,88,67,0.4)',
              lineHeight: '1.6'
            }}
          >
          </p>
        </div>

        {/* Empty space in middle for video visibility */}
        <div className="flex-1"></div>

        {/* Buttons at bottom */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pb-20 md:pb-24">
          <Link href="/connect-with-us">
            <button
              className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 font-body"
              style={{
                backgroundColor: '#c06446',
                color: '#eeeae1',
                fontSize: '14px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              {t('hero.cta.book_consultation')}
            </button>
          </Link>
          <Link href="/about">
            <button
              className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 font-body"
              style={{
                backgroundColor: 'transparent',
                border: '2px solid #eeeae1',
                color: '#eeeae1',
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