import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackExternalLink } from '@/lib/analytics';

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Track WhatsApp button click
    trackExternalLink('whatsapp', 'https://wa.me/19392021008');
  };

  return (
    <a 
      href="https://wa.me/19392021008" 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Contact us on WhatsApp"
      data-testid="whatsapp-button"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
