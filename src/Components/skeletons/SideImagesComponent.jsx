import React, { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TextComponent = memo(({ imgSrc }) => {
  return <LazyLoadImage alt={'ulu'} effect="blur" src={imgSrc} width="100%" />;
});

export default TextComponent;
