import './ImageGallery.css';
import { data } from '../../../lib/dummy';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ImagCat, setImagCat] = useState('all');

  const handleClick = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  const handleClickClose = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'scroll';
  };
  const handleImagCat = (val) => {
    setImagCat(val);
  };

  return (
    <div className="filters-com">
      <div className="filters-wraper">
        <div>
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav__link__active' : ''
              }
              to="/Areas"
            >
              Inanç Turizm Merkezleri
            </NavLink>
          </div>
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav__link__active' : ''
              }
              to="/Videos"
            >
              Rotalar
            </NavLink>
          </div>
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav__link__active' : ''
              }
              to="/Hakkinda"
            >
              Hakkında
            </NavLink>
          </div>
        </div>
      </div>
      <div className="gallery-wraper">
        {data?.map((item, index) => {
          if (ImagCat === 'all') {
            return (
              <div key={index}>
                <div className="image-gallery image-animation">
                  <img
                    onClick={() => handleClick(item.img)}
                    src={item.img}
                    alt={`${index}`}
                  />
                  <div className="text">
                    <h2 className="title">{item.title}</h2>
                    <p className="desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          }
          if (item.cat === ImagCat) {
            return (
              <div key={index}>
                <div className="image-gallery image-animation">
                  <img
                    onClick={() => handleClick(item.img)}
                    src={item.img}
                    alt={`${index}`}
                  />
                  <div className="text">
                    <h2 className="title">{item.title}</h2>
                    <p className="desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      {selectedImage && (
        <div className="modal1">
          <img src={selectedImage} alt="Büyük Resim" />
          <button onClick={handleClickClose}>❌</button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
