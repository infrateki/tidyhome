import React from 'react';
import type { Service } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import homeOrgImg from '@assets/homeorg.jpg'; 
import movingImg from '@assets/IMG_1918_1757566915330.jpeg';
import spaceImg from '@assets/image-2048x796_1757452360530.png';
import refreshImg from '@assets/IMG_6114_1757452360531.jpg';
import additionalImg from '@assets/IMG_6114_1757452360531.jpg';
import giftImg from '@assets/539105426_18031350800695682_2644044832869472776_nfull_1757452360530.webp';

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
    <section id="services" className="py-20" style={{ backgroundColor: '#F5F3EE' }} data-testid="services-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4" data-testid="services-title">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="services-subtitle">
            Solutions for every space and style
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card bg-card rounded-xl p-8 shadow-lg hover:shadow-xl cursor-pointer"
              onClick={() => onServiceClick(service.id)}
              data-testid={`service-card-${service.id}`}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover rounded-lg mb-6"
                data-testid={`service-image-${service.id}`}
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3" data-testid={`service-title-${service.id}`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4" data-testid={`service-description-${service.id}`}>
                {service.description}
              </p>
              <div className="text-sage font-medium" data-testid={`service-cta-${service.id}`}>
                {service.id === 'additional-services' ? 'View FAQs' : 'Get Started'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
