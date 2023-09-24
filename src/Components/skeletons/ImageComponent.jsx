// ImageComponent.js
import React, { memo } from 'react';

const ImageComponent = memo(({ images, currentImageIndex }) => {
  return (
    <div
      className={`content-img ${
        currentImageIndex === images.length ? 'active' : ''
      }`}
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    ></div>
  );
});

export default ImageComponent;
