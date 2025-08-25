import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { places } from '@/data/places';
import { usePageTitle } from '@/hooks/usePageTitle';
import PlaceGrid from '@/components/places/PlaceGrid';

const Places: React.FC = () => {
  const { t } = useApp();
  usePageTitle(t('places.allDestinations'));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('places.allDestinations')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('places.allDestinationsDesc')}
          </p>
        </div>

        <PlaceGrid places={places} />
      </div>
    </div>
  );
};

export default Places;