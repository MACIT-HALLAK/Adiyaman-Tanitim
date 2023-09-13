import './App.css';
import ImageGallery from './Components/Slider/ImageGallery/ImageGallery';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import TitleCom from './Components/Slider/TitleCom/TitleCom';
import Statistics from './Components/Statistics/Statistics';
import Footer from './Components/Footer/Footer';
import MapComp from './Components/MapComp/MapComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Content />
        <Statistics />
        <TitleCom />
        <ImageGallery />
        <MapComp />
        <Footer />
      </header>
    </div>
  );
}

export default App;
