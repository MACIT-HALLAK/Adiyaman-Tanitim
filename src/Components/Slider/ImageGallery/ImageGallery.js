import './ImageGallery.css';
import { data } from '../../../lib/dummy';
import { useState } from 'react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  const handleClickClose = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'scroll';
  };

  return (
    <div className="filters-com">
      <div className="filters-wraper">
        <div>
          <div>All</div>
          <div>Camiler</div>
          <div>Turism mekanlari</div>
          <div>Yemekleri</div>
          <div>home</div>
        </div>
      </div>
      <div className="gallery-wraper">
        {data?.map((item, index) => {
          return (
            <div key={index}>
              <div className="image-gallery">
                <img
                  onClick={() => handleClick(item.img)}
                  src={item.img}
                  alt={`${index}`}
                />
                <div className="text">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {selectedImage && (
        <div className="modal">
          <img src={selectedImage} alt="Büyük Resim" />
          <button onClick={handleClickClose}>❌</button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
