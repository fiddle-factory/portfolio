import React from 'react';

/**
 * ImageGrid Component
 *
 * Displays a responsive grid of images with optional caption.
 * Grid adapts from 1 column on mobile to configurable columns on larger screens.
 *
 * @param {Object} props
 * @param {string[]} props.images - Array of image URLs to display
 * @param {number} [props.columns=3] - Number of columns on large screens (default: 3)
 * @param {string} [props.caption] - Optional caption text below the grid
 */
const ImageGrid = ({ images, columns = 3, caption }) => {
  const getGridColsClass = () => {
    switch (columns) {
      case 1:
        return 'lg:grid-cols-1';
      case 2:
        return 'lg:grid-cols-2';
      case 3:
        return 'lg:grid-cols-3';
      case 4:
        return 'lg:grid-cols-4';
      default:
        return 'lg:grid-cols-3';
    }
  };

  return (
    <div>
      <div className={`grid gap-4 grid-cols-1 sm:grid-cols-2 ${getGridColsClass()}`}>
        {images.map((imageSrc, index) => (
          <img
            key={index}
            src={imageSrc}
            alt={`Image ${index + 1}`}
            className="rounded-lg shadow-md w-full h-auto object-cover"
            loading="lazy"
          />
        ))}
      </div>

      {caption && (
        <p className="text-sm text-gray-500 text-center mt-3">
          {caption}
        </p>
      )}
    </div>
  );
};

export default ImageGrid;
