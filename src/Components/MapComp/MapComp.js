import './MapComp.css';
import map from '../../Assets/images/map.png';
import GoogleMap from '../GoogleMap/GoogleMap.js';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MapComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="mapcomp-layout">
        <div className="mapcomp-text">
          <p style={{ textTransform: 'capitalize' }}>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav__link__active' : ''
              }
              to="/Videos"
            >
              Adıyaman'ı Keşfetmeye Hazır mısınız?
            </NavLink>
          </p>
        </div>
        <div>
          <div>
            <img src={map} alt="" />
          </div>

          <div className="card-img-overlay">
            <button onClick={openModal}>TIKLAYINIZ</button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2>Adıyaman</h2>
              <GoogleMap />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MapComp;
