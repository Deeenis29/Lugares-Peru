import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from '@/layouts/DefaultLayout';
import Home from '@/pages/Home';
import Places from '@/pages/Places';
import PlaceDetail from '@/pages/PlaceDetail';
import Search from '@/pages/Search';
import NotFound from '@/pages/NotFound';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/:id" element={<PlaceDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
};

export default AppRouter;