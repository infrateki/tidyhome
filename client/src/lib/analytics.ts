// Google Analytics 4 Event Tracking Utilities
// This module provides functions for tracking custom events in GA4
// For GDPR compliance, ensure you have user consent before tracking

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    GA4_ID: string;
  }
}

// Event types for better type safety
export type GAEventAction = 
  | 'form_submit'
  | 'button_click'
  | 'modal_open'
  | 'language_change'
  | 'external_link_click'
  | 'page_view'
  | 'scroll'
  | 'video_play'
  | 'video_pause';

interface GAEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: any;
}

/**
 * Send a custom event to Google Analytics 4
 * @param action - The action type of the event
 * @param params - Additional parameters for the event
 */
export function trackEvent(action: GAEventAction, params?: GAEventParams) {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        ...params,
        send_to: window.GA4_ID,
      });
      
      // Log events in development for debugging
      if (import.meta.env.DEV) {
        console.log('[GA4 Event]', action, params);
      }
    }
  } catch (error) {
    // Silently fail if GA4 is not available or there's an error
    if (import.meta.env.DEV) {
      console.error('[GA4 Error]', error);
    }
  }
}

/**
 * Track form submission events
 * @param formName - Name of the form being submitted
 * @param additionalData - Any additional data to track
 */
export function trackFormSubmission(formName: string, additionalData?: Record<string, any>) {
  trackEvent('form_submit', {
    event_category: 'engagement',
    event_label: formName,
    form_name: formName,
    ...additionalData,
  });
}

/**
 * Track button click events
 * @param buttonName - Name or identifier of the button
 * @param location - Where the button is located (header, footer, hero, etc.)
 */
export function trackButtonClick(buttonName: string, location?: string) {
  trackEvent('button_click', {
    event_category: 'engagement',
    event_label: buttonName,
    button_name: buttonName,
    button_location: location,
  });
}

/**
 * Track modal open events
 * @param modalName - Name of the modal being opened
 * @param trigger - What triggered the modal opening
 */
export function trackModalOpen(modalName: string, trigger?: string) {
  trackEvent('modal_open', {
    event_category: 'engagement',
    event_label: modalName,
    modal_name: modalName,
    trigger_source: trigger,
  });
}

/**
 * Track language change events
 * @param fromLanguage - The language being changed from
 * @param toLanguage - The language being changed to
 */
export function trackLanguageChange(fromLanguage: string, toLanguage: string) {
  trackEvent('language_change', {
    event_category: 'preferences',
    event_label: `${fromLanguage} to ${toLanguage}`,
    from_language: fromLanguage,
    to_language: toLanguage,
  });
}

/**
 * Track external link clicks (e.g., WhatsApp, social media)
 * @param linkType - Type of external link (whatsapp, instagram, etc.)
 * @param destination - URL or identifier of the destination
 */
export function trackExternalLink(linkType: string, destination?: string) {
  trackEvent('external_link_click', {
    event_category: 'engagement',
    event_label: linkType,
    link_type: linkType,
    link_destination: destination,
  });
}

/**
 * Track video interactions
 * @param action - 'play' or 'pause'
 * @param videoName - Name or identifier of the video
 */
export function trackVideoInteraction(action: 'play' | 'pause', videoName: string) {
  const eventAction = action === 'play' ? 'video_play' : 'video_pause';
  trackEvent(eventAction, {
    event_category: 'video',
    event_label: videoName,
    video_name: videoName,
  });
}

/**
 * Track custom page views (for single-page applications)
 * @param pagePath - The path of the page being viewed
 * @param pageTitle - Optional title of the page
 */
export function trackPageView(pagePath: string, pageTitle?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', window.GA4_ID, {
      page_path: pagePath,
      page_title: pageTitle,
    });
    
    if (import.meta.env.DEV) {
      console.log('[GA4 Page View]', pagePath, pageTitle);
    }
  }
}

// Initialize page view tracking for route changes
export function initializeAnalytics() {
  // Track initial page view
  if (typeof window !== 'undefined') {
    trackPageView(window.location.pathname, document.title);
  }
}