import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  placeName: string;
}

export interface ImageGalleryRef {
  openModal: (index: number) => void;
}

const ImageGallery = forwardRef<ImageGalleryRef, ImageGalleryProps>(({ images, placeName }, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  const handleImageError = (index: number, e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
    // Imagen de respaldo
    e.currentTarget.src = 'https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg';
  };

  // Exponer el método openModal al componente padre
  useImperativeHandle(ref, () => ({
    openModal
  }));

  // No mostrar si hay solo una imagen o menos
  if (images.length <= 1) return null;

  return (
    <>
      {/* Gallery Grid - Solo mostrar si hay más de 1 imagen */}
      {images.length > 1 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.slice(1).map((image, index) => {
            const actualIndex = index + 1;
            return (
              <div
                key={actualIndex}
                className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 aspect-square"
                onClick={() => openModal(actualIndex)}
              >
                <img
                  src={image}
                  alt={`${placeName} - imagen ${actualIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 relative z-10"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=1200';
                  }}
                />
                
                {/* Overlay con efecto hover */}
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center z-20">
                  <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Galería de imágenes"
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all"
            aria-label="Cerrar galería"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentImageIndex]}
              alt={`${placeName} - imagen ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
              onError={(e) => {
                e.currentTarget.src = 'https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg';
              }}
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-xs overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-all ${
                  index === currentImageIndex
                    ? 'border-amber-500'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={image}
                  alt={`Miniatura ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg';
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
});

ImageGallery.displayName = 'ImageGallery';

export default ImageGallery;