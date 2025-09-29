import React, { useState, useRef } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CalendlyButton } from '../components/CalendlyButton';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'wouter';
import { HoneybookEmbed } from '../components/HoneybookEmbed';
import { HONEYBOOK_FORMS } from '../lib/honeybook';

export default function ConnectWithUs() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const onLearnMore = (id: string) => {
    setSelectedService(id);
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const getServiceTitle = (id: string) => {
    const service = services.find(s => s.id === id);
    return service ? service.title : 'Service Inquiry Form';
  };

  const services = [
    {
      id: 'first-time-project',
      title: t('connect.form.first-time.title'),
      description: t('connect.form.first-time.description'),
      features: [t('connect.form.first-time.feature1'), t('connect.form.first-time.feature2'), t('connect.form.first-time.feature3'), t('connect.form.first-time.feature4'), t('connect.form.first-time.feature5')]
    },
    {
      id: 'moving-services',
      title: t('connect.form.moving.title'),
      description: t('connect.form.moving.description'),
      features: [t('connect.form.moving.feature1'), t('connect.form.moving.feature2'), t('connect.form.moving.feature3'), t('connect.form.moving.feature4')]
    },
    {
      id: 'refresh-sessions',
      title: t('connect.form.refresh.title'),
      description: t('connect.form.refresh.description'),
      features: [t('connect.form.refresh.feature1'), t('connect.form.refresh.feature2'), t('connect.form.refresh.feature3'), t('connect.form.refresh.feature4')]
    },
    {
      id: 'proyecto-inicial',
      title: t('connect.form.spanish.title'),
      description: t('connect.form.spanish.description'),
      features: [t('connect.form.spanish.feature1'), t('connect.form.spanish.feature2'), t('connect.form.spanish.feature3'), t('connect.form.spanish.feature4'), t('connect.form.spanish.feature5')]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#eeeae1' }}>
      <Header />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-heading mb-6"
              style={{ color: '#555843' }}
              data-testid="connect-title"
            >
              {t('connect.title')}
            </h1>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#555843' }}
              data-testid="connect-subtitle"
            >
              {t('connect.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
                style={{ backgroundColor: '#eeeae1' }}
                data-testid={`service-option-${service.id}`}
              >
                <h3 
                  className="text-2xl font-heading mb-4"
                  style={{ color: '#555843' }}
                >
                  {service.title}
                </h3>
                <p 
                  className="mb-6"
                  style={{ color: '#555843' }}
                >
                  {service.description}
                </p>
                <ul className="mb-8 space-y-2">
                  {service.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="flex items-center"
                      style={{ color: '#555843' }}
                    >
                      <span 
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: '#c06446' }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => onLearnMore(service.id)}
                  className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-300"
                  style={{ 
                    backgroundColor: '#c06446',
                    color: '#eeeae1'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5e432c'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#c06446'}
                  data-testid={`get-started-${service.id}`}
                >
                  {t('services.get_started')}
                </button>

              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p 
              className="text-lg mb-6"
              style={{ color: '#555843' }}
            >
              {t('connect.not_sure')}
            </p>
            <Link href="/faqs">
              <button 
                className="py-3 px-8 rounded-lg font-medium transition-all duration-300"
                style={{ 
                  backgroundColor: 'transparent',
                  border: '2px solid #c06446',
                  color: '#c06446'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#c06446';
                  e.currentTarget.style.color = '#eeeae1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#c06446';
                }}
                data-testid="view-faqs-button"
              >
                {t('services.view_faqs')}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section id="inquiry-form" ref={formRef} className="mt-12 mb-24">
        <div className="max-w-3xl mx-auto px-4">
          {selectedService && (
            <>
              <HoneybookEmbed
                src={HONEYBOOK_FORMS[selectedService]}
                title={`HoneyBook ${getServiceTitle(selectedService)} Form`}
                height={1100}
              />
              <p className="mt-3 text-center">
                <a href={HONEYBOOK_FORMS[selectedService]} target="_blank" rel="noopener noreferrer" style={{ color: '#c06446' }}>
                  Having trouble? Open the form in a new tab
                </a>
              </p>
            </>
          )}
        </div>
      </section>

      <Footer />
      <CalendlyButton />
    </div>
  );
}