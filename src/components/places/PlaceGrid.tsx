import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Place } from '@/types/place';
import PlaceCard from './PlaceCard';

interface PlaceGridProps {
  places: Place[];
  loading?: boolean;
}

const PlaceGrid: React.FC<PlaceGridProps> = ({ places, loading = false }) => {
  const { t } = useApp();

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-t-xl"></div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-b-xl">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-1"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (places.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🏔️</div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          {t('places.noResults')}
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          {t('places.noResultsDesc')}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
};

export default PlaceGrid;