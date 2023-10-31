import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import ImageGallery from '../Slider/ImageGallery/ImageGallery';
import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';
import TitleCom from '../Slider/TitleCom/TitleCom';
import Statistics from '../Statistics/Statistics';
import Footer from '../Footer/Footer';
import MapComp from '../MapComp/MapComp';
import Map from '../Map/Map';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import useDocumentTitle from '../../Hooks/useDocumentTitle';
import i18n from '../../i18n';
import Image from '../Image/Image';

const Home = () => {
  useEffect(() => {
    const lang = localStorage.getItem('lang');
    if (!lang) {
      i18n.changeLanguage(lang || 'tr');
    }
  }, []);
  useDocumentTitle('Ana Sayfa');
  return (
    <div className="App">
      <header className="App-header">
        <Content />
        <Statistics />
        {/* <Map /> */}
        <Image />
        <TitleCom />
        <ImageGallery />
        <MapComp />
      </header>
      <ScrollToTop />
    </div>
  );
};

export default Home;
