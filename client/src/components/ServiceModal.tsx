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
        className="fixed inset-0 flex items-center justify-center p-4 z-[9999]"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.75)'  // Dark backdrop
        }}
        onClick={handleBackdropClick}
        data-testid="service-modal-backdrop"
      >
        <div 
          className="max-w-[600px] w-full rounded-2xl p-8 relative z-[10000]"
          style={{
            backgroundColor: '#555843',  // EBONY - dark green background
            boxShadow: '0 20px 40px rgba(85,88,67,0.3)'
          }}
          data-testid="service-modal"
        >
          {/* Close button - X in top right */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 hover:opacity-70 transition-opacity"
            style={{
              color: '#bfbf92',  // SAGE - visible on dark background
              fontSize: '2rem',
              fontWeight: 'bold'
            }}
            data-testid="modal-close-button"
          >
            ×
          </button>
          
          <div className="space-y-6">
            {/* Modal Title - Using SAGE for best contrast */}
            <h2
              className="font-heading text-3xl font-bold service-modal-title-visible"
              style={{
                color: '#bfbf92',  // SAGE - light green for excellent visibility
                marginBottom: '1rem'
              }}
              data-testid="service-modal-title"
            >
              {modal.title}
            </h2>
            
            {/* Description - ALABASTER text */}
            <div 
              className="space-y-4" 
              data-testid="service-modal-description"
            >
              {modal.description.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  style={{ 
                    color: '#eeeae1',  // ALABASTER - cream for body text
                    lineHeight: '1.6'
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Services List */}
            {modal.services && (
              <div>
                <h4
                  className="font-semibold mb-3 text-lg service-modal-subtitle-visible"
                  style={{
                    color: '#bfbf92',  // SAGE for subheading
                    fontWeight: 'bold'
                  }}
                  data-testid={`modal-services-title-${serviceId}`}
                >
                  OUR SERVICES INCLUDE:
                </h4>
                <ul className="space-y-2">
                  {modal.services.map((service: string, index: number) => (
                    <li 
                      key={index} 
                      className="flex items-start" 
                      data-testid={`modal-service-item-${serviceId}-${index}`}
                    >
                      <span style={{ color: '#eeeae1' }} className="mr-2">•</span>
                      <span style={{ color: '#eeeae1' }}>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Note if exists */}
            {modal.note && (
              <p 
                className="text-sm italic" 
                style={{ 
                  color: '#eeeae1',  // ALABASTER for note
                  opacity: 0.9
                }}
                data-testid={`modal-note-${serviceId}`}
              >
                {modal.note}
              </p>
            )}
            
            {/* Contact Button - BROWN SUGAR */}
            <button 
              onClick={handleContactClick}
              className="px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              style={{
                backgroundColor: '#c06446',  // BROWN SUGAR
                color: '#eeeae1',            // ALABASTER text
                fontSize: '1rem',
                boxShadow: '0 4px 6px rgba(85,88,67,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#5e432c';  // KOBICHA on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#c06446';  // Back to BROWN SUGAR
              }}
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