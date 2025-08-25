import React, { useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Calendar, Users, Star, Phone, Mail, ExternalLink, Images, Search } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { getPlaceById } from '@/data/places';
import { usePageTitle } from '@/hooks/usePageTitle';
import { REGIONS, CATEGORIES, CURRENCY_SYMBOLS, DIFFICULTY_STYLES } from '@/utils/constants';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Map from '@/components/ui/Map';
import ImageGallery from '@/components/ui/ImageGallery';
import { Language } from '@/types/common';
import { Place } from '@/types/place';

const PlaceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const place: Place | undefined = id ? getPlaceById(id) : undefined;
  const { t, language } = useApp();
  
  // Ref para acceder a los métodos del ImageGallery
  const imageGalleryRef = useRef<{ openModal: (index: number) => void }>(null);

  usePageTitle(place?.name ? place.name[language] : undefined);

  if (!place) {
    return <Navigate to="/places" replace />;
  }

  // Función para abrir la galería desde la imagen destacada
  const handleOpenGallery = () => {
    if (imageGalleryRef.current) {
      imageGalleryRef.current.openModal(0);
    }
  };

  // Dificultad principal y estilos
  const mainDifficulty: string = place.difficulty[language][0];
  type DifficultyStyle = { color: string; bg: string };
  function getDifficultyStyle(lang: Language, diff: string): DifficultyStyle {
    const styles = DIFFICULTY_STYLES[lang] as Record<string, DifficultyStyle>;
    return styles[diff] || { color: 'text-gray-500', bg: 'bg-gray-100' };
  }
  const difficultyStyle = getDifficultyStyle(language, mainDifficulty);
  const highlights: string[] = place.highlights[language];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={place.imageUrl}
          alt={place.name[language]}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = 'https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="primary" size="lg">
                {CATEGORIES[place.category][language]}
              </Badge>
              <Badge variant="secondary" size="lg">
                {REGIONS[place.region as keyof typeof REGIONS]}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {place.name[language]}
            </h1>
            <div className="flex items-center text-white text-lg">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{place.location.address[language]}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6 transition-colors">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('placeDetail.description')}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{place.description[language]}</p>
            </div>

            {/* Highlights */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6 transition-colors">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('placeDetail.highlights')}</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {highlights.map((highlight: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <Star className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery */}
            {place.images.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-colors">
                <div className="flex items-center space-x-2 mb-4">
                  <Images className="h-6 w-6 text-amber-600" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t('placeDetail.gallery')}
                  </h2>
                  <span className="text-sm text-gray-900 dark:text-gray-400">
                    ({place.images.length} {t('placeDetail.images')})
                  </span>
                </div>
                
                {/* Imagen principal destacada */}
                <div className="mb-6">
                  <div 
                    className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700"
                    onClick={handleOpenGallery}
                  >
                    <img
                      src={place.images[0]}
                      alt={`${place.name[language]} - imagen principal`}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=800';
                      }}
                    />
                                        
                    {/* Badge de "Ver Galería" */}
                    <div className="absolute top-4 right-4 bg-white text-gray-900 dark:bg-gray-800 bg-opacity-60 dark:text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {language === 'es' ? 'Ver Galería' : 'View Gallery'}
                    </div>
                  </div>
                </div>

                <ImageGallery 
                  ref={imageGalleryRef}
                  images={place.images} 
                  placeName={place.name[language]} 
                />

                {/* Overlay con lupa mejorada */}
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-800 rounded-full p-4 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <Search className="h-8 w-8 text-amber-600" />
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('placeDetail.quickInfo')}</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{t('placeDetail.duration')}</span>
                  </div>
                  <span className="font-medium dark:text-white">{place.duration[language]}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{t('placeDetail.difficulty')}</span>
                  </div>
                  <Badge
                    variant="success"
                    className={`${difficultyStyle.color} ${difficultyStyle.bg}`}
                  >
                    {mainDifficulty}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center ">
                    <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300 text-nowrap">{t('placeDetail.bestTime')}</span>
                  </div>
                  <span className="font-medium text-sm text-balance text-right dark:text-white">
                    {place.bestTimeToVisit[language]}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{t('placeDetail.price')}</span>
                  </div>
                  <span className="font-bold text-amber-600">
                    {CURRENCY_SYMBOLS[place.price.currency]}{place.price.min}-{place.price.max}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-3">{t('placeDetail.readyForAdventure')}</h3>
              <p className="mb-4 text-amber-100">
                {t('placeDetail.ctaDescription')} {place.name[language]}
              </p>
              
              <div className="space-y-3">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full bg-white text-amber-600 hover:bg-gray-50 flex items-center justify-center space-x-2"
                  onClick={() => window.open(`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(place.name[language] + ', Peru')}`, '_blank')}
                >
                  <Calendar className="h-5 w-5" />
                  <span>{t('placeDetail.bookNow')}</span>
                </Button>
                
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    size="md"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 flex items-center justify-center space-x-1"
                    onClick={() => window.open(`tel:+51987654321`, '_self')}
                  >
                    <Phone className="h-4 w-4" />
                    <span>{t('placeDetail.callUs')}</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="md"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 flex items-center justify-center space-x-1"
                    onClick={() => window.open(`mailto:info@lugaresdelperu.com?subject=Consulta sobre ${place.name[language]}`, '_self')}
                  >
                    <Mail className="h-4 w-4" />
                    <span>{t('placeDetail.emailUs')}</span>
                  </Button>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-full text-white/80 hover:text-white hover:bg-white/10 flex items-center justify-center space-x-2"
                  onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(place.name[language] + ' tours Peru')}`, '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>{t('placeDetail.findTours')}</span>
                </Button>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('placeDetail.location')}</h3>
              <Map 
                lat={place.location.lat}
                lng={place.location.lng}
                name={place.name[language]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;