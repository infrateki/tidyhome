import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function BrandIntroduction() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-cream" data-testid="brand-introduction">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 
          className="text-3xl md:text-4xl font-heading font-bold text-ebony mb-8"
          data-testid="brand-intro-title"
        >
          {t('brand.title')}
        </h2>
        <p 
          className="text-lg text-muted-foreground leading-relaxed"
          data-testid="brand-intro-description"
        >
          {t('brand.description')}
        </p>
      </div>
    </section>
  );
}
