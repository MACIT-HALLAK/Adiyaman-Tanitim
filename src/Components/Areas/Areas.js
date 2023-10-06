import './Areas.css';
import Navber from '../Navbar/Navbar';
import { data } from './Data';
import 'react-lazy-load-image-component/src/effects/blur.css';
import React, { Suspense, useState } from 'react'; // Import useState
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import useDocumentTitle from '../../Hooks/useDocumentTitle';

const ImgComponent = React.lazy(() =>
  import('../skeletons/SideImagesComponent')
);

const Areas = () => {
  const [selectedData, setSelectedData] = useState(data[0]);

  useDocumentTitle('İnanç Turizim Merkezleri');

  const handleLinkClick = (index) => {
    setSelectedData(data[index]);
  };

  return (
    <>
      <Navber />
      <div className="areas-layout">
        <div className="main-content">
          <p> İnanç Turizmi Merkezleri</p>
          <div className="areas-navigation">
            {data?.map((item, index) => (
              <div key={index + 1}>
                <a href={`#i${index}`} onClick={() => handleLinkClick(index)}>
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="areas-section">
          <h3 className='areas-h3'>{selectedData.title.slice(1,)}</h3>
          <img className='areas-img' src={selectedData.img} alt={selectedData.title} />
          <div className='areas-decs' >{selectedData.desc}</div>
        </div>
        <ScrollToTop />
      </div>
    </>
  );
};

export default Areas;
