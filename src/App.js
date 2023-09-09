import './App.css';
import ImageGallery from './Components/Slider/ImageGallery/ImageGallery';
import Slider from './Components/Slider/Slider';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import TitleCom from './Components/Slider/TitleCom/TitleCom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Content/>
        <TitleCom />
        <ImageGallery />
      </header>
    </div>
  );
}

export default App;
