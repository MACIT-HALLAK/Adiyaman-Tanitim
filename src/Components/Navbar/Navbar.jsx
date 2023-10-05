import './Navbar.css';
import React, { useState, useRef } from 'react';
import logo from '../../Assets/images/ADIYAMANLogo.png';
import { Link, NavLink } from 'react-router-dom';

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
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav__link__active' : ''
              }
              to={'/'}
            >
              Anasayfa
            </NavLink>
          </li>
          {/* <li className="camiler">
            <NavLink to="/MosquesPage">Camiler</NavLink>
          </li> */}
          <li className="alanlar">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav__link__active' : ''
              }
              to="/Areas"
            >
              Inanç Turizm Merkezleri
            </NavLink>
          </li>
          <li className="videos">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav__link__active' : ''
              }
              to="/Videos"
            >
              Rotalar
            </NavLink>
          </li>
          <li className="projeler">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav__link__active' : ''
              }
              to="/Projects"
            >
              Projeler
            </NavLink>
          </li>
          {/* <li className="iletisim">iletişim</li> */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
