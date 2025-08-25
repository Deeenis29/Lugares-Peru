import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { SearchFilters as SearchFiltersType } from '@/types/place';
import { REGIONS, CATEGORIES } from '@/utils/constants';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { RotateCcw } from 'lucide-react';

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFiltersChange: (filters: SearchFiltersType) => void;
  onReset: () => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  onFiltersChange,
  onReset
}) => {
  const { t, language } = useApp();

  const regionOptions = Object.entries(REGIONS).map(([value, label]) => ({
    value,
    label
  }));

  const categoryOptions = Object.entries(CATEGORIES).map(([value, label]) => ({
    value,
    label: label[language]
  }));

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          label={t('search.searchByName')}
          placeholder={t('search.placeholder')}
          value={filters.query}
          onChange={(value) => onFiltersChange({ ...filters, query: value })}
          type="search"
        />

        <Select
          label={t('search.region')}
          value={filters.region}
          onChange={(value) => onFiltersChange({ ...filters, region: value as any })}
          options={regionOptions}
          placeholder={t('search.allRegions')}
        />

        <Select
          label={t('search.category')}
          value={filters.category}
          onChange={(value) => onFiltersChange({ ...filters, category: value as any })}
          options={categoryOptions}
          placeholder={t('search.allCategories')}
        />
      </div>

      <div className="mt-4 flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
          className="flex items-center space-x-2"
        >
          <RotateCcw className="h-4 w-4" />
          <span>{t('search.clearFilters')}</span>
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;