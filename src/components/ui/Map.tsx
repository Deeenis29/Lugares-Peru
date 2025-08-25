import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

interface MapProps {
  lat: number;
  lng: number;
  name: string;
  className?: string;
}

const Map: React.FC<MapProps> = ({ lat, lng, name, className = '' }) => {
  // Generate Google Maps embed URL (using a public embed without API key)
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spe!4v1635959385076!5m2!1sen!2spe`;
  
  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  };

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      {/* Embedded Google Map */}
      <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-800">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa de ${name}`}
          className="rounded-lg"
        />
        
        {/* Overlay with place info */}
        <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 max-w-xs">
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="h-4 w-4 text-amber-600 flex-shrink-0" />
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
              {name}
            </h4>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
            {lat.toFixed(4)}, {lng.toFixed(4)}
          </p>
          <button
            onClick={openInGoogleMaps}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center justify-center space-x-1"
          >
            <ExternalLink className="h-3 w-3" />
            <span>Ver en Google Maps</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;