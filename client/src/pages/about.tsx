import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProcessSection } from '../components/ProcessSection';
import { CalendlyButton } from '../components/CalendlyButton';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#eeeae1' }}>
      <Header />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-heading mb-6"
              style={{ color: '#555843' }}
              data-testid="about-title"
            >
              {t('about.page.title')}
            </h1>
          </div>

          <div className="mb-20">
            <h2 
              className="text-3xl font-heading mb-8 text-center"
              style={{ color: '#555843' }}
              data-testid="our-brand-title"
            >
              {t('about.brand.title')}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p style={{ color: '#555843', lineHeight: '1.8' }}>
                {t('about.brand.paragraph1')}
              </p>
              <p style={{ color: '#555843', lineHeight: '1.8' }}>
                {t('about.brand.paragraph2')}
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 
              className="text-3xl font-heading mb-8 text-center"
              style={{ color: '#555843' }}
              data-testid="journey-title"
            >
              {t('about.journey.title')}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p style={{ color: '#555843', lineHeight: '1.8' }}>
                {t('about.journey.paragraph1')}
              </p>
              <p style={{ color: '#555843', lineHeight: '1.8' }}>
                {t('about.journey.paragraph2')}
              </p>
              <p style={{ color: '#555843', lineHeight: '1.8' }}>
                {t('about.journey.paragraph3')}
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 
              className="text-3xl font-heading mb-8 text-center"
              style={{ color: '#555843' }}
              data-testid="meet-team-title"
            >
              {t('about.team.title')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div 
                    className="aspect-square rounded-xl"
                    style={{ backgroundColor: '#eeeae1' }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <p style={{ color: '#555843' }}>Photo of Valeria & Raul</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p style={{ color: '#555843', lineHeight: '1.8' }}>
                    {t('about.team.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />

      <Footer />
      <CalendlyButton />
    </div>
  );
}