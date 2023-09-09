import './App.css';
import Slider from './Components/Slider/Slider';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Content/>
      </header>
    </div>
  );
}

export default App;
