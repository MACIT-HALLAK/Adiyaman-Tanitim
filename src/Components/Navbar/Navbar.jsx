import './Navbar.css';
import React, { useEffect, useRef } from 'react';
import logo from '../../Assets/images/logo/adiyaman-logo.jpg';
import { NavLink } from 'react-router-dom';
import slidimage1 from '../../Assets/images/logoAdiyaman.jpeg';
import slidimage2 from '../../Assets/images/TTB_logo.jpeg';
import slidimage3 from '../../Assets/images/ktb_logo_.png';
import LangCom from '../lang/LangCom';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
const Navbar = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const lang = localStorage.getItem('lang');
    if (lang) {
      i18n.changeLanguage(lang || 'tr');
    }
  }, []);
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
            <div className="logo-img-con hide-img">
              {' '}
              <a href="https://www.tbb.gov.tr/Tr/" target="_blank">
                <img
                  className="footer-img2 nav-img "
                  src={slidimage2}
                  alt="footer-img2"
                />
              </a>
            </div>
            <div className="logo-img-con hide-img">
              <a href="https://ww.adiyaman.bel.tr/" target="_blank">
                <img
                  className="footer-img1 nav-img "
                  src={slidimage1}
                  alt="footer-img1"
                />
              </a>
            </div>
            <div className="logo-img-con hide-img">
              <a href="https://adiyaman.ktb.gov.tr/" target="_blank">
                <img
                  className="footer-img1 nav-img "
                  src={slidimage3}
                  alt="footer-img1"
                />
              </a>
            </div>
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
              {t('anasayfa.navbar.ana')}
            </NavLink>
          </li>
          <li className="alanlar">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav__link__active' : ''
              }
              to="/Areas"
            >
              {t('anasayfa.navbar.inanc')}
            </NavLink>
          </li>
          <li className="videos">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav__link__active' : ''
              }
              to="/Videos"
            >
              {t('anasayfa.navbar.rotalar')}
            </NavLink>
          </li>
          <li className="projeler">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav__link__active' : ''
              }
              to="/Hakkinda"
            >
              {t('anasayfa.navbar.hakkinda')}
            </NavLink>
          </li>
          <li className="bize-ulasin">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav__link__active' : ''
              }
              to="/ContactUs"
            >
              {t('contact.title')}
            </NavLink>
          </li>
          <li className="lng">
            <LangCom />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
