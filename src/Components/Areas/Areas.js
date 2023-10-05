import './Areas.css';
import Navber from '../Navbar/Navbar';
import { data } from './Data';

import 'react-lazy-load-image-component/src/effects/blur.css';
import React, { Suspense } from 'react';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import useDocumentTitle from '../../Hooks/useDocumentTitle';

const ImgComponent = React.lazy(() =>
  import('../skeletons/SideImagesComponent')
);

const Areas = () => {
  useDocumentTitle('İnanç Turizim Merkezleri');

  return (
    <>
      <Navber />
      <div className="areas-layout">
        <div className="main-content">
          <h2>ADIYAMAN’ DA İNANÇ TURİZM MERKEZLERİ</h2>
          <div className="areas-navigation">
            {data?.map((item, index) => (
              <div key={index + 1}>
                <a href={`#i${index}`}>{item.title}</a>
              </div>
            ))}
          </div>
          <div className="areas-content">
            {data?.map((item, index) => (
              <div id={`i${index}`} className="areas-card" key={index + 1}>
                <Suspense
                  fallback={<div className="skeleton-side-images"></div>}
                >
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
        <ScrollToTop />
      </div>
    </>
  );
};

export default Areas;
