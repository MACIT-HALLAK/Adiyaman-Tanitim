import React, { useState } from 'react';
import './ScrollToTop.css';
import { FaAngleDoubleUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Sayfanın scroll pozisyonunu kontrol eden bir event listener ekleme
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Sayfanın en üstüne kaydıran bir işlev
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Yumuşak kaydırma efekti
    });
  };

  // Scroll pozisyonunu dinlemek için event listener ekleme
  window.addEventListener('scroll', handleScroll);

  return (
    <div>
      {isVisible && (
        <button
          className="scroll-top-button"
          onClick={scrollToTop}
          data-width="100px"
        >
          <FaAngleDoubleUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
