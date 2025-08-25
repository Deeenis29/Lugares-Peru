import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import Button from '@/components/ui/Button';

const Hero: React.FC = () => {
  const { t } = useApp();

  return (
    <section className="relative bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 transition-colors">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          {t('home.subtitle')}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 block">
            {t('home.title')}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          {t('home.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="flex items-center space-x-2"
          >
            <Link to="/places" className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>{t('home.exploreDestinations')}</span>
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="flex items-center space-x-2"
          >
            <Link to="/search" className="flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>{t('home.searchPlaces')}</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;