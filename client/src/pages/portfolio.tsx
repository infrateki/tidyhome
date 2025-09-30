import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CalendlyButton } from '../components/CalendlyButton';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Bathroom Organization
import bathroom01 from '@assets/portfolio/bathroom/bathroom-01.jpg';
import bathroom02 from '@assets/portfolio/bathroom/bathroom-02.jpeg';
import bathroom03 from '@assets/portfolio/bathroom/bathroom-03.jpeg';
import bathroom04 from '@assets/portfolio/bathroom/bathroom-04.jpeg';
import bathroom05 from '@assets/portfolio/bathroom/bathroom-05.jpeg';
import bathroom06 from '@assets/portfolio/bathroom/bathroom-06.jpeg';

// Closet Organization
import closet01 from '@assets/portfolio/closet-organization/closet-organization-01.jpeg';
import closet02 from '@assets/portfolio/closet-organization/closet-organization-02.jpeg';
import closet03 from '@assets/portfolio/closet-organization/closet-organization-03.jpeg';
import closet04 from '@assets/portfolio/closet-organization/closet-organization-04.jpeg';
import closet05 from '@assets/portfolio/closet-organization/closet-organization-05.jpeg';
import closet06 from '@assets/portfolio/closet-organization/closet-organization-06.jpeg';
import closet07 from '@assets/portfolio/closet-organization/closet-organization-07.jpeg';

// Garage Organization
import garage01 from '@assets/portfolio/garage/garage-01.jpg';
import garage02 from '@assets/portfolio/garage/garage-02.jpg';
import garage03 from '@assets/portfolio/garage/garage-03.jpeg';
import garage05 from '@assets/portfolio/garage/garage-05.jpeg';
import garage06 from '@assets/portfolio/garage/garage-06.jpeg';

// Kitchen & Pantry Organization
import kitchen01 from '@assets/portfolio/kitchen-pantry/kitchen-pantry-01.png';
import kitchen02 from '@assets/portfolio/kitchen-pantry/kitchen-pantry-02.png';
import kitchen03 from '@assets/portfolio/kitchen-pantry/kitchen-pantry-03.png';
import kitchen04 from '@assets/portfolio/kitchen-pantry/kitchen-pantry-04.jpeg';
import kitchen05 from '@assets/portfolio/kitchen-pantry/kitchen-pantry-05.jpeg';
import kitchen06 from '@assets/portfolio/kitchen-pantry/kitchen-pantry-06.jpeg';
import kitchen07 from '@assets/portfolio/kitchen-pantry/kitchen-pantry-07.jpeg';
import kitchen08 from '@assets/portfolio/kitchen-pantry/kitchen-pantry-08.jpeg';
import kitchen09 from '@assets/portfolio/kitchen-pantry/kitchen-pantry-09.jpeg';
import kitchen10 from '@assets/portfolio/kitchen-pantry/kitchen-pantry-10.jpeg';
import kitchen11 from '@assets/portfolio/kitchen-pantry/kitchen-pantry-11.jpeg';
import kitchen12 from '@assets/portfolio/kitchen-pantry/kitchen-pantry-12.jpeg';
import kitchen13 from '@assets/portfolio/kitchen-pantry/kitchen-pantry-13.jpeg';

// Laundry Room Organization
import laundry01 from '@assets/portfolio/laundry-room/laundry-room-01.jpeg';
import laundry02 from '@assets/portfolio/laundry-room/laundry-room-02.jpeg';
import laundry03 from '@assets/portfolio/laundry-room/laundry-room-03.jpeg';
import laundry04 from '@assets/portfolio/laundry-room/laundry-room-04.jpeg';

// Moving Concierge
import moving01 from '@assets/portfolio/moving-concierge/moving-concierge-01.jpeg';
import moving03 from '@assets/portfolio/moving-concierge/moving-concierge-03.jpeg';
import moving04 from '@assets/portfolio/moving-concierge/moving-concierge-04.jpeg';
import moving05 from '@assets/portfolio/moving-concierge/moving-concierge-05.jpeg';
import moving06 from '@assets/portfolio/moving-concierge/moving-concierge-06.jpg';

// Playroom Design
import playroom01 from '@assets/portfolio/playroom/playroom-01.jpeg';
import playroom02 from '@assets/portfolio/playroom/playroom-02.jpeg';
import playroom03 from '@assets/portfolio/playroom/playroom-03.jpeg';
import playroom04 from '@assets/portfolio/playroom/playroom-04.jpeg';
import playroom05 from '@assets/portfolio/playroom/playroom-05.jpeg';
import playroom06 from '@assets/portfolio/playroom/playroom-06.jpeg';
import playroom07 from '@assets/portfolio/playroom/playroom-07.jpeg';
import playroom08 from '@assets/portfolio/playroom/playroom-08.jpeg';
import playroom09 from '@assets/portfolio/playroom/playroom-09.jpeg';
import playroom10 from '@assets/portfolio/playroom/playroom-10.jpeg';

// Space Creation
import space01 from '@assets/portfolio/space-creation/space-creation-01.jpg';
import space02 from '@assets/portfolio/space-creation/space-creation-02.jpg';
import space03 from '@assets/portfolio/space-creation/space-creation-03.jpg';
import space04 from '@assets/portfolio/space-creation/space-creation-04.jpg';
import space05 from '@assets/portfolio/space-creation/space-creation-05.jpeg';
import space07 from '@assets/portfolio/space-creation/space-creation-07.jpeg';

