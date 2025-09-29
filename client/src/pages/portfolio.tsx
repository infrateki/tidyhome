import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CalendlyButton } from '../components/CalendlyButton';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import images from attached_assets - Best Selection for 8 Categories
import masterBedroomImg from '@assets/00-master01.jpg';
import kitchenPantryImg from '@assets/kitchen01.jpeg';
import homeOfficeImg from '@assets/00-spacecreation.jpg';
import closetTransformImg from '@assets/IMG_7090.jpeg';
import playroomImg from '@assets/00-playroom01.jpg';
import unpackingImg from '@assets/IMG_7101.jpeg';
import garageImg from '@assets/IMG_7080.jpeg';
import bathroomImg from '@assets/IMG_2770.jpeg';

export default function Portfolio() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [isImageFading, setIsImageFading] = useState(false);

  // EXACT 8 categories - DO NOT CHANGE
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

  // Get the current selected image based on index
  const selectedImage = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  // Navigation functions
  const goToPrevious = () => {
    if (selectedImageIndex === null) return;

    setIsImageFading(true);
    setTimeout(() => {
      setSelectedImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        // Wrap around to last image if at first
        return prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1;
      });
      setIsImageFading(false);
    }, 150);
  };

  const goToNext = () => {
    if (selectedImageIndex === null) return;

    setIsImageFading(true);
    setTimeout(() => {
      setSelectedImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        // Wrap around to first image if at last
        return prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1;
      });
      setIsImageFading(false);
    }, 150);
  };

  // Open modal with correct index
  const openModal = (item: any) => {
    const index = filteredItems.findIndex(i => i.id === item.id);
    setSelectedImageIndex(index);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  // Keyboard event listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

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
  }, [selectedImageIndex]);

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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(85, 88, 67, 0.95) 0%, rgba(0, 0, 0, 0.85) 50%, rgba(85, 88, 67, 0.95) 100%)'
          }}
          onClick={closeModal}
          data-testid="image-modal"
        >
          {/* Animated background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(191, 191, 130, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(191, 191, 130, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 40% 40%, rgba(191, 191, 130, 0.2) 0%, transparent 50%)`,
              animation: 'pulse 8s ease-in-out infinite'
            }}
          />

          <div
            className="relative max-w-5xl w-full shadow-2xl"
            style={{
              background: 'linear-gradient(145deg, rgba(85, 88, 67, 0.98) 0%, rgba(85, 88, 67, 0.95) 100%)',
              padding: '24px',
              borderRadius: '20px',
              border: '1px solid rgba(191, 191, 130, 0.3)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 100px rgba(191, 191, 130, 0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2.5 rounded-full transition-all duration-300 hover:scale-110 z-10 backdrop-blur-sm"
              style={{
                background: 'linear-gradient(145deg, rgba(191, 191, 130, 0.3), rgba(191, 191, 130, 0.1))',
                color: '#eeeae1',
                border: '1px solid rgba(191, 191, 130, 0.4)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
              }}
              data-testid="close-modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 backdrop-blur-sm group"
              style={{
                background: 'linear-gradient(145deg, rgba(191, 191, 130, 0.25), rgba(191, 191, 130, 0.1))',
                border: '1px solid rgba(191, 191, 130, 0.4)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1)'
              }}
              aria-label="Previous image"
              data-testid="prev-button"
            >
              <ChevronLeft className="w-7 h-7 text-white group-hover:text-[#bfbf82] transition-colors" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 backdrop-blur-sm group"
              style={{
                background: 'linear-gradient(145deg, rgba(191, 191, 130, 0.25), rgba(191, 191, 130, 0.1))',
                border: '1px solid rgba(191, 191, 130, 0.4)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1)'
              }}
              aria-label="Next image"
              data-testid="next-button"
            >
              <ChevronRight className="w-7 h-7 text-white group-hover:text-[#bfbf82] transition-colors" />
            </button>

            {/* Image container with fade transition - FULL BLEED NO BLACK */}
            <div className="rounded-2xl overflow-hidden relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className={`w-full h-auto max-h-[75vh] object-contain transition-all duration-500 ${
                  isImageFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
                style={{
                  filter: isImageFading ? 'blur(4px)' : 'blur(0px)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
                }}
              />
            </div>

            {/* Title with elegant typography */}
            <h2
              className={`text-3xl font-heading mt-6 text-center transition-all duration-300 tracking-wide ${
                isImageFading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
              style={{
                color: '#eeeae1',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                fontWeight: '300'
              }}
            >
              {selectedImage.title}
            </h2>

            {/* Image counter with dots indicator */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <p
                className="text-sm font-medium tracking-wider uppercase"
                style={{ color: 'rgba(238, 234, 225, 0.7)' }}
                data-testid="image-counter"
              >
                {selectedImageIndex !== null && `${selectedImageIndex + 1} of ${filteredItems.length}`}
              </p>

              {/* Progress dots */}
              <div className="flex gap-1">
                {filteredItems.length <= 10 && filteredItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: index === selectedImageIndex ? '#bfbf82' : 'rgba(238, 234, 225, 0.3)',
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