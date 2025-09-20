import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ServiceGrid } from '../components/ServiceGrid';
import { ServiceModal } from '../components/ServiceModal';
import { WhatsAppButton } from '../components/WhatsAppButton';
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
    <div className="min-h-screen" style={{ backgroundColor: '#F5F3EE' }}>
      <Header />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-heading mb-6"
              style={{ color: '#3C3C3C' }}
              data-testid="services-page-title"
            >
              Our Services
            </h1>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#4A4A4A' }}
              data-testid="services-page-subtitle"
            >
              Comprehensive solutions designed to transform your space and simplify your life
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
      <WhatsAppButton />
    </div>
  );
}