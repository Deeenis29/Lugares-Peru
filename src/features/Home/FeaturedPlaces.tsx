import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { places } from '@/data/places';
import PlaceGrid from '@/components/places/PlaceGrid';
import Button from '@/components/ui/Button';

const FeaturedPlaces: React.FC = () => {
  const { t } = useApp();
  const featuredPlaces = places.slice(0, 6);

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('home.featuredPlaces')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('home.featuredDescription')}
          </p>
        </div>

        <PlaceGrid places={featuredPlaces} />

        <div className="text-center mt-12">
          <Button size="lg">
            <Link to="/places">
              {t('home.viewAllDestinations')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlaces;