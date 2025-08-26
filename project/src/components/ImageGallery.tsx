import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { DestinationImage } from '../types/destination';

interface ImageGalleryProps {
  images: DestinationImage[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            onClick={() => openModal(index)}
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all">
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-sm font-medium">{image.caption}</p>
                {image.source && (
                  <p className="text-xs opacity-75">Source: {image.source}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].caption}
              className="max-w-full max-h-[80vh] object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-white">
              <h3 className="text-lg font-semibold mb-1">{images[selectedImage].caption}</h3>
              {images[selectedImage].source && (
                <p className="text-sm opacity-75 flex items-center">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Source: {images[selectedImage].source}
                </p>
              )}
            </div>

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;