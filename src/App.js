import './App.css';
import ImageGallery from './Components/Slider/ImageGallery/ImageGallery';
import Slider from './Components/Slider/Slider';
import TitleCom from './Components/Slider/TitleCom/TitleCom';

function App() {
  return (
    <div className="App">
     <TitleCom />
     <ImageGallery />
    </div>
  );
}

export default App;
