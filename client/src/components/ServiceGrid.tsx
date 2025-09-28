import React from 'react';
import type { Service } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import homeOrgImg from '@assets/additional.jpg';
import movingImg from '@assets/concierge.jpg';
import spaceImg from '@assets/space.jpg';
import refreshImg from '@assets/refresh.png';
import additionalImg from '@assets/homeorg.jpg';
import giftImg from '@assets/giftcert.jpg';

interface ServiceGridProps {
  onServiceClick: (serviceId: string) => void;
}

export function ServiceGrid({ onServiceClick }: ServiceGridProps) {
  const { t } = useLanguage();
  
  const services: Service[] = [
    {
      id: 'home-organization',
      title: t('services.home-organization.title'),
      description: t('services.home-organization.description'),
      image: homeOrgImg
    },
    {
      id: 'moving-concierge',
      title: t('services.moving-concierge.title'),
      description: t('services.moving-concierge.description'),
      image: movingImg
    },
    {
      id: 'space-creation',
      title: t('services.space-creation.title'),
      description: t('services.space-creation.description'),
      image: spaceImg
    },
    {
      id: 'refresh-sessions',
      title: t('services.refresh-sessions.title'),
      description: t('services.refresh-sessions.description'),
      image: refreshImg
    },
    {
      id: 'additional-services',
      title: t('services.additional-services.title'),
      description: t('services.additional-services.description'),
      image: additionalImg
    },
    {
      id: 'gift-certificates',
      title: t('services.gift-certificates.title'),
      description: t('services.gift-certificates.description'),
      image: giftImg
    }
  ];

  return (
    <section 
      id="services" 
      className="pt-1 pb-16"
      style={{ backgroundColor: '#eeeae1' }}
      data-testid="services-section"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card bg-alabaster rounded-xl shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              style={{ backgroundColor: '#eeeae1', minHeight: '420px' }}
              onClick={() => onServiceClick(service.id)}
              data-testid={`service-card-${service.id}`}
            >
              <div className="p-6 flex flex-col h-full">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover rounded-lg mb-5"
                  style={{ height: '192px' }}
                  data-testid={`service-image-${service.id}`}
                />
                <h3 
                  className="font-heading text-xl font-semibold mb-3" 
                  style={{ color: '#555843', minHeight: '32px' }}
                  data-testid={`service-title-${service.id}`}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-base mb-4 leading-relaxed flex-grow" 
                  style={{ 
                    color: '#555843', 
                    opacity: 0.9,
                    minHeight: '72px',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical'
                  }}
                  data-testid={`service-description-${service.id}`}
                >
                  {service.description}
                </p>
                <div 
                  className="font-medium hover:underline inline-block mt-auto" 
                  style={{ color: '#c06446' }}
                  data-testid={`service-cta-${service.id}`}
                >
                  {service.id === 'additional-services' ? t('services.view_faqs') : t('services.get_started')}
                  <span className="ml-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}