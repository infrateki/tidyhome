import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';

export function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: 1,
      title: t('process.step_1_title'),
      description: t('process.step_1_description')
    },
    {
      number: 2,
      title: t('process.step_2_title'),
      description: t('process.step_2_description')
    },
    {
      number: 3,
      title: t('process.step_3_title'),
      description: t('process.step_3_description')
    },
    {
      number: 4,
      title: t('process.step_4_title'),
      description: t('process.step_4_description')
    }
  ];

  return (
    <section id="process" className="py-20 bg-muted" data-testid="process-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4" data-testid="process-title">
            {t('process.title')}
          </h2>
          <p className="text-xl text-muted-foreground font-body" data-testid="process-subtitle">
            {t('process.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center" data-testid={`process-step-${step.number}`}>
              <div className="bg-ebony text-alabaster w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold" data-testid={`step-number-${step.number}`}>
                {step.number}
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3" data-testid={`step-title-${step.number}`}>
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body" data-testid={`step-description-${step.number}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/connect-with-us">
            <button 
              className="px-8 py-4 rounded-lg transition-colors font-medium"
              style={{ backgroundColor: '#c06446', color: '#eeeae1' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5e432c'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#c06446'}
              data-testid="process-cta"
            >
              {t('process.cta_button')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
