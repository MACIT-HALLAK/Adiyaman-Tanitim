import './App.css';
import ImageGallery from './Components/Slider/ImageGallery/ImageGallery';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import TitleCom from './Components/Slider/TitleCom/TitleCom';
import Statistics from './Components/Statistics/Statistics';
import Footer from './Components/Footer/Footer';
import MapComp from './Components/MapComp/MapComp';
import Map from './Components/Map/Map';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import useDocumentTitle from './Hooks/useDocumentTitle';
import { useTranslation, Trans } from 'react-i18next';
import { useEffect, useState } from 'react';
import LangCom from './Components/lang/LangCom';

function App() {
  useDocumentTitle('Ana Sayfa');
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Content />
        <Statistics />
        <Map />
        <TitleCom />
        <ImageGallery />
        <MapComp />
        <Footer />
      </header>
      <ScrollToTop />
    </div>
  );
}

export default App;
