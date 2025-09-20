import React from 'react';
import { Link } from 'wouter';

export function ProcessSection() {

  const steps = [
    {
      number: 1,
      title: 'INITIAL FORM & CONSULTATION',
      description: 'We begin with a 15-minute discovery call to understand your vision and goals. Then, we schedule an in-person consultation to assess your space and needs in detail.'
    },
    {
      number: 2,
      title: 'PROJECT PROPOSAL AND CONFIRMATION',
      description: 'You\'ll receive a personalized plan crafted for your home. Once confirmed, we guide you through the next steps, handling every detail to make the process simple and seamless.'
    },
    {
      number: 3,
      title: 'PLANNING & SHOPPING',
      description: 'We take care of the product sourcing, ensuring a smooth and effortless experience for you.'
    },
    {
      number: 4,
      title: 'PROJECT DAY',
      description: 'Our team arrives fully prepared to transform your space, beginning with careful preparation and finishing with lasting systems that are both functional and beautiful.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-muted" data-testid="process-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4" data-testid="process-title">
            PROCESS
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="process-subtitle">
            The Tidy Home 4 Step Process
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center" data-testid={`process-step-${step.number}`}>
              <div className="bg-sage text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold" data-testid={`step-number-${step.number}`}>
                {step.number}
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3" data-testid={`step-title-${step.number}`}>
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm" data-testid={`step-description-${step.number}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/connect-with-us">
            <button 
              className="px-8 py-4 rounded-lg transition-colors font-medium"
              style={{ backgroundColor: '#8B9574', color: '#F5F3EE' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B7459'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B9574'}
              data-testid="process-cta"
            >
              Get Started Today
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
