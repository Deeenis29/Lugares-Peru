import { useState, useMemo } from 'react';
import { Place, SearchFilters } from '@/types/place';
import { places as allPlaces } from '@/data/places';

export const useSearch = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    region: '',
    category: ''
  });

  const filteredPlaces = useMemo(() => {
    return allPlaces.filter((place: Place) => {
      const matchesQuery = !filters.query || 
        place.name.en.includes(filters.query.toLowerCase()) ||
        place.description.es.includes(filters.query.toLowerCase()) ||
        place.shortDescription.es.includes(filters.query.toLowerCase())

      const matchesRegion = !filters.region || place.region === filters.region;
      const matchesCategory = !filters.category || place.category === filters.category;

      return matchesQuery && matchesRegion && matchesCategory;
    });
  }, [filters]);

  const resetFilters = () => {
    setFilters({
      query: '',
      region: '',
      category: ''
    });
  };

  return {
    filters,
    setFilters,
    filteredPlaces,
    resetFilters,
    hasActiveFilters: !!(filters.query || filters.region || filters.category)
  };
};