import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useLocation } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import { trackModalOpen, trackButtonClick } from '@/lib/analytics';
import { Portal } from './Portal';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string | null;
}

export function ServiceModal({ isOpen, onClose, serviceId }: ServiceModalProps) {
  const { t, currentLanguage } = useLanguage();
  const [, setLocation] = useLocation();

  // Track modal open when serviceId changes and modal is open
  useEffect(() => {
    if (isOpen && serviceId) {
      trackModalOpen(`service_modal_${serviceId}`, 'service_card_click');
    }
  }, [isOpen, serviceId]);

  // Early return if modal shouldn't be shown
  if (!isOpen || !serviceId) return null;

  const getServiceData = () => {
    // Use serviceId directly without replacing hyphens
    const servicesString = t(`modal.${serviceId}.services`);
    const services = servicesString && !servicesString.includes('modal.') ? servicesString.split('|') : undefined;
    const note = t(`modal.${serviceId}.note`);
    const cta = t(`modal.${serviceId}.cta`);
    
    return {
      title: t(`modal.${serviceId}.title`),
      description: t(`modal.${serviceId}.description`),
      services,
      note: note && !note.includes('modal.') ? note : undefined,
      cta: cta && !cta.includes('modal.') ? cta : undefined
    };
  };

  const modal = getServiceData();
  
  if (!modal || !modal.title) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContactClick = () => {
    // Track CTA click from service modal
    trackButtonClick(`service_modal_cta_${serviceId}`, 'service_modal');
    onClose();
    setLocation('/connect');
  };

  return (
    <Portal containerId="service-modal-root">
      <div 
        className="fixed inset-0 modal-backdrop flex items-center justify-center p-4 z-[9999]"
        onClick={handleBackdropClick}
        data-testid="service-modal-backdrop"
      >
        <div className="bg-sage-dark text-cream max-w-[600px] w-full rounded-2xl p-8 relative service-modal z-[10000]" data-testid="service-modal">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-cream hover:text-cream/70 transition-colors"
            data-testid="modal-close-button"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="space-y-6">
            <h2 className="font-heading text-2xl font-bold" data-testid="service-modal-title">
              {modal.title}
            </h2>
            
            <div className="space-y-4" data-testid="service-modal-description">
              {modal.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            {modal.services && (
              <div>
                <h4 className="font-semibold mb-3" data-testid={`modal-services-title-${serviceId}`}>
                  OUR SERVICES INCLUDE:
                </h4>
                <ul className="space-y-2">
                  {modal.services.map((service: string, index: number) => (
                    <li key={index} className="flex items-start" data-testid={`modal-service-item-${serviceId}-${index}`}>
                      <span className="mr-2">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {modal.note && (
              <p className="text-sm italic" data-testid={`modal-note-${serviceId}`}>
                {modal.note}
              </p>
            )}
            
            <button 
              onClick={handleContactClick}
              className="bg-gold text-ebony px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors font-medium"
              data-testid={`modal-cta-${serviceId}`}
            >
              {modal.cta || t('contact.page.title')}
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
}
