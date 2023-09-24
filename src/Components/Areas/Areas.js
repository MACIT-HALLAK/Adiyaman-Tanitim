import './Areas.css';
import Navber from '../Navbar/Navbar';
import image from '../../Assets/images/r.jpg';
import image1 from '../../Assets/images/ww.jpg';
import image2 from '../../Assets/images/www.JPG';
import image3 from '../../Assets/images/wwwww.webp';

import 'react-lazy-load-image-component/src/effects/blur.css';
import React, { Suspense } from 'react';

const ImgComponent = React.lazy(() =>
  import('../skeletons/SideImagesComponent')
);

const data = [
  {
    title: 'Cendere Köprüsü',
    desc: 'Roma hükümdarı Septimus Severus tarafından inşaa ettirilen yapı Anadolu’nun en eski köprülerinden biridir. Köprünün en önemli özelliklerinden biri 120 metre uzunluğundaki köprüde hiç çimento kullanılmamış olması. Cendere Çayı üzerine yapılan köprü, Adıyaman’ın Kahta ile Sincik ilçelerini birbirine bağlıyor.',
    img: image,
  },
  {
    title: 'Perre Antik Kenti',
    desc: 'Kommagene İmparatorluğu’nun bıraktığı yazıtlarda bahsedilen antik kentlerden biri olan Perre zengin su kaynaklarına sahip olmasıyla ün kazanmış. Şehrin kale duvarlarının birçoğu da hala mevcut. Roma İmparatorluğu’nun bu şehre kattığı Roma Çeşmesi de dönemin durak yerlerinden biri olan şehre dağları aşarak yolculuk ulaşmaya çalışanlar için mükemmel bir imkan yaratmış. Antik kente, şehir merkezine sadece 4 km uzaklıkta olmasıyla çok kolay bir şekilde ulaşılabilir.',
    img: image1,
  },
  {
    title: 'Eski Besni Harabeleri',
    desc: 'Besni, yüzyıllar boyunca birçok medeniyete ev sahipliği yapmış ve sanayi ve ticaret kenti olarak da tanınmıştır. Besni Kalesi’yle de beraber şehir korunaklı kalmış; sulak ve ormanlık arazi varlığıyla zengin bir yerleşim yeri olarak görülmüştür. Besni ilçesinin 4-5 km güneyinde bulunan Eski Besni Ören Yeri, Besni Kalesi’ni bütünleyen Ulu Camii, Külhanönü Camii, Tokatmış Camii gibi cami ve minareler, Bekir Bey Külliyesi’nden kalan hamam ve çeşme ile diğer külliye, köprü ve çarşı kalıntılarıyla oldukça çekici bir görünüme sahiptir.',
    img: image2,
  },
  {
    title: 'Yüzen Adalar',
    desc: 'Adıyaman’ın Çelikhan ilçesinde bulunan Çat Barajı’nda farklı büyüklüklerde onlarca yüzen ada bulunuyor. Sürekli şekil, boyut ve yer değiştiren bu küçük adacıkların binlerce yılda oluştuğu düşünülüyor. Adacıkların bir kısmı kıyaya vurarak artık hareket edemez oluyor.',
    img: image3,
  },
];

const Areas = () => {
  return (
    <div className="areas-layout">
      <Navber />
      <div className="main-content">
        <h2>Adiyamanda gezilecek Alanlar</h2>
        <div className="areas-navigation">
          {data?.map((item, index) => (
            <div key={index + 1}>
              <a href={`#${item.title}`}>{item.title}</a>
            </div>
          ))}
        </div>
        <div className="areas-content">
          {data?.map((item, index) => (
            <div className="areas-card" key={index + 1}>
              <Suspense fallback={<div className="skeleton-side-images"></div>}>
                <ImgComponent imgSrc={item.img} />
              </Suspense>
              <div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="areas-section"></div>
    </div>
  );
};

export default Areas;
