import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { trackFormSubmission, trackModalOpen } from '@/lib/analytics';
import { Portal } from './Portal';

export function NewsletterPopup() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Skip newsletter popup if it's been seen or in test mode
    const hasSeenPopup = localStorage.getItem('newsletter-popup-seen');
    const isTestMode = window.location.search.includes('test=true');
    
    if (hasSeenPopup || isTestMode) {
      return;
    }
    
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Track newsletter popup display
      trackModalOpen('newsletter_popup', 'auto_timer_30s');
    }, 30000); // Show after 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter-popup-seen', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const response = await apiRequest('POST', '/api/newsletter', { email });
      const result = await response.json();
      
      if (result.success) {
        // Track successful newsletter subscription
        trackFormSubmission('newsletter_signup', {
          form_location: 'popup',
          subscription_completed: true
        });
        
        toast({
          title: t('newsletter.success.title'),
          description: t('newsletter.success.description'),
        });
        
        handleClose();
      } else {
        // Handle already subscribed case
        if (response.status === 409) {
          toast({
            title: t('newsletter.already.title'),
            description: t('newsletter.already.description'),
          });
          handleClose();
        } else {
          throw new Error(result.message || 'Failed to subscribe');
        }
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      
      // Check if it's a 409 error that wasn't handled
      if (error instanceof Error && error.message.includes('409')) {
        toast({
          title: t('newsletter.already.title'),
          description: t('newsletter.already.description'),
        });
        handleClose();
      } else {
        toast({
          title: t('newsletter.error.title'),
          description: error instanceof Error ? error.message : t('newsletter.error.description'),
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <Portal containerId="newsletter-modal-root">
      <div 
        className="fixed inset-0 modal-backdrop z-40 flex items-center justify-center p-4"
        onClick={(e) => e.target === e.currentTarget && handleClose()}
        data-testid="newsletter-popup"
      >
        <div className="bg-white max-w-md w-full rounded-xl p-8 relative newsletter-modal">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-ebony"
            data-testid="newsletter-close"
          >
            <X className="w-5 h-5" />
          </Button>
          
          <div className="text-center">
            <h3 
              className="text-2xl font-heading font-bold text-ebony mb-4"
              data-testid="newsletter-title"
            >
              {t('newsletter.title')}
            </h3>
            <p 
              className="text-muted-foreground mb-6"
              data-testid="newsletter-description"
            >
              {t('newsletter.description')}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder={t('newsletter.email.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
                data-testid="newsletter-email-input"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sage text-primary-foreground py-3 rounded-md font-semibold hover:bg-sage-dark transition-colors"
                data-testid="newsletter-submit"
              >
                {isSubmitting ? t('newsletter.button.subscribing') : t('newsletter.button.subscribe')}
              </Button>
            </form>
            
            <p 
              className="text-xs text-muted-foreground mt-4"
              data-testid="newsletter-privacy"
            >
              {t('newsletter.privacy')}
            </p>
          </div>
        </div>
      </div>
    </Portal>
  );
}
