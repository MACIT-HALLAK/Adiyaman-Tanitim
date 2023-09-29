import './MosquesPage.css';
import Navber from '../Navbar/Navbar';
import image from '../../Assets/images/cami3.jpg';
import image1 from '../../Assets/images/cami4.png';
import 'react-lazy-load-image-component/src/effects/blur.css';
import React, { Suspense } from 'react';
import Video from '../Video/Video';

const ImgComponent = React.lazy(() =>
  import('../skeletons/SideImagesComponent')
);

const MosquesPage = () => {
  const data = [
    {
      title: 'Ulu Cami',
      desc: 'Adıyaman’ın şehir merkezinde bulunmaktadır. Dulkadiroğulları Beyliği zamanında yapılan camii daha sonraları birçok kez onarım görmüştür. Caminin bu günkü şekliyle 1863 tarihinde yaptırıldığını bildiren bir kitabe, minare kaidesinin doğuya bakan üst yüzeyinde bulunmaktadır. Aynı yerde altta kemer içinde bulunan bir başka kitabede caminin 1902 yılında tamir gördüğü anlaşılmaktadır.',
      img: image,
    },
    {
      title: 'Çarşı Cami',
      desc: ' Eski Besni’nin en merkezi yerinde yer alan Çarşı camii adı ile anılır. Bazı kimselere göre camii, Hacı Arslan isminde birisi tarafından yaptırılmıştır. Fakat üzerindeki kitabede Kalaunoğlu Mehmet Nasır ismi geçmektedir. Bunun Mısır Kölemen sultanlarından Kalaun ile ne derece ilişkili olduğu bilinmemektedir. Mahalli geleneğe uygun olarak yapılmış olan camiinin muntazam bir planı bulunmaktadır.',
      img: image1,
    },
  ];
  return (
    <div className="mosque-layout">
      <Navber />
      <div className="main-content">
        <h2>Adiyamanda gezilecek Camiler</h2>
        <div className="mosque-navigation">
          {data?.map((item, index) => (
            <div key={index + 1}>
              <a href={`#a${index}`}>{item.title}</a>
            </div>
          ))}
        </div>
        <div className="mosque-content">
          {data?.map((item, index) => (
            <div id={`a${index}`} key={index + 1} className="mosque-card">
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
      <div className="mosque-section"></div>
    </div>
  );
};

export default MosquesPage;
