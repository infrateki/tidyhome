import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { useLanguage } from '../contexts/LanguageContext';

export default function Connect() {
  const { t } = useLanguage();

  const forms = [
    {
      id: 'first-time-project',
      title: t('connect.form.first-time.title'),
      description: t('connect.form.first-time.description'),
      embedCode: 'first-time-project'
    },
    {
      id: 'proyecto-inicial',
      title: t('connect.form.spanish.title'),
      description: t('connect.form.spanish.description'),
      embedCode: 'proyecto-inicial'
    },
    {
      id: 'moving-services',
      title: t('connect.form.moving.title'),
      description: t('connect.form.moving.description'),
      embedCode: 'moving-services'
    },
    {
      id: 'refresh-sessions',
      title: t('connect.form.refresh.title'),
      description: t('connect.form.refresh.description'),
      embedCode: 'refresh-sessions'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-background" data-testid="connect-page">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 
                className="text-4xl md:text-5xl font-heading font-bold text-ebony mb-6"
                data-testid="connect-title"
              >
                {t('connect.title')}
              </h1>
              <p 
                className="text-lg text-muted-foreground max-w-3xl mx-auto"
                data-testid="connect-description"
              >
                {t('connect.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {forms.map((form) => (
                <div 
                  key={form.id}
                  className="bg-cream p-8 rounded-xl shadow-lg"
                  data-testid={`form-section-${form.id}`}
                >
                  <h3 
                    className="text-2xl font-heading font-semibold text-ebony mb-4"
                    data-testid={`form-title-${form.id}`}
                  >
                    {form.title}
                  </h3>
                  <p 
                    className="text-muted-foreground mb-6"
                    data-testid={`form-description-${form.id}`}
                  >
                    {form.description}
                  </p>
                  
                  {/* HoneyBook Form Embed Placeholder */}
                  <div 
                    className="bg-white p-6 rounded-lg border border-border min-h-[400px] flex items-center justify-center"
                    data-testid={`form-embed-${form.id}`}
                  >
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg 
                          className="w-8 h-8 text-sage" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <p className="font-medium">HoneyBook Form: {form.title}</p>
                      <p className="text-sm mt-2">Form will be embedded here</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
