import './ImageGallery.css';
import slidimage1 from '../../../Assets/images/t.jpg';
import slidimage3 from '../../../Assets/images/tt.jpg';
import slidimage4 from '../../../Assets/images/ttt.jpg';
import slidimage5 from '../../../Assets/images/tttt.jpg';
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
        <div>
          <div className="image-gallery">
            <img
              onClick={() => handleClick(slidimage1)}
              src={slidimage1}
              alt=""
            />
            <div className="text">
              <h2>Nemrut Dağı Milli Parkı</h2>
              <p>Antik Medeniyetlerin İzinde</p>
            </div>
          </div>
        </div>

        <div>
          <div className="image-gallery">
            <img
              onClick={() => handleClick(slidimage3)}
              src={slidimage3}
              alt=""
            />
            <div className="text">
              <h2>Cendere Köprüsü</h2>
              <p>Antik Medeniyetlerin İzinde</p>
            </div>
          </div>
        </div>
        <div>
          <div className="image-gallery">
            <img
              onClick={() => handleClick(slidimage3)}
              src={slidimage3}
              alt=""
            />
            <div className="text">
              <h2>Perre Antik Kenti</h2>
              <p>Adıyaman’daki Müzeler</p>
            </div>
          </div>
        </div>
        <div>
          <div className="image-gallery">
            <img
              onClick={() => handleClick(slidimage4)}
              src={slidimage4}
              alt=""
            />
            <div className="text">
              <h2>Eski Besni Harabeleri</h2>
              <p>Adıyaman’daki Doğal Güzellikler</p>
            </div>
          </div>
        </div>
        <div>
          <div className="image-gallery">
            <img
              onClick={() => handleClick(slidimage5)}
              src={slidimage5}
              alt=""
            />
            <div className="text">
              <h2>Oturakçı Pazarı</h2>
              <p>Adıyaman’da Alışveriş</p>
            </div>
          </div>
        </div>
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
