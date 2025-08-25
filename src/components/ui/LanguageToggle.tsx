import React from 'react';
import { Globe } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import Button from '@/components/ui/Button';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useApp();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="p-2 flex items-center space-x-1"
      aria-label={`Switch to ${language === 'es' ? 'English' : 'Spanish'}`}
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {language === 'es' ? 'EN' : 'ES'}
      </span>
    </Button>
  );
};

export default LanguageToggle;