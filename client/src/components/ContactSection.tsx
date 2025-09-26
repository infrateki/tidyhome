import React from 'react';
import { Clock, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact-info" className="py-20 bg-sage text-primary-foreground" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
            data-testid="contact-title"
          >
            {t('contact.title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center" data-testid="contact-phone">
            <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-sage" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">{t('contact.phone')}</h3>
            <p className="text-primary-foreground/80">{t('contact.phone.hours')}</p>
          </div>
          
          <div className="text-center" data-testid="contact-email">
            <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-sage" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">{t('contact.email')}</h3>
            <p className="text-primary-foreground/80">{t('contact.email.response')}</p>
          </div>
          
          <div className="text-center" data-testid="contact-location">
            <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-sage" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">{t('contact.location')}</h3>
            <p className="text-primary-foreground/80">{t('contact.location.areas')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
