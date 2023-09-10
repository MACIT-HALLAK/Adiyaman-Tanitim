import './Navbar.css';
import React, { useState, useEffect } from 'react';
import logo from '../../Assets/images/ADIYAMANLogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let lis = document.querySelectorAll("ul li");
    lis.forEach((li) => {
        li.addEventListener("mouseleave", () => {
            li.classList.remove("active");
        });
        li.addEventListener("mouseenter", (e) => {
            lis.forEach((li) => {
            li.classList.remove("active");
        });
          // Add Active Class To Current Element
        e.currentTarget.classList.add("active");
        
        });
    });
    return (
        <>
        
        <div className='container'>
            <div className='nav-logo'>
                <img className='adiyaman-logo' src={logo}/>
            </div>
            <ul className='nav-items'>
                <li className='anasayfa '>
                    Anasayfa
                    <div></div>
                </li>
                <li className='camiler'>
                Camiler
                    <Link to='/MosquesPage' ></Link>
                    <div></div>
                </li>
                <li className='alanlar'>
                    Alanlar
                    <div></div>
                </li>
                <li className='iletisim'>
                    iletişim
                    <div></div>
                </li>
            </ul>
        </div>
       
        </>
    );

}

export default Navbar