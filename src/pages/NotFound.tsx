import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { usePageTitle } from '@/hooks/usePageTitle';
import Button from '@/components/ui/Button';

const NotFound: React.FC = () => {
  const { t } = useApp();
  usePageTitle(t('notFound.title'));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4 transition-colors">
      <div className="text-center">
        <div className="text-9xl font-bold text-amber-600 mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('notFound.title')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md">
          {t('notFound.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-5 w-5" />
              <span>{t('notFound.backHome')}</span>
            </Link>
          </Button>
          
          <Button variant="outline" size="lg">
            <Link to="/search" className="flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>{t('notFound.searchDestinations')}</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;