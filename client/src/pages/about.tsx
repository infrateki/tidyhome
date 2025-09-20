import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProcessSection } from '../components/ProcessSection';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F3EE' }}>
      <Header />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-heading mb-6"
              style={{ color: '#3C3C3C' }}
              data-testid="about-title"
            >
              About Tidy Home
            </h1>
          </div>

          <div className="mb-20">
            <h2 
              className="text-3xl font-heading mb-8 text-center"
              style={{ color: '#3C3C3C' }}
              data-testid="our-brand-title"
            >
              Our Brand
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p style={{ color: '#4A4A4A', lineHeight: '1.8' }}>
                At Tidy Home, we believe that your space matters. More than just organizing, we create sanctuaries that reflect your lifestyle and bring calm to your daily life. Our approach combines luxury with functionality, ensuring every system we implement is both beautiful and sustainable.
              </p>
              <p style={{ color: '#4A4A4A', lineHeight: '1.8' }}>
                Founded in Puerto Rico, we've transformed over 500 homes across the island, working with families, busy professionals, and individuals who understand the value of an organized life. Our white-glove service means we handle every detail with discretion and care, creating spaces that work as beautifully as they look.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 
              className="text-3xl font-heading mb-8 text-center"
              style={{ color: '#3C3C3C' }}
              data-testid="journey-title"
            >
              The Journey
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p style={{ color: '#4A4A4A', lineHeight: '1.8' }}>
                Our journey began with a simple belief: everyone deserves a space that supports their best life. What started as a passion for organization has grown into Puerto Rico's premier luxury home organization service.
              </p>
              <p style={{ color: '#4A4A4A', lineHeight: '1.8' }}>
                Over the years, we've refined our process, expanded our team, and deepened our commitment to excellence. Today, we're proud to offer comprehensive solutions that go beyond traditional organizing – from complete home transformations to moving concierge services and ongoing maintenance support.
              </p>
              <p style={{ color: '#4A4A4A', lineHeight: '1.8' }}>
                Our success is measured not just in the spaces we transform, but in the lives we touch. When clients tell us they feel lighter, more productive, or simply happier in their homes, we know we've fulfilled our mission.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 
              className="text-3xl font-heading mb-8 text-center"
              style={{ color: '#3C3C3C' }}
              data-testid="meet-team-title"
            >
              Meet Valeria & Raul
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div 
                    className="aspect-square rounded-xl"
                    style={{ backgroundColor: '#E8E4DB' }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <p style={{ color: '#4A4A4A' }}>Photo of Valeria & Raul</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p style={{ color: '#4A4A4A', lineHeight: '1.8' }}>
                    Valeria and Raul, a husband-and-wife team, founded Tidy Home with a shared vision of creating spaces that feel curated and intentional. Valeria, an interior stylist with a love for organization and space creation, brings ideas and designs to life through thoughtful details and creative projects. Raul is the hands-on force behind the vision, painting, installing, and problem-solving with skill and versatility. Together, they balance creativity and craftsmanship, leading a team that can take on any project and transform any space into a reflection of your lifestyle and vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}