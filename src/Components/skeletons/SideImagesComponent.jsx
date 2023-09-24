import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function TextComponent({ imgSrc }) {
  return <LazyLoadImage alt={'ulu'} effect="blur" src={imgSrc} width="100%" />;
}

export default TextComponent;
