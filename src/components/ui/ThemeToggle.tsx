import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import Button from './Button';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useApp();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="p-2"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;