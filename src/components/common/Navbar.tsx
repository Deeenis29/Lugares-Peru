import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mountain, Menu, X, Search, Home, MapPin } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import Button from '@/components/ui/Button';
import ThemeToggle from '@/components/ui/ThemeToggle';
import LanguageToggle from '@/components/ui/LanguageToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useApp();

  const navItems = [
    { label: t('nav.home'), href: '/', icon: Home },
    { label: t('nav.destinations'), href: '/places', icon: MapPin },
    { label: t('nav.search'), href: '/search', icon: Search }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400 transition-colors"
            aria-label="Ir al inicio"
          >
            <Mountain className="h-8 w-8" />
            <span className="font-bold text-xl hidden sm:block">{t('home.title')}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`
                    flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${isActive(item.href) 
                      ? 'text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-900/20' 
                      : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50 dark:text-gray-300 dark:hover:text-amber-400 dark:hover:bg-amber-900/20'
                    }
                  `}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            
            {/* Theme and Language toggles */}
            <div className="flex items-center space-x-2 ml-4 border-l border-gray-200 dark:border-gray-700 pl-4">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden">
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <LanguageToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors
                      ${isActive(item.href)
                        ? 'text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-900/20'
                        : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50 dark:text-gray-300 dark:hover:text-amber-400 dark:hover:bg-amber-900/20'
                      }
                    `}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;