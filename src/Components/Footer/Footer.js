import { useTranslation } from 'react-i18next';
import './Footer.css';
import React, { useEffect } from 'react';
const Footer = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const menu = document.querySelector('.menu-footer');
    const toggle = document.querySelector('.toggle');

    const handleToggleClick = () => {
      menu.classList.toggle('active');
    };

    toggle.addEventListener('click', handleToggleClick);
    return () => {
      toggle.removeEventListener('click', handleToggleClick);
    };
  }, []);
  return (
    <>
      <div className="footer-body">
        <p className="footer-h3">{t('anasayfa.footerSection')}</p>
        <div className="menu-footer">
          <div className="toggle">
            <ion-icon name="share-social"></ion-icon>
          </div>

          <ul className="ul-menu">
            <li style={{ '--i': 1 }}>
              <a href="https://www.facebook.com/AdiyamanBelTR" target="blank">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li style={{ '--i': 2 }}>
              <a href="https://twitter.com/adiyamanbeltr" target="blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  fill="var(--primary-color)"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
            </li>
            <li style={{ '--i': 0 }}>
              <a
                href="https://www.linkedin.com/in/ad%C4%B1yaman-belediyesi-a80816183"
                target="blank"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li style={{ '--i': 6 }}>
              <a href="https://www.instagram.com/adiyamanbeltr" target="blank">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li style={{ '--i': 7 }}>
              <a
                href="https://www.youtube.com/@AdiyamanBelediyeTv"
                target="blank"
              >
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
