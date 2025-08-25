import { useEffect } from 'react';
import { APP_CONFIG } from '@/utils/constants';

export const usePageTitle = (title?: string) => {
  useEffect(() => {
    const pageTitle = title 
      ? `${title} | ${APP_CONFIG.name}`
      : APP_CONFIG.name;
    
    document.title = pageTitle;
  }, [title]);
};