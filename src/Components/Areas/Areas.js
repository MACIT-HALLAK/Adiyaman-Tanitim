import './Areas.css';
import Navber from '../Navbar/Navbar';
import { data } from './Data';
import 'react-lazy-load-image-component/src/effects/blur.css';
import React, { useState, useEffect } from 'react';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import useDocumentTitle from '../../Hooks/useDocumentTitle';

const Areas = () => {
  const [selectedData, setSelectedData] = useState(data[0]);
  const [boldIndex, setBoldIndex] = useState(0); // Initialize with 0

  useDocumentTitle('İnanç Turizim Merkezleri');

  const handleLinkClick = (index) => {
    setSelectedData(data[index]);
    setBoldIndex(index);
  };

  useEffect(() => {
    // Set the first link to be bold on initial load (when component mounts)
    setBoldIndex(0);
  }, []); // Empty dependency array to run this effect only once

  return (
    <>
      <Navber />
      <div className="areas-layout">
        <div className="main-content">
          <p
            style={{
              color: 'var(--primary-color)',
              fontSize: '1.75rem',
              fontWeight: '600',
            }}
          >
            İnanç Turizmi Merkezleri
          </p>
          <div className="areas-navigation">
            {data?.map((item, index) => (
              <div key={index + 1}>
                <a
                  href={`#i${index}`}
                  onClick={() => handleLinkClick(index)}
                  className={index === boldIndex ? 'bold-text' : ''}
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="areas-section">
          <h3 className="areas-h3" style={{ color: 'var(--primary-color)' }}>
            {selectedData.title.slice(1)}
          </h3>
          <div className="areas-div">
            <img
              className="areas-img"
              src={selectedData.img}
              alt={selectedData.title}
            />
          </div>

          <div className="areas-decs">{selectedData.desc}</div>
        </div>
        <ScrollToTop />
      </div>
    </>
  );
};

export default Areas;
