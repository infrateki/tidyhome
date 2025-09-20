import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { trackFormSubmission } from '@/lib/analytics';

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    question: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: t('contact.faq1.question'),
      answer: t('contact.faq1.answer'),
      isOpen: false
    },
    {
      question: t('contact.faq2.question'),
      answer: t('contact.faq2.answer'),
      isOpen: false
    },
    {
      question: t('contact.faq3.question'),
      answer: t('contact.faq3.answer'),
      isOpen: false
    },
    {
      question: t('contact.faq4.question'),
      answer: t('contact.faq4.answer'),
      isOpen: false
    },
    {
      question: t('contact.faq5.question'),
      answer: t('contact.faq5.answer'),
      isOpen: false
    }
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(prev => prev.map((faq, i) => 
      i === index ? { ...faq, isOpen: !faq.isOpen } : faq
    ));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.question) return;

    setIsSubmitting(true);
    try {
      const response = await apiRequest('POST', '/api/contact', formData);
      const result = await response.json();
      
      if (result.success) {
        // Track successful form submission
        trackFormSubmission('contact_form', {
          form_location: 'contact_page',
          question_submitted: true
        });
        
        toast({
          title: t('contact.success.title'),
          description: t('contact.success.description'),
        });
        
        setFormData({ name: '', email: '', phone: '', question: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: t('contact.error.title'),
        description: error instanceof Error ? error.message : t('contact.error.description'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-background" data-testid="contact-page">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 
                className="text-4xl md:text-5xl font-heading font-bold text-ebony mb-6"
                data-testid="contact-title"
              >
                {t('contact.page.title')}
              </h1>
            </div>
            
            {/* Introduction */}
            <div className="bg-cream p-8 rounded-xl mb-12" data-testid="contact-intro">
              <h2 className="text-2xl font-heading font-semibold text-ebony mb-4">
                Looking to Get Started?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you already have an idea of what your project entails and are ready to share details, the best next step is to visit our Connect With Us page. There, you can book your consultation and select the service that aligns with your needs. Below are some common FAQs!
              </p>
            </div>
            
            {/* FAQs */}
            <div className="mb-16" data-testid="faqs-section">
              <h2 className="text-3xl font-heading font-semibold text-ebony mb-8 text-center">
                {t('contact.faqs.title')}
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-sm border border-border"
                    data-testid={`faq-item-${index}`}
                  >
                    <button
                      className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-sage rounded-lg"
                      onClick={() => toggleFAQ(index)}
                      data-testid={`faq-trigger-${index}`}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-ebony">
                          {faq.question}
                        </h3>
                        <ChevronDown 
                          className={`text-muted-foreground transition-transform duration-300 ${
                            faq.isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>
                    <div 
                      className={`accordion-content px-6 pb-6 ${faq.isOpen ? 'open' : ''}`}
                      data-testid={`faq-content-${index}`}
                    >
                      <p className="text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-cream p-8 rounded-xl" data-testid="contact-form-section">
              <h2 className="text-2xl font-heading font-semibold text-ebony mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                If something wasn't covered above, leave your question in the form below and we'll be happy to get back to you.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-ebony mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      data-testid="contact-name-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ebony mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      data-testid="contact-email-input"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-ebony mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    data-testid="contact-phone-input"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-ebony mb-2">
                    Your Question *
                  </label>
                  <Textarea
                    name="question"
                    value={formData.question}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Please share your question here..."
                    className="w-full resize-vertical"
                    data-testid="contact-question-input"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-sage text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-sage-dark transition-colors"
                  data-testid="contact-submit-button"
                >
                  {isSubmitting ? 'Sending...' : 'Send Question'}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
