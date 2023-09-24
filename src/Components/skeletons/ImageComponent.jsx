// ImageComponent.js
import React from 'react';

function ImageComponent({ images, currentImageIndex }) {
  return (
    <div
      className={`content-img ${
        currentImageIndex === images.length ? 'active' : ''
      }`}
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    ></div>
  );
}

export default ImageComponent;
