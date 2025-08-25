import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { useSearch } from '@/hooks/useSearch';
import { usePageTitle } from '@/hooks/usePageTitle';
import SearchFilters from '@/components/search/SearchFilters';
import PlaceGrid from '@/components/places/PlaceGrid';

const Search: React.FC = () => {
  const { filters, setFilters, filteredPlaces, resetFilters, hasActiveFilters } = useSearch();
  const { t } = useApp();
  
  usePageTitle(t('search.title'));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('search.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('search.description')}
          </p>
        </div>

        <div className="mb-8">
          <SearchFilters
            filters={filters}
            onFiltersChange={setFilters}
            onReset={resetFilters}
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {hasActiveFilters ? t('search.searchResults') : t('search.allDestinations')}
              <span className="text-amber-600 ml-2">({filteredPlaces.length})</span>
            </h2>
          </div>
        </div>

        <PlaceGrid places={filteredPlaces} />
      </div>
    </div>
  );
};

export default Search;