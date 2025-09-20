import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'wouter';

export default function ConnectWithUs() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'first-time-project',
      title: 'First Time Project',
      description: 'Transform your home with our comprehensive organization service. Perfect for those ready to create lasting change in their living spaces.',
      features: ['Complete home assessment', 'Custom organization systems', 'Product sourcing included', 'Team implementation']
    },
    {
      id: 'moving-services',
      title: 'Moving Services',
      description: 'Make your transition seamless with our complete moving concierge service. We handle everything from packing to setting up your new home.',
      features: ['Pre-move decluttering', 'Professional packing', 'New home setup', 'Unpacking & organizing']
    },
    {
      id: 'refresh-sessions',
      title: 'Refresh Sessions',
      description: 'Maintain your organized spaces with regular refresh sessions. Perfect for keeping your systems working beautifully.',
      features: ['System maintenance', 'Seasonal updates', 'Quick reorganization', 'Ongoing support']
    },
    {
      id: 'proyecto-inicial',
      title: 'Proyecto Inicial',
      description: 'Nuestro servicio completo de organización para transformar su hogar. Creamos sistemas personalizados que funcionan para su estilo de vida.',
      features: ['Evaluación completa', 'Sistemas personalizados', 'Productos incluidos', 'Implementación profesional']
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F3EE' }}>
      <Header />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-heading mb-6"
              style={{ color: '#3C3C3C' }}
              data-testid="connect-title"
            >
              Connect With Us
            </h1>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#4A4A4A' }}
              data-testid="connect-subtitle"
            >
              Choose the service that best fits your needs and let's begin your transformation journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
                style={{ backgroundColor: '#FFFFFF' }}
                data-testid={`service-option-${service.id}`}
              >
                <h3 
                  className="text-2xl font-heading mb-4"
                  style={{ color: '#3C3C3C' }}
                >
                  {service.title}
                </h3>
                <p 
                  className="mb-6"
                  style={{ color: '#4A4A4A' }}
                >
                  {service.description}
                </p>
                <ul className="mb-8 space-y-2">
                  {service.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="flex items-center"
                      style={{ color: '#4A4A4A' }}
                    >
                      <span 
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: '#8B9574' }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => setSelectedService(service.id)}
                  className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-300"
                  style={{ 
                    backgroundColor: '#8B9574',
                    color: '#F5F3EE'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B7459'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B9574'}
                  data-testid={`get-started-${service.id}`}
                >
                  Get Started
                </button>

                {selectedService === service.id && (
                  <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F5F3EE' }}>
                    <p className="text-center" style={{ color: '#4A4A4A' }}>
                      Contact form will be integrated here with HoneyBook
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p 
              className="text-lg mb-6"
              style={{ color: '#4A4A4A' }}
            >
              Not sure which service is right for you?
            </p>
            <Link href="/faqs">
              <button 
                className="py-3 px-8 rounded-lg font-medium transition-all duration-300"
                style={{ 
                  backgroundColor: 'transparent',
                  border: '2px solid #8B9574',
                  color: '#8B9574'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#8B9574';
                  e.currentTarget.style.color = '#F5F3EE';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#8B9574';
                }}
                data-testid="view-faqs-button"
              >
                View FAQs
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}