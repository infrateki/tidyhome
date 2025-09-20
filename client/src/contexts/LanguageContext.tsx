import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language } from '../types';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' }
];

const translations = {
  en: {
    'nav.about': 'About',
    'nav.process': 'Process',
    'nav.services': 'Services',
    'nav.contact': 'Book With Us',
    'hero.tagline': 'Your Space Matters',
    'hero.title': 'Calm, beautiful spaces that work for your life',
    'hero.subtitle': 'Transform your home with Puerto Rico\'s premier luxury organization service',
    'hero.description': 'From cluttered to calming, we create functional systems that last. Serving families in Dorado, San Juan, Guaynabo, and Bayamón.',
    'hero.cta.primary': 'Book Your Consultation',
    'hero.cta.secondary': 'Discover Our Process',
    'hero.stats.number': '500+',
    'hero.stats.text': 'Homes Transformed',
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive solutions for every space in your home',
    'services.home-organization.title': 'HOME ORGANIZATION',
    'services.home-organization.description': 'Create customized, clutter-free spaces that reflect your style.',
    'services.moving-concierge.title': 'MOVING CONCIERGE',
    'services.moving-concierge.description': 'Stress-free transitions from one home to the next.',
    'services.space-creation.title': 'SPACE CREATION',
    'services.space-creation.description': 'Transform everyday spaces into functional, beautiful environments.',
    'services.refresh-sessions.title': 'REFRESH SESSIONS',
    'services.refresh-sessions.description': 'Maintain your organized spaces with ongoing support.',
    'services.additional-services.title': 'ADDITIONAL SERVICES',
    'services.additional-services.description': 'Trusted solutions including handy work, electrical, and cleaning.',
    'services.gift-certificates.title': 'GIFT CERTIFICATES',
    'services.gift-certificates.description': 'Give the gift of a beautifully organized home.',
    'services.learn-more': 'Learn More →',
    'process.title': 'PROCESS',
    'process.subtitle': 'The Tidy Home 4 Step Process',
    'process.step1.title': 'INITIAL FORM & CONSULTATION',
    'process.step1.description': '15-minute discovery call followed by in-person assessment of your space and needs.',
    'process.step2.title': 'PROJECT PROPOSAL & ONBOARDING',
    'process.step2.description': 'Customized project plan tailored to your home with guided onboarding process.',
    'process.step3.title': 'PLANNING & SHOPPING',
    'process.step3.description': 'We handle product sourcing to ensure a smooth, effortless experience.',
    'process.step4.title': 'PROJECT DAY',
    'process.step4.description': 'Transform your space with thoughtful decluttering and functional organization.',
    'process.cta': 'Contact Us',
    'about.title': 'ABOUT',
    'about.subtitle': 'The Journey',
    'about.description': 'Tidy Home began as a small, boutique home organization service with one clear goal; to help clients create calm, beautiful spaces they could truly enjoy. Over time, our passion for organization and client care led us to expand both our expertise and our reach. What started as helping organize a single room has grown into offering full-home transformations and complete lifestyle support, always with the same attention to detail and personal touch that defined us from the start.',
    'about.cta': 'Contact Us',
    'instagram.title': 'follow us on instagram',
    'instagram.handle': '@tidyhomepr',
    'instagram.follow': 'Follow @tidyhomepr',
    'contact.title': 'Get Started Today',
    'contact.phone': '(939) 202-1008',
    'contact.phone.hours': 'Monday-Friday: 8:00 AM - 6:00 PM',
    'contact.email': 'info@tidyhomepr.com',
    'contact.email.response': 'We\'ll respond within 24 hours',
    'contact.location': 'Dorado, Puerto Rico',
    'contact.location.areas': 'Serving Dorado, San Juan, Guaynabo, Bayamón',
    'contact.form.firstName': 'First Name',
    'contact.form.lastName': 'Last Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.service': 'Select Service',
    'contact.form.message': 'Tell us about your project...',
    'contact.form.submit': 'Send Message',
    'footer.tagline': 'YOUR SPACE MATTERS',
    'footer.description': 'Puerto Rico\'s premier luxury organization service, creating calm and beautiful spaces that work for your life.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 Tidy Home Puerto Rico. All rights reserved.',
    // Newsletter Popup
    'newsletter.title': 'Stay Updated',
    'newsletter.description': 'Get organizing tips, before & after transformations, and exclusive offers delivered to your inbox.',
    'newsletter.email.placeholder': 'Enter your email',
    'newsletter.button.subscribe': 'Subscribe',
    'newsletter.button.subscribing': 'Subscribing...',
    'newsletter.privacy': 'We respect your privacy. Unsubscribe at any time.',
    'newsletter.success.title': 'Success!',
    'newsletter.success.description': 'Thank you for subscribing to our newsletter.',
    'newsletter.already.title': 'Already Subscribed',
    'newsletter.already.description': "You're already subscribed to our newsletter.",
    'newsletter.error.title': 'Error',
    'newsletter.error.description': 'Failed to subscribe. Please try again.',
    // Brand Introduction
    'brand.title': 'Creating Calm, Beautiful Spaces',
    'brand.description': "At Tidy Home, we believe that an organized space is more than just aesthetic—it's about creating calm in your daily life. Our boutique organization service brings luxury, functionality, and peace to every corner of your home.",
    // Why Tidy Home
    'why.title': 'Why Tidy Home',
    'why.benefit1': 'Personalized systems tailored to your lifestyle',
    'why.benefit2': 'Full-service transformations from start to finish',
    'why.benefit3': 'Lasting solutions that are easy to maintain',
    'why.benefit4': 'Trusted by families across Puerto Rico',
    'why.cta': 'Learn More',
    // Service Modal
    'modal.home-organization.title': 'HOME ORGANIZATION',
    'modal.home-organization.description': 'We create customized, clutter-free spaces that reflect your style while promoting order and harmony.\n\nBefore the project begins, we prepare a personalized mood board and lay the groundwork to bring your vision to life.\n\nTidy Home evolves with your needs adding products or labels to maintain long-term functionality.',
    'modal.home-organization.services': 'Decluttering|Product sourcing and returns|Space planning|Installations|Donation drop-offs after each session',
    'modal.moving-concierge.title': 'MOVING CONCIERGE',
    'modal.moving-concierge.description': 'Tidy Home redefines the moving experience, delivering seamless, stress-free transitions from one home to the next.\n\nWith meticulous attention to detail, we manage every aspect of your move; planning, coordination, and execution with precision and grace.',
    'modal.moving-concierge.services': 'Packing – Decluttering, procurement of materials, and item classification|Moving Management – Day-of supervision, storage solutions, and coordination|Unpacking & Organizing – Space planning, system creation, and setup of home essentials',
    'modal.space-creation.title': 'SPACE CREATION',
    'modal.space-creation.description': 'Tidy Home transforms everyday spaces into functional, beautifully tailored environments.\n\nFrom reimagining a cluttered pantry to designing a streamlined garage, we bring thoughtful styling and practical solutions to every corner of your home.',
    'modal.space-creation.services': 'Before & After consultations|Custom storage solutions|Space optimization|Aesthetic enhancements',
    'modal.refresh-sessions.title': 'REFRESH SESSIONS',
    'modal.refresh-sessions.description': 'Life evolves, and so should your spaces. Our Refresh Sessions offer the perfect opportunity to maintain your organized home or adapt it to new needs.\n\nThese are ideal for seasonal updates, post-holiday resets, or when life changes demand a fresh approach.',
    'modal.refresh-sessions.note': 'Refresh Sessions are exclusive to returning clients and require a previously completed Tidy Home project.',
    'modal.additional-services.title': 'ADDITIONAL SERVICES',
    'modal.additional-services.description': 'Beyond organization, we connect you with trusted professionals for every home need.\n\nOur vetted network ensures quality service for:',
    'modal.additional-services.services': 'Handywork & minor repairs|Electrical services|Deep cleaning|Furniture assembly|Custom installations',
    'modal.gift-certificates.title': 'GIFT CERTIFICATES',
    'modal.gift-certificates.description': 'Give the gift of calm and order. Our gift certificates offer a thoughtful way to help someone special transform their space and simplify their life.\n\nPerfect for housewarmings, new parents, or anyone ready for a fresh start.',
    'modal.gift-certificates.cta': 'Purchase a Gift Certificate',
    'modal.close': 'Close',
    // Connect Page
    'connect.title': 'Connect With Us',
    'connect.description': "Ready to transform your space? Choose the service that best fits your needs and let's begin your journey to a beautifully organized home.",
    'connect.form.first-time.title': 'First Time Project',
    'connect.form.first-time.description': 'Starting fresh with Tidy Home? This comprehensive service covers everything from initial consultation to complete transformation.',
    'connect.form.spanish.title': 'PROYECTO INICIAL',
    'connect.form.spanish.description': 'For our Spanish-speaking clients who prefer to communicate in their native language throughout the entire process.',
    'connect.form.moving.title': 'Moving Services',
    'connect.form.moving.description': "Moving doesn't have to feel overwhelming. Our concierge service handles every detail of your transition with care and precision.",
    'connect.form.refresh.title': 'Refresh Sessions',
    'connect.form.refresh.description': 'For existing clients looking to maintain and refresh their organized spaces with ongoing support.',
    // Contact/FAQ Page
    'contact.page.title': 'Contact Us',
    'contact.page.subtitle': 'Transform your space today',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Name',
    'contact.form.question': 'Your question or message',
    'contact.form.submitting': 'Sending...',
    'contact.success.title': 'Message Sent!',
    'contact.success.description': 'Thank you for contacting us. We will respond within 24 hours.',
    'contact.error.title': 'Error',
    'contact.error.description': 'Failed to send message. Please try again or contact us directly.',
    'contact.faqs.title': 'Frequently Asked Questions',
    'contact.faq1.question': 'WHAT SERVICES DO YOU OFFER?',
    'contact.faq1.answer': 'We offer comprehensive home organization services including home organization, moving concierge, space creation, refresh sessions, additional services, and gift certificates. Each service is tailored to meet your specific needs and lifestyle.',
    'contact.faq2.question': 'HOW FAR IN ADVANCE SHOULD I BOOK?',
    'contact.faq2.answer': 'We recommend booking 2-4 weeks in advance to ensure availability, especially during peak seasons. However, we do our best to accommodate urgent requests when possible.',
    'contact.faq3.question': 'HOW DO YOU CHARGE FOR YOUR SERVICES?',
    'contact.faq3.answer': 'Our pricing is customized based on the scope of your project, space size, and specific requirements. After our initial consultation, we provide a detailed proposal with transparent pricing.',
    'contact.faq4.question': 'HOW DO I GET STARTED?',
    'contact.faq4.answer': 'Simply visit our Connect With Us page and choose the service that best fits your needs. Fill out the form, and we will schedule your consultation to discuss your project in detail.',
    'contact.faq5.question': 'WHAT AREAS DO YOU SERVE?',
    'contact.faq5.answer': 'We proudly serve all areas across Puerto Rico. Travel fees may apply for locations outside the metro area, which will be discussed during consultation.',
  },
  es: {
    'nav.about': 'Acerca de',
    'nav.process': 'Proceso',
    'nav.services': 'Servicios',
    'nav.contact': 'Reserva Con Nosotros',
    'hero.tagline': 'Tu Espacio Importa',
    'hero.title': 'Espacios serenos y hermosos que funcionan para tu vida',
    'hero.subtitle': 'Transforma tu hogar con el servicio de organización de lujo premier de Puerto Rico',
    'hero.description': 'De desordenado a relajante, creamos sistemas funcionales que duran. Sirviendo familias en Dorado, San Juan, Guaynabo y Bayamón.',
    'hero.cta.primary': 'Reserva Tu Consulta',
    'hero.cta.secondary': 'Descubre Nuestro Proceso',
    'hero.stats.number': '500+',
    'hero.stats.text': 'Hogares Transformados',
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones integrales para cada espacio de tu hogar',
    'services.home-organization.title': 'ORGANIZACIÓN DEL HOGAR',
    'services.home-organization.description': 'Crea espacios personalizados y libres de desorden que reflejen tu estilo.',
    'services.moving-concierge.title': 'SERVICIO DE MUDANZA',
    'services.moving-concierge.description': 'Transiciones sin estrés de un hogar al siguiente.',
    'services.space-creation.title': 'CREACIÓN DE ESPACIOS',
    'services.space-creation.description': 'Transforma espacios cotidianos en ambientes funcionales y hermosos.',
    'services.refresh-sessions.title': 'SESIONES DE RENOVACIÓN',
    'services.refresh-sessions.description': 'Mantén tus espacios organizados con apoyo continuo.',
    'services.additional-services.title': 'SERVICIOS ADICIONALES',
    'services.additional-services.description': 'Soluciones confiables incluyendo trabajos manuales, eléctricos y limpieza.',
    'services.gift-certificates.title': 'CERTIFICADOS DE REGALO',
    'services.gift-certificates.description': 'Regala el obsequio de un hogar hermosamente organizado.',
    'services.learn-more': 'Saber Más →',
    'process.title': 'PROCESO',
    'process.subtitle': 'El Proceso de 4 Pasos de Tidy Home',
    'process.step1.title': 'FORMULARIO INICIAL Y CONSULTA',
    'process.step1.description': 'Llamada de descubrimiento de 15 minutos seguida de evaluación en persona de tu espacio y necesidades.',
    'process.step2.title': 'PROPUESTA DE PROYECTO E INCORPORACIÓN',
    'process.step2.description': 'Plan de proyecto personalizado adaptado a tu hogar con proceso de incorporación guiado.',
    'process.step3.title': 'PLANIFICACIÓN Y COMPRAS',
    'process.step3.description': 'Manejamos la búsqueda de productos para asegurar una experiencia suave y sin esfuerzo.',
    'process.step4.title': 'DÍA DEL PROYECTO',
    'process.step4.description': 'Transforma tu espacio con desorden reflexivo y organización funcional.',
    'process.cta': 'Contáctanos',
    'about.title': 'ACERCA DE',
    'about.subtitle': 'El Viaje',
    'about.description': 'Tidy Home comenzó como un pequeño servicio boutique de organización del hogar con un objetivo claro; ayudar a los clientes a crear espacios serenos y hermosos que realmente pudieran disfrutar. Con el tiempo, nuestra pasión por la organización y el cuidado del cliente nos llevó a expandir tanto nuestra experiencia como nuestro alcance. Lo que comenzó como ayudar a organizar una sola habitación ha crecido hasta ofrecer transformaciones completas del hogar y apoyo completo del estilo de vida, siempre con la misma atención al detalle y toque personal que nos definió desde el principio.',
    'about.cta': 'Contáctanos',
    'instagram.title': 'síguenos en instagram',
    'instagram.handle': '@tidyhomepr',
    'instagram.follow': 'Seguir @tidyhomepr',
    'contact.title': 'Comienza Hoy',
    'contact.phone': '(939) 202-1008',
    'contact.phone.hours': 'Lunes-Viernes: 8:00 AM - 6:00 PM',
    'contact.email': 'info@tidyhomepr.com',
    'contact.email.response': 'Responderemos dentro de 24 horas',
    'contact.location': 'Dorado, Puerto Rico',
    'contact.location.areas': 'Sirviendo Dorado, San Juan, Guaynabo, Bayamón',
    'contact.form.firstName': 'Nombre',
    'contact.form.lastName': 'Apellido',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.phone': 'Número de Teléfono',
    'contact.form.service': 'Seleccionar Servicio',
    'contact.form.message': 'Cuéntanos sobre tu proyecto...',
    'contact.form.submit': 'Enviar Mensaje',
    'footer.tagline': 'TU ESPACIO IMPORTA',
    'footer.description': 'El servicio de organización de lujo premier de Puerto Rico, creando espacios serenos y hermosos que funcionan para tu vida.',
    'footer.services': 'Servicios',
    'footer.company': 'Empresa',
    'footer.contact': 'Contacto',
    'footer.copyright': '© 2024 Tidy Home Puerto Rico. Todos los derechos reservados.',
    // Newsletter Popup
    'newsletter.title': 'Mantente Actualizado',
    'newsletter.description': 'Recibe consejos de organización, transformaciones de antes y después, y ofertas exclusivas directamente en tu correo.',
    'newsletter.email.placeholder': 'Ingresa tu correo electrónico',
    'newsletter.button.subscribe': 'Suscribirse',
    'newsletter.button.subscribing': 'Suscribiendo...',
    'newsletter.privacy': 'Respetamos tu privacidad. Cancela tu suscripción en cualquier momento.',
    'newsletter.success.title': '¡Éxito!',
    'newsletter.success.description': 'Gracias por suscribirte a nuestro boletín.',
    'newsletter.already.title': 'Ya Suscrito',
    'newsletter.already.description': 'Ya estás suscrito a nuestro boletín.',
    'newsletter.error.title': 'Error',
    'newsletter.error.description': 'No se pudo suscribir. Por favor intenta de nuevo.',
    // Brand Introduction
    'brand.title': 'Creando Espacios Serenos y Hermosos',
    'brand.description': 'En Tidy Home, creemos que un espacio organizado es más que estética—se trata de crear calma en tu vida diaria. Nuestro servicio boutique de organización trae lujo, funcionalidad y paz a cada rincón de tu hogar.',
    // Why Tidy Home
    'why.title': 'Por Qué Tidy Home',
    'why.benefit1': 'Sistemas personalizados adaptados a tu estilo de vida',
    'why.benefit2': 'Transformaciones completas de principio a fin',
    'why.benefit3': 'Soluciones duraderas y fáciles de mantener',
    'why.benefit4': 'Confianza de familias en todo Puerto Rico',
    'why.cta': 'Aprende Más',
    // Service Modal
    'modal.home-organization.title': 'ORGANIZACIÓN DEL HOGAR',
    'modal.home-organization.description': 'Creamos espacios personalizados y libres de desorden que reflejan tu estilo mientras promueven el orden y la armonía.\n\nAntes de que comience el proyecto, preparamos un tablero de inspiración personalizado y sentamos las bases para dar vida a tu visión.\n\nTidy Home evoluciona con tus necesidades agregando productos o etiquetas para mantener la funcionalidad a largo plazo.',
    'modal.home-organization.services': 'Desorden|Búsqueda de productos y devoluciones|Planificación del espacio|Instalaciones|Entrega de donaciones después de cada sesión',
    'modal.moving-concierge.title': 'SERVICIO DE MUDANZA',
    'modal.moving-concierge.description': 'Tidy Home redefine la experiencia de mudanza, brindando transiciones perfectas y sin estrés de un hogar al siguiente.\n\nCon meticulosa atención al detalle, manejamos cada aspecto de tu mudanza; planificación, coordinación y ejecución con precisión y gracia.',
    'modal.moving-concierge.services': 'Empaque – Desorden, adquisición de materiales y clasificación de artículos|Gestión de Mudanza – Supervisión del día, soluciones de almacenamiento y coordinación|Desempaque y Organización – Planificación del espacio, creación de sistemas y configuración de elementos esenciales del hogar',
    'modal.space-creation.title': 'CREACIÓN DE ESPACIOS',
    'modal.space-creation.description': 'Tidy Home transforma espacios cotidianos en ambientes funcionales y bellamente adaptados.\n\nDesde reimaginar una despensa desordenada hasta diseñar un garaje optimizado, aportamos estilo reflexivo y soluciones prácticas a cada rincón de tu hogar.',
    'modal.space-creation.services': 'Consultas de antes y después|Soluciones de almacenamiento personalizadas|Optimización del espacio|Mejoras estéticas',
    'modal.refresh-sessions.title': 'SESIONES DE RENOVACIÓN',
    'modal.refresh-sessions.description': 'La vida evoluciona, y tus espacios también deberían hacerlo. Nuestras Sesiones de Renovación ofrecen la oportunidad perfecta para mantener tu hogar organizado o adaptarlo a nuevas necesidades.\n\nSon ideales para actualizaciones estacionales, reinicios después de las fiestas, o cuando los cambios de vida exigen un enfoque fresco.',
    'modal.refresh-sessions.note': 'Las Sesiones de Renovación son exclusivas para clientes que regresan y requieren un proyecto de Tidy Home completado previamente.',
    'modal.additional-services.title': 'SERVICIOS ADICIONALES',
    'modal.additional-services.description': 'Más allá de la organización, te conectamos con profesionales de confianza para cada necesidad del hogar.\n\nNuestra red verificada garantiza servicio de calidad para:',
    'modal.additional-services.services': 'Trabajos manuales y reparaciones menores|Servicios eléctricos|Limpieza profunda|Ensamblaje de muebles|Instalaciones personalizadas',
    'modal.gift-certificates.title': 'CERTIFICADOS DE REGALO',
    'modal.gift-certificates.description': 'Regala calma y orden. Nuestros certificados de regalo ofrecen una forma considerada de ayudar a alguien especial a transformar su espacio y simplificar su vida.\n\nPerfecto para inauguraciones de casa, nuevos padres, o cualquiera listo para un nuevo comienzo.',
    'modal.gift-certificates.cta': 'Comprar un Certificado de Regalo',
    'modal.close': 'Cerrar',
    // Connect Page
    'connect.title': 'Conéctate Con Nosotros',
    'connect.description': '¿Listo para transformar tu espacio? Elige el servicio que mejor se adapte a tus necesidades y comencemos tu viaje hacia un hogar hermosamente organizado.',
    'connect.form.first-time.title': 'Proyecto Inicial',
    'connect.form.first-time.description': '¿Comenzando de nuevo con Tidy Home? Este servicio integral cubre todo, desde la consulta inicial hasta la transformación completa.',
    'connect.form.spanish.title': 'PROYECTO INICIAL',
    'connect.form.spanish.description': 'Para nuestros clientes de habla hispana que prefieren comunicarse en su idioma nativo durante todo el proceso.',
    'connect.form.moving.title': 'Servicios de Mudanza',
    'connect.form.moving.description': 'Mudarse no tiene que sentirse abrumador. Nuestro servicio de conserjería maneja cada detalle de tu transición con cuidado y precisión.',
    'connect.form.refresh.title': 'Sesiones de Renovación',
    'connect.form.refresh.description': 'Para clientes existentes que buscan mantener y renovar sus espacios organizados con apoyo continuo.',
    // Contact/FAQ Page
    'contact.page.title': 'Contáctanos',
    'contact.page.subtitle': 'Transforma tu espacio hoy',
    'contact.form.title': 'Envíanos un mensaje',
    'contact.form.name': 'Nombre',
    'contact.form.question': 'Tu pregunta o mensaje',
    'contact.form.submitting': 'Enviando...',
    'contact.success.title': '¡Mensaje Enviado!',
    'contact.success.description': 'Gracias por contactarnos. Responderemos dentro de 24 horas.',
    'contact.error.title': 'Error',
    'contact.error.description': 'No se pudo enviar el mensaje. Por favor intenta de nuevo o contáctanos directamente.',
    'contact.faqs.title': 'Preguntas Frecuentes',
    'contact.faq1.question': '¿QUÉ SERVICIOS OFRECEN?',
    'contact.faq1.answer': 'Ofrecemos servicios integrales de organización del hogar que incluyen organización del hogar, servicio de mudanza, creación de espacios, sesiones de renovación, servicios adicionales y certificados de regalo. Cada servicio está adaptado para satisfacer tus necesidades y estilo de vida específicos.',
    'contact.faq2.question': '¿CON CUÁNTA ANTICIPACIÓN DEBO RESERVAR?',
    'contact.faq2.answer': 'Recomendamos reservar con 2-4 semanas de anticipación para garantizar disponibilidad, especialmente durante las temporadas altas. Sin embargo, hacemos nuestro mejor esfuerzo para acomodar solicitudes urgentes cuando es posible.',
    'contact.faq3.question': '¿CÓMO COBRAN POR SUS SERVICIOS?',
    'contact.faq3.answer': 'Nuestros precios se personalizan según el alcance de tu proyecto, el tamaño del espacio y los requisitos específicos. Después de nuestra consulta inicial, proporcionamos una propuesta detallada con precios transparentes.',
    'contact.faq4.question': '¿CÓMO EMPIEZO?',
    'contact.faq4.answer': 'Simplemente visita nuestra página Conéctate Con Nosotros y elige el servicio que mejor se adapte a tus necesidades. Llena el formulario y programaremos tu consulta para discutir tu proyecto en detalle.',
    'contact.faq5.question': '¿QUÉ ÁREAS ATIENDEN?',
    'contact.faq5.answer': 'Orgullosamente servimos todas las áreas de Puerto Rico. Pueden aplicar tarifas de viaje para ubicaciones fuera del área metropolitana, lo cual se discutirá durante la consulta.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('tidyhome-language');
    if (savedLanguage) {
      const lang = languages.find(l => l.code === savedLanguage);
      if (lang) {
        setCurrentLanguage(lang);
      }
    }
  }, []);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('tidyhome-language', language.code);
  };

  const t = (key: string): string => {
    // First try direct key lookup (for flat keys with dots)
    const directValue = translations[currentLanguage.code][key];
    if (directValue) {
      return directValue;
    }
    
    // If not found, try nested object access (for backwards compatibility)
    const keys = key.split('.');
    let value: any = translations[currentLanguage.code];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export { languages };
