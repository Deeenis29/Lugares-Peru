import React from 'react';
import { usePageTitle } from '@/hooks/usePageTitle';
import Hero from '@/features/Home/Hero';
import FeaturedPlaces from '@/features/Home/FeaturedPlaces';
import Stats from '@/features/Home/Stats';

const Home: React.FC = () => {
  usePageTitle();

  return (
    <>
      <Hero />
      <Stats />
      <FeaturedPlaces />
    </>
  );
};

export default Home;