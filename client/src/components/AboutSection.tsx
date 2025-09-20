import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import aboutImg from '@assets/530841115_18029953709695682_8719123475487043815_nfull_1757452360530.webp';

export function AboutSection() {
  const { t } = useLanguage();

  const scrollToConnect = () => {
    window.location.href = '/connect';
  };

  return (
    <section id="about" className="py-20 bg-white" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              className="text-3xl md:text-4xl font-heading font-bold text-ebony mb-4"
              data-testid="about-title"
            >
              {t('about.title')}
            </h2>
            <h3 
              className="text-xl font-heading font-semibold text-sage mb-6"
              data-testid="about-subtitle"
            >
              {t('about.subtitle')}
            </h3>
            <p 
              className="text-lg text-muted-foreground leading-relaxed mb-8"
              data-testid="about-description"
            >
              {t('about.description')}
            </p>
            <Button 
              onClick={scrollToConnect}
              className="bg-sage text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-sage-dark transition-colors"
              data-testid="about-cta"
            >
              {t('about.cta')}
            </Button>
          </div>
          <div>
            <img 
              src={aboutImg} 
              alt="Professional organization team at work" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