export default function Portfolio() {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [isImageFading, setIsImageFading] = useState(false);

  // EXACT 8 categories with multiple images per category
  const portfolioItems = [
    {
      id: 1,
      title: 'BATHROOM ORGANIZATION',
      category: 'organization',
      coverImage: bathroom01,
      images: [bathroom01, bathroom02, bathroom03, bathroom04, bathroom05, bathroom06]
    },
    {
      id: 2,
      title: 'CLOSET ORGANIZATION',
      category: 'organization',
      coverImage: closet01,
      images: [closet01, closet02, closet03, closet04, closet05, closet06, closet07]
    },
    {
      id: 3,
      title: 'GARAGE ORGANIZATION',
      category: 'organization',
      coverImage: garage01,
      images: [garage01, garage02, garage03, garage05, garage06]
    },
    {
      id: 4,
      title: 'KITCHEN & PANTRY ORGANIZATION',
      category: 'organization',
      coverImage: kitchen01,
      images: [kitchen01, kitchen02, kitchen03, kitchen04, kitchen05, kitchen06, kitchen07, kitchen08, kitchen09, kitchen10, kitchen11, kitchen12, kitchen13]
    },
    {
      id: 5,
      title: 'LAUNDRY ROOM ORGANIZATION',
      category: 'organization',
      coverImage: laundry01,
      images: [laundry01, laundry02, laundry03, laundry04]
    },
    {
      id: 6,
      title: 'MOVING CONCIERGE',
      category: 'moving',
      coverImage: moving01,
      images: [moving01, moving03, moving04, moving05, moving06]
    },
    {
      id: 7,
      title: 'PLAYROOM DESIGN',
      category: 'space-creation',
      coverImage: playroom01,
      images: [playroom01, playroom02, playroom03, playroom04, playroom05, playroom06, playroom07, playroom08, playroom09, playroom10]
    },
    {
      id: 8,
      title: 'SPACE CREATION',
      category: 'space-creation',
      coverImage: space01,
      images: [space01, space02, space03, space04, space05, space07]
    }
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

  // Get the currently selected portfolio item and its images
  const selectedItem = selectedItemId !== null
    ? portfolioItems.find(item => item.id === selectedItemId)
    : null;
  const currentImages = selectedItem?.images || [];
  const currentImage = currentImages[selectedImageIndex];

  // Navigation functions - navigate within the current item's images
  const goToPrevious = () => {
    if (!selectedItem) return;

    setIsImageFading(true);
    setTimeout(() => {
      setSelectedImageIndex((prevIndex) => {
        // Wrap around to last image if at first
        return prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1;
      });
      setIsImageFading(false);
    }, 150);
  };

  const goToNext = () => {
    if (!selectedItem) return;

    setIsImageFading(true);
    setTimeout(() => {
      setSelectedImageIndex((prevIndex) => {
        // Wrap around to first image if at last
        return prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1;
      });
      setIsImageFading(false);
    }, 150);
  };

  // Open modal with selected item
  const openModal = (item: any) => {
    setSelectedItemId(item.id);
    setSelectedImageIndex(0); // Start at first image
  };

  // Close modal
  const closeModal = () => {
    setSelectedItemId(null);
    setSelectedImageIndex(0);
  };

  // Keyboard event listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemId === null) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemId, selectedImageIndex]);

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
                onClick={() => openModal(item)}
                data-testid={`portfolio-item-${item.id}`}
                style={{ animationDelay: `${filteredItems.indexOf(item) * 100}ms` }}
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-t-xl" style={{ backgroundColor: '#eeeae1' }}>
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 rounded-b-xl" style={{ backgroundColor: '#eeeae1' }}>
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

      {selectedItem && currentImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(85, 88, 67, 0.95) 0%, rgba(85, 88, 67, 0.90) 100%)'
          }}
          onClick={closeModal}
          data-testid="image-modal"
        >
          {/* Animated background pattern - subtle waves */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(238, 234, 225, 0.2) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(238, 234, 225, 0.2) 0%, transparent 50%),
                               radial-gradient(circle at 40% 40%, rgba(238, 234, 225, 0.15) 0%, transparent 50%)`,
              animation: 'pulse 10s ease-in-out infinite'
            }}
          />

          <div
            className="relative max-w-5xl w-full shadow-2xl"
            style={{
              background: 'rgba(85, 88, 67, 0.98)',
              padding: '24px',
              borderRadius: '20px',
              border: '1px solid rgba(238, 234, 225, 0.1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button - minimal icon approach */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 transition-all duration-300 hover:opacity-60 z-10"
              data-testid="close-modal"
            >
              <X className="w-5 h-5" style={{ color: 'rgba(238, 234, 225, 0.8)' }} strokeWidth={1.5} />
            </button>

            {/* Previous button - minimal elegant */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-2 transition-all duration-300 hover:opacity-60 z-10"
              aria-label="Previous image"
              data-testid="prev-button"
            >
              <ChevronLeft className="w-8 h-8" style={{ color: 'rgba(238, 234, 225, 0.7)' }} strokeWidth={1.5} />
            </button>

            {/* Next button - minimal elegant */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-2 transition-all duration-300 hover:opacity-60 z-10"
              aria-label="Next image"
              data-testid="next-button"
            >
              <ChevronRight className="w-8 h-8" style={{ color: 'rgba(238, 234, 225, 0.7)' }} strokeWidth={1.5} />
            </button>

            {/* Image container with fade transition */}
            <div className="relative flex justify-center">
              <div className="overflow-hidden rounded-2xl" style={{ maxHeight: '75vh' }}>
                <img
                  src={currentImage}
                  alt={`${selectedItem.title} - Image ${selectedImageIndex + 1}`}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isImageFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}
                  style={{
                    filter: isImageFading ? 'blur(4px)' : 'blur(0px)',
                    maxHeight: '75vh',
                    width: 'auto'
                  }}
                />
              </div>
            </div>

            {/* Title with Sage color for contrast */}
            <div
              className={`text-3xl font-heading mt-6 text-center transition-all duration-300 tracking-wide ${
                isImageFading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
              style={{
                color: '#bfbf82',  // Using Sage color for good contrast
                fontWeight: '300',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              {selectedItem.title}
            </div>

            {/* Image counter and dots */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <p
                className="text-sm font-medium tracking-wider uppercase"
                style={{ color: 'white' }}
                data-testid="image-counter"
              >
                {`${selectedImageIndex + 1} of ${currentImages.length}`}
              </p>

              {/* Progress dots - elegant alabaster */}
              <div className="flex gap-1.5">
                {currentImages.length <= 15 && currentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: index === selectedImageIndex ? '#eeeae1' : 'rgba(238, 234, 225, 0.3)',
                      transform: index === selectedImageIndex ? 'scale(1.3)' : 'scale(1)'
                    }}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <CalendlyButton />
    </div>
  );
}