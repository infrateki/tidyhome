import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@assets/space.jpg';
import { trackButtonClick, trackVideoInteraction } from '@/lib/analytics';

export function VideoHero() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        trackVideoInteraction('pause', 'hero_video');
      } else {
        videoRef.current.play();
        trackVideoInteraction('play', 'hero_video');
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToServices = () => {
    // Track secondary CTA click
    trackButtonClick('explore_services', 'hero_section');
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToConnect = () => {
    // Track primary CTA click
    trackButtonClick('connect_with_us', 'hero_section');
    window.location.href = '/connect-with-us';
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden" data-testid="video-hero">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroImage}
        data-testid="hero-video"
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 video-hero-overlay"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between items-center text-center px-4">
        {/* Top: Main Headline */}
        <div className="flex-1 flex items-start justify-center pt-32">
          <h1
            className="text-6xl md:text-8xl font-heading font-bold text-alabaster text-shadow"
            data-testid="hero-main-headline"
          >
            {t('hero.tagline')}
          </h1>
        </div>
        
        {/* Middle: Brand Name */}
        <div className="flex-1 flex items-center justify-center">
          <h2 
            className="text-4xl md:text-6xl font-heading font-bold text-alabaster text-shadow"
            data-testid="hero-brand-name"
          >
            
          </h2>
        </div>
        
        {/* Bottom: CTAs */}
        <div className="flex-1 flex items-end justify-center pb-20">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToConnect}
              className="bg-sage text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-sage-dark transition-colors"
              data-testid="hero-cta-primary"
            >
              {t('hero.cta.primary')}
            </Button>
            <Button
              variant="outline"
              onClick={scrollToServices}
              className="border-2 border-alabaster text-alabaster px-8 py-3 rounded-md font-semibold hover:bg-alabaster hover:text-sage transition-colors bg-transparent"
              data-testid="hero-cta-secondary"
            >
              {t('hero.cta.secondary')}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Video Controls */}
      <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={togglePlayPause}
          className="bg-black/50 backdrop-blur-sm text-alabaster p-2 rounded-full hover:bg-black/70 transition-colors"
          data-testid="video-play-pause"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={toggleMute}
          className="bg-black/50 backdrop-blur-sm text-alabaster p-2 rounded-full hover:bg-black/70 transition-colors"
          data-testid="video-mute"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>
      </div>
    </section>
  );
}
