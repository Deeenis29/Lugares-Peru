import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { Place } from '@/types/place';
import { REGIONS, CATEGORIES, CURRENCY_SYMBOLS, DIFFICULTY_STYLES } from '@/utils/constants';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

interface PlaceCardProps {
  place: Place;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  const { t, language } = useApp();

  // Selecciona la dificultad principal (puedes ajustar si quieres mostrar varias)
  const mainDifficulty = place.difficulty[language][0];
  const difficultyStyle = DIFFICULTY_STYLES[language][mainDifficulty as keyof typeof DIFFICULTY_STYLES[typeof language]] || { color: 'text-gray-500', bg: 'bg-gray-100' };

  return (
    <Card
      hover
      padding="none"
      className="overflow-hidden group bg-white dark:bg-gray-800 transition-colors border border-gray-100 dark:border-zinc-700"
    >
      <Link to={`/places/${place.id}`} className="block">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={place.imageUrl}
            alt={place.name[language]}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="primary">
              {CATEGORIES[place.category][language] ?? "Categoría desconocida"}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" size="lg">
              {REGIONS[place.region as keyof typeof REGIONS] ?? "Región desconocida"}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {place.name[language]}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {place.shortDescription[language]}
          </p>

          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{place.location.address[language]}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">{place.duration[language]}</span>
              </div>

              <Badge
                variant="success"
                className={`${difficultyStyle}`}
                size="sm"
              >
                {mainDifficulty}
              </Badge>
            </div>

            <div className="flex items-center text-amber-600 dark:text-amber-400 font-semibold">
              <span>
                {CURRENCY_SYMBOLS[place.price.currency]}{place.price.min}-{place.price.max}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default PlaceCard;