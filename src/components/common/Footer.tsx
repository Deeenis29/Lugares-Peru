import React from 'react';
import { Mountain, MapPin, Mail, Phone } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

const Footer: React.FC = () => {
  const { t } = useApp();

  return (
    <footer className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-amber-500" />
              <span className="font-bold text-xl">{t('home.title')}</span>
            </div>
            <p className="text-gray-900 dark:text-gray-300 max-w-md">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-900 dark:text-gray-300 hover:text-amber-500 transition-colors">
                  {t('nav.home')} 
                </a>
              </li>
              <li>
                <a href="/places" className="text-gray-900 dark:text-gray-300 hover:text-amber-500 transition-colors">
                  {t('nav.destinations')}
                </a>
              </li>
              <li>
                <a href="/search" className="text-gray-900 dark:text-gray-300 hover:text-amber-500 transition-colors">
                  {t('nav.search')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-900 dark:text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Lima, Perú</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-900 dark:text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@lugaresdelperu.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-900 dark:text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+51 1 234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-900 dark:text-gray-300">
            © 2025 {t('home.title')}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;