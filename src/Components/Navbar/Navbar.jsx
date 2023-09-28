import './Navbar.css';
import React, { useState, useRef } from 'react';
import logo from '../../Assets/images/ADIYAMANLogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menu = useRef();
  const nav_items = useRef();

  const showMenu = () => {
    nav_items.current.classList.toggle('sr-only');
    menu.current.classList.toggle('hide');
  };
  let lis = document.querySelectorAll('ul li');
  lis.forEach((li) => {
    li.addEventListener('mouseleave', () => {
      li.classList.remove('active');
    });
    li.addEventListener('mouseenter', (e) => {
      lis.forEach((li) => {
        li.classList.remove('active');
      });
      // Add Active Class To Current Element
      e.currentTarget.classList.add('active');
    });
  });
  return (
    <>
      <div className="container">
        <div className="nav-logo">
          <img className="adiyaman-logo" src={logo} alt="logo" />
        </div>
        <ul className="menu" onClick={showMenu} ref={menu}>
          <li className="menu_item"></li>
          <li className="menu_item"></li>
          <li className="menu_item"></li>
        </ul>
        <ul className="nav-items sr-only" ref={nav_items}>
          <li className="anasayfa ">
            <Link to={'/'}>Anasayfa</Link>
          </li>
          {/* <li className="camiler">
            <Link to="/MosquesPage">Camiler</Link>
          </li> */}
          <li className="alanlar">
            <Link to="/Areas">Inanç Turizm Merkezleri</Link>
          </li>
          <li className="videos">
            <Link to="/Videos">Rotalar</Link>
          </li>
          {/* <li className="iletisim">iletişim</li> */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
