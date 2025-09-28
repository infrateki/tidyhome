import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProcessSection } from '../components/ProcessSection';
import { CalendlyButton } from '../components/CalendlyButton';
import { useLanguage } from '../contexts/LanguageContext';
// Temporary team photo - replace with actual team photo when available
import teamPlaceholder from '@assets/valeria_raul.png';

export default function About() {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);

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
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column - Photo */}
                <div className="flex justify-center">
                  <div className="relative w-full max-w-md">
                    {!imageError ? (
                      <img
                        src={teamPlaceholder}
                        alt="Valeria and Raul - Tidy Home founders"
                        className="rounded-lg shadow-xl w-full object-cover"
                        style={{ objectPosition: 'right center' }}
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div
                        className="rounded-lg p-8 flex items-center justify-center"
                        style={{
                          backgroundColor: 'rgba(191, 191, 130, 0.2)',
                          minHeight: '400px',
                          aspectRatio: '4/5',
                          border: '2px dashed #bfbf82'
                        }}
                      >
                        <div className="text-center">
                          <p style={{ color: '#5e432c', fontSize: '18px', fontWeight: '500' }}>
                            Photo of Valeria & Raul
                          </p>
                          <p style={{ color: '#5e432c', fontSize: '14px', marginTop: '8px' }}>
                            [Add image: /images/team/valeria-raul.jpg]
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column - Existing Text */}
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