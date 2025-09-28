import React from 'react';
import { Calendar } from 'lucide-react';
import { trackExternalLink } from '@/lib/analytics';
import { useLanguage } from '../contexts/LanguageContext';

export function CalendlyButton() {
  const { t } = useLanguage();

  const handleCalendlyClick = () => {
    // Track Calendly button click
    trackExternalLink('calendly', 'https://calendly.com/hello-tidyhomepr?utm_source=honeybook&utm_content=company-6494d0649a1f14002bb9085b-6494d0639a1f14002bb90796');
  };

  return (
    <a
      href="https://calendly.com/hello-tidyhomepr?utm_source=honeybook&utm_content=company-6494d0649a1f14002bb9085b-6494d0639a1f14002bb90796"
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
