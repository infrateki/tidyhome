import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { BrandIntroduction } from '../components/BrandIntroduction';
import { ServiceGrid } from '../components/ServiceGrid';
import { WhyTidyHome } from '../components/WhyTidyHome';
import { ProcessSection } from '../components/ProcessSection';
import { AboutSection } from '../components/AboutSection';
import { InstagramFeed } from '../components/InstagramFeed';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ServiceModal } from '../components/ServiceModal';
import { NewsletterPopup } from '../components/NewsletterPopup';

export default function Home() {
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
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BrandIntroduction />
      <ServiceGrid onServiceClick={handleServiceClick} />
      <WhyTidyHome />
      <ProcessSection />
      <AboutSection />
      <InstagramFeed />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <ServiceModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        serviceId={selectedService}
      />
      <NewsletterPopup />
    </div>
  );
}
