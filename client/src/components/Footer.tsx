import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'wouter';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ backgroundColor: '#5e432c', color: '#eeeae1' }} className="py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3
              className="text-xl font-heading font-bold mb-4"
              style={{ color: '#bfbf92' }}
              data-testid="footer-brand"
            >
              Tidy Home
            </h3>
            <p
              className="mb-4 font-body"
              style={{ color: '#eeeae1' }}
              data-testid="footer-description"
            >
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/tidyhomepr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: '#eeeae1' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#bfbf92'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#eeeae1'}
                data-testid="footer-instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="transition-colors"
                style={{ color: '#eeeae1' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#bfbf92'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#eeeae1'}
                data-testid="footer-facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: '#bfbf92' }}
              data-testid="footer-services-title"
            >
              {t('footer.services')}
            </h4>
            <ul className="space-y-2" style={{ color: '#eeeae1' }}>
              <li className="font-body">
                <Link href="/connect-with-us" className="transition-colors"
                  style={{ color: '#eeeae1' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#bfbf92'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#eeeae1'}
                  data-testid="footer-service-home">
                  {t('footer.home_organization')}
                </Link>
              </li>
              <li className="font-body">
                <Link href="/connect-with-us" className="transition-colors"
                  style={{ color: '#eeeae1' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#bfbf92'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#eeeae1'}
                  data-testid="footer-service-moving">
                  {t('footer.moving_concierge')}
                </Link>
              </li>
              <li className="font-body">
                <Link href="/connect-with-us" className="transition-colors"
                  style={{ color: '#eeeae1' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#bfbf92'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#eeeae1'}
                  data-testid="footer-service-space">
                  {t('footer.space_creation')}
                </Link>
              </li>
              <li className="font-body">
                <Link href="/connect-with-us" className="transition-colors"
                  style={{ color: '#eeeae1' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#bfbf92'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#eeeae1'}
                  data-testid="footer-service-refresh">
                  {t('footer.refresh_sessions')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: '#bfbf92' }}
              data-testid="footer-company-title"
            >
              {t('footer.company')}
            </h4>
            <ul className="space-y-2" style={{ color: '#eeeae1' }}>
              <li className="font-body">
                <Link href="/about" className="transition-colors" data-testid="footer-about"
                  style={{ color: '#eeeae1' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#bfbf92'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#eeeae1'}>
                  {t('footer.about_link')}
                </Link>
              </li>
              <li className="font-body">
                <Link href="/services" className="transition-colors" data-testid="footer-services"
                  style={{ color: '#eeeae1' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#bfbf92'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#eeeae1'}>
                  {t('footer.services_link')}
                </Link>
              </li>
              <li className="font-body">
                <Link href="/portfolio" className="transition-colors" data-testid="footer-portfolio"
                  style={{ color: '#eeeae1' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#bfbf92'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#eeeae1'}>
                  {t('footer.portfolio_link')}
                </Link>
              </li>
              <li className="font-body">
                <Link href="/faqs" className="transition-colors" data-testid="footer-faqs"
                  style={{ color: '#eeeae1' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#bfbf92'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#eeeae1'}>
                  {t('footer.faqs_link')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: '#bfbf92' }}
              data-testid="footer-contact-title"
            >
              {t('footer.contact_info')}
            </h4>
            <div className="space-y-3" style={{ color: '#eeeae1' }}>
              <div className="flex items-center space-x-2" data-testid="footer-email">
                <span className="font-body">{t('footer.email')}</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="footer-hours">
                <span className="font-body">{t('footer.hours')}</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="footer-location">
                <span className="font-body">{t('footer.service_areas')}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 text-center" style={{ borderTop: '1px solid #bfbf8250', color: '#eeeae1' }}>
          <p className="font-body" data-testid="footer-copyright">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}