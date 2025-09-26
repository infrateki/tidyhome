import React from 'react';
import { Calendar } from 'lucide-react';
import { trackExternalLink } from '@/lib/analytics';
import { useLanguage } from '../contexts/LanguageContext';

export function CalendlyButton() {
  const { t } = useLanguage();

  const handleCalendlyClick = () => {
    // Track Calendly button click
    trackExternalLink('calendly', 'https://calendly.com/tidyhomepr');
  };

  return (
    <a
      href="https://calendly.com/tidyhomepr"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleCalendlyClick}
      className="fixed bottom-6 right-6 bg-sage text-alabaster p-4 rounded-full shadow-lg hover:bg-brown-sugar transition-colors z-50"
      aria-label={t('calendly.aria_label')}
      data-testid="calendly-button"
    >
      <Calendar className="w-6 h-6" />
    </a>
  );
}
