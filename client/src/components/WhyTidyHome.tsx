import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import whyImg from '@assets/542808275_18032455307695682_2185238791464639187_nfull_1757452360530.webp';

export function WhyTidyHome() {
  const { t } = useLanguage();

  const benefits = [
    'Personalized systems designed for your lifestyle',
    'White-glove experience with every detail handled discreetly',
    'Full-service transformations from start to finish',
    'Solutions that balance beauty and function',
    'Lasting results that are easy to maintain',
    'Trusted by clients across Puerto Rico',
    'Supporting families, busy professionals, and unique lifestyles'
  ];


  return (
    <section className="py-20" style={{ backgroundColor: '#eeeae1' }} data-testid="why-tidy-home">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={whyImg} 
              alt="Organized modern bedroom" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="why-tidy-home-image"
            />
          </div>
          <div>
            <h2 
              className="text-3xl md:text-4xl font-heading font-bold text-ebony mb-8"
              data-testid="why-tidy-home-title"
            >
              {t('why.title')}
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4" data-testid={`benefit-item-${index}`}>
                  <div className="w-6 h-6 bg-sage rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-alabaster" />
                  </div>
                  <p className="text-lg text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/about">
                <Button 
                  className="px-8 py-3 rounded-md font-semibold transition-colors"
                  style={{ backgroundColor: '#c06446', color: '#eeeae1' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5e432c'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#c06446'}
                  data-testid="why-tidy-home-cta"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
