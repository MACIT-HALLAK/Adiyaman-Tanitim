import './Slider.css';
import React, { useState } from 'react';
import slidimage1 from '../../Assets/images/slider1.jpg';
import slidimage2 from '../../Assets/images/slider2.avif';
import slidimage3 from '../../Assets/images/slider3.jpeg';
import slidimage4 from '../../Assets/images/slider4.jpeg';
import slidimage5 from '../../Assets/images/slider5.jpg';


const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        slidimage1,
        slidimage2,
        slidimage3,
        slidimage4,
        slidimage5
    ];
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="slider">
        <div className="slider-container">
          <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        </div>
        <button onClick={prevSlide} className="arrow left-arrow">
          &lt;
        </button>
        <button onClick={nextSlide} className="arrow right-arrow">
          &gt;
        </button>
      </div>
    );
  
}

export default Slider