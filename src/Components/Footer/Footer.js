import './Footer.css';
import React, { useState, useEffect } from 'react';


const Footer = () => {
    useEffect(() => {
        const menu = document.querySelector(".menu");
        const toggle = document.querySelector(".toggle");
        
        const handleToggleClick = () => {
        menu.classList.toggle("active");
        };
        
        toggle.addEventListener("click", handleToggleClick);
        return () => {
        toggle.removeEventListener("click", handleToggleClick);
        };
    }, []);
return (
    <>
    <div className='footer-body'>
        <h3 className='footer-h3'>Adıyaman, Adıyaman ili'nin merkez ilçesi ve aynı ilçedeki şehirdir.Türkiye'nin Güneydoğu Anadolu Bölgesi'nde Fırat Nehri'nin batısında yer almaktadır.</h3>
    <div className="menu">
        <div className="toggle">
        <ion-icon name="share-social"></ion-icon>
        </div>

        <ul className='ul-menu'>
            <li style={{ '--i': 1, '--clr': '#1877f2' }}>
            <a href="https://www.facebook.com/AdiyamanBelTR">
            <ion-icon name="logo-facebook"></ion-icon>
            </a>
            </li>
            <li style={{ '--i': 10, '--clr': '#1da1f2' }}>
            <a href="https://twitter.com/adiyamanbeltr">
            <ion-icon name="logo-twitter"></ion-icon>
            </a>
            </li>
            <li style={{ '--i': 0, '--clr': '#0a66c2' }}>
            <a href="https://www.linkedin.com/in/ad%C4%B1yaman-belediyesi-a80816183">
            <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            </li>
            <li style={{ '--i': 4, '--clr': '#c32aa3' }}>
            <a href="https://www.instagram.com/adiyamanbeltr">
            <ion-icon name="logo-instagram"></ion-icon>
            </a>
            </li>
            <li style={{ '--i': 3, '--clr': '#ff0000' }}>
            <a href="https://www.youtube.com/@AdiyamanBelediyeTv">
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
