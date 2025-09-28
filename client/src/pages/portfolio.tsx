import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CalendlyButton } from '../components/CalendlyButton';
import { X } from 'lucide-react';

// Import images from attached_assets
import masterBedroomImg from '@assets/master.jpeg';
import kitchenPantryImg from '@assets/kitchen01.jpeg';
import homeOfficeImg from '@assets/home04.jpeg';
import closetTransformImg from '@assets/IMG_7090.jpeg';
import playroomImg from '@assets/space.jpg';
import unpackingImg from '@assets/IMG_7101.jpeg';
import garageImg from '@assets/IMG_7080.jpeg';  
import bathroomImg from '@assets/IMG_2770.jpeg';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // EXACT 8 categories with original names (4 removed from original 12)
  const portfolioItems = [
    { id: 1, title: 'Master Bedroom Organization', category: 'organization', image: masterBedroomImg },
    { id: 2, title: 'Kitchen Pantry System', category: 'organization', image: kitchenPantryImg },
    { id: 3, title: 'Home Office Design', category: 'space-creation', image: homeOfficeImg },
    { id: 4, title: 'Closet Transformation', category: 'organization', image: closetTransformImg },
    { id: 5, title: 'Playroom Design', category: 'space-creation', image: playroomImg },
    { id: 6, title: 'Unpacking & Organizing', category: 'moving', image: unpackingImg },
    { id: 7, title: 'Garage Organization', category: 'space-creation', image: garageImg },
    { id: 8, title: 'Bathroom Organization', category: 'organization', image: bathroomImg }
  ];

  // Filter categories
  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'organization', label: 'Organization' },
    { id: 'space-creation', label: 'Space Creation' },
    { id: 'moving', label: 'Moving Services' }
  ];

  // Filter portfolio items based on selected category
  const filteredItems = selectedFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedFilter);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#eeeae1' }}>
      <Header />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1
              className="text-4xl md:text-5xl font-heading mb-6"
              style={{ color: '#555843' }}
              data-testid="portfolio-title"
            >
              Our Portfolio
            </h1>
            <p
              className="text-xl max-w-3xl mx-auto mb-10"
              style={{ color: '#555843' }}
              data-testid="portfolio-subtitle"
            >
              Explore our transformations and see how we create beautiful, functional spaces
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedFilter(category.id)}
                  className="px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm"
                  style={{
                    backgroundColor: selectedFilter === category.id ? '#6B7459' : '#eeeae1',
                    color: selectedFilter === category.id ? '#eeeae1' : '#555843',
                    border: selectedFilter === category.id ? '2px solid #6B7459' : '2px solid #bfbf82'
                  }}
                  data-testid={`filter-${category.id}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl animate-fadeIn"
                onClick={() => setSelectedImage(item)}
                data-testid={`portfolio-item-${item.id}`}
                style={{ animationDelay: `${filteredItems.indexOf(item) * 100}ms` }}
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden" style={{ backgroundColor: '#eeeae1' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4" style={{ backgroundColor: '#eeeae1' }}>
                  <h3 
                    className="font-heading text-lg"
                    style={{ color: '#555843' }}
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
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}
          onClick={() => setSelectedImage(null)}
          data-testid="image-modal"
        >
          <div className="relative max-w-4xl w-full" style={{ backgroundColor: '#555843', padding: '20px', borderRadius: '12px' }}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full transition-colors"
              style={{ backgroundColor: 'rgba(191, 191, 130, 0.2)', color: '#bfbf82', border: '1px solid #bfbf82' }}
              data-testid="close-modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#555843' }}>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
            <h2
              className="text-2xl font-heading mt-4 text-center"
              style={{ color: '#eeeae1' }}
            >
              {selectedImage.title}
            </h2>
          </div>
        </div>
      )}

      <Footer />
      <CalendlyButton />
    </div>
  );
}