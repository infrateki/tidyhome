import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ServiceGrid } from '../components/ServiceGrid';
import { ServiceModal } from '../components/ServiceModal';
import { CalendlyButton } from '../components/CalendlyButton';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#555843' }}>
      <Header />
      
      <section className="pt-12 pb-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 
              className="text-4xl md:text-5xl font-heading mb-3"
              style={{ color: '#eeeae1' }}
              data-testid="services-page-title"
            >
              {t('services.page.title')}
            </h1>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#eeeae1', opacity: 0.8 }}
              data-testid="services-page-subtitle"
            >
              {t('services.page.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <ServiceGrid onServiceClick={handleServiceClick} />

      <ServiceModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        serviceId={selectedService}
      />

      <Footer />
      <CalendlyButton />
    </div>
  );
}