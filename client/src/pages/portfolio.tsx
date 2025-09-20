import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { useLanguage } from '../contexts/LanguageContext';
import { X } from 'lucide-react';

export default function Portfolio() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = [
    { id: 'all', name: t('portfolio.categories.all') },
    { id: 'organization', name: t('portfolio.categories.organization') },
    { id: 'space-creation', name: t('portfolio.categories.space_creation') },
    { id: 'moving', name: t('portfolio.categories.moving') }
  ];

  const portfolioItems = [
    { id: 1, category: 'organization', title: 'Master Bedroom Organization', image: 'portfolio-placeholder' },
    { id: 2, category: 'organization', title: 'Kitchen Pantry System', image: 'portfolio-placeholder' },
    { id: 3, category: 'space-creation', title: 'Home Office Design', image: 'portfolio-placeholder' },
    { id: 4, category: 'space-creation', title: 'Nursery Creation', image: 'portfolio-placeholder' },
    { id: 5, category: 'moving', title: 'Complete Home Setup', image: 'portfolio-placeholder' },
    { id: 6, category: 'organization', title: 'Closet Transformation', image: 'portfolio-placeholder' },
    { id: 7, category: 'space-creation', title: 'Playroom Design', image: 'portfolio-placeholder' },
    { id: 8, category: 'moving', title: 'Unpacking & Organizing', image: 'portfolio-placeholder' },
    { id: 9, category: 'organization', title: 'Garage Organization', image: 'portfolio-placeholder' },
    { id: 10, category: 'space-creation', title: 'Guest Room Refresh', image: 'portfolio-placeholder' },
    { id: 11, category: 'moving', title: 'Pre-Move Declutter', image: 'portfolio-placeholder' },
    { id: 12, category: 'organization', title: 'Bathroom Organization', image: 'portfolio-placeholder' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F3EE' }}>
      <Header />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-heading mb-6"
              style={{ color: '#3C3C3C' }}
              data-testid="portfolio-title"
            >
              {t('portfolio.title')}
            </h1>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#4A4A4A' }}
              data-testid="portfolio-subtitle"
            >
              {t('portfolio.subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="px-6 py-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: selectedCategory === category.id ? '#8B9574' : 'transparent',
                  color: selectedCategory === category.id ? '#F5F3EE' : '#3C3C3C',
                  border: `2px solid ${selectedCategory === category.id ? '#8B9574' : '#E8E4DB'}`
                }}
                data-testid={`filter-${category.id}`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
                onClick={() => setSelectedImage(item)}
                data-testid={`portfolio-item-${item.id}`}
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden" style={{ backgroundColor: '#E8E4DB' }}>
                  <div className="w-full h-64 flex items-center justify-center">
                    <p style={{ color: '#4A4A4A' }}>Image placeholder - {item.title}</p>
                  </div>
                </div>
                <div className="p-4" style={{ backgroundColor: '#FFFFFF' }}>
                  <h3 
                    className="font-heading text-lg"
                    style={{ color: '#3C3C3C' }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(60, 60, 60, 0.9)' }}
          onClick={() => setSelectedImage(null)}
          data-testid="image-modal"
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full transition-colors"
              style={{ backgroundColor: '#8B9574', color: '#F5F3EE' }}
              data-testid="close-modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#E8E4DB' }}>
              <div className="w-full h-96 flex items-center justify-center">
                <p style={{ color: '#4A4A4A' }}>Large image placeholder - {selectedImage.title}</p>
              </div>
            </div>
            <h2 
              className="text-2xl font-heading mt-4 text-center"
              style={{ color: '#F5F3EE' }}
            >
              {selectedImage.title}
            </h2>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
}