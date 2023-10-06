import './Navbar.css';
import React, { useState, useRef } from 'react';
import logo from '../../Assets/images/logo/adiyaman-logo.jpg';
import { Link, NavLink } from 'react-router-dom';
import slidimage1 from '../../Assets/images/logoAdiyaman.jpeg';
import slidimage2 from '../../Assets/images/TTB_logo.jpeg';
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
      e.currentTarget.classList.add('active');
    });
  });
  return (
    <>
      <div className="container">
        <div className="nav-logo">
          <div className="container-logo">
            <img
              className="footer-img2 nav-img hide-img"
              src={slidimage2}
              alt="footer-img2"
            />
            <img
              className="footer-img1 nav-img hide-img"
              src={slidimage1}
              alt="footer-img1"
            />
            <img className="adiyaman-logo" src={logo} alt="logo" />
          </div>
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
              to="/Hakkinda"
            >
              Hakkında
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
