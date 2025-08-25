import React from 'react';
import { AppProvider } from '@/contexts/AppContext';
import AppRouter from '@/router/AppRouter';

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;