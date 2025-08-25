import React from 'react';
import { MapPin, Mountain, Camera, Users } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

const Stats: React.FC = () => {
  const { t } = useApp();

  const stats = [
    {
      icon: MapPin,
      value: '25+',
      label: t('home.stats.regions'),
      description: t('home.stats.regionsDesc')
    },
    {
      icon: Mountain,
      value: '100+',
      label: t('home.stats.places'),
      description: t('home.stats.placesDesc')
    },
    {
      icon: Camera,
      value: '500+',
      label: t('home.stats.photos'),
      description: t('home.stats.photosDesc')
    },
    {
      icon: Users,
      value: '10K+',
      label: t('home.stats.visitors'),
      description: t('home.stats.visitorsDesc')
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  <Icon className="h-12 w-12" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-amber-100 text-sm">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;