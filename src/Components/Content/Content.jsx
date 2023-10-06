import './Content.css';
import React, { useState, useEffect, useRef, Suspense } from 'react';

import slidimage1 from '../../Assets/images/slider1.jpeg';
import slidimage2 from '../../Assets/images/slider2.jpeg';
import slidimage3 from '../../Assets/images/slider3.jpeg';
import slidimage4 from '../../Assets/images/slider4.jpeg';
import slidimage5 from '../../Assets/images/slider5.jpeg';
import slidimage6 from '../../Assets/images/slider6.jpeg';
import slidimage7 from '../../Assets/images/slider7.jpeg';
import slidimage8 from '../../Assets/images/slider8.jpeg';
import slidimage9 from '../../Assets/images/slider9.jpeg';
import slidimage10 from '../../Assets/images/slider10.jpeg';
import slidimage11 from '../../Assets/images/slider11.jpeg';
import slidimage12 from '../../Assets/images/slider12.jpeg';
import slidimage13 from '../../Assets/images/slider13.jpeg';
import slidimage14 from '../../Assets/images/slider14.jpeg';
import slidimage15 from '../../Assets/images/slider15.jpeg';
import slidimage16 from '../../Assets/images/slider16.jpeg';
import slidimage17 from '../../Assets/images/slider17.jpeg';
import slidimage18 from '../../Assets/images/slider18.jpeg';
import { Link } from 'react-router-dom';

const ImageComponent = React.lazy(() => import('../skeletons/ImageComponent'));

const Content = () => {
  const indicator = useRef();
  const [isPending, setIsPending] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    slidimage1,
    slidimage2,
    slidimage3,
    slidimage4,
    slidimage5,
    slidimage6,
    slidimage7,
    slidimage8,
    slidimage9,
    slidimage10,
    slidimage11,
    slidimage12,
    slidimage13,
    slidimage14,
    slidimage15,
    slidimage16,
    slidimage17,
    slidimage18,
  ];
  const delay1 = 5000; // 10 saniye

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPending(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay1);

    return () => clearInterval(interval);
  }, []);

  const [text, setText] = useState('');
  const sentence = 'AADIYAMAN ŞEHRINE HOŞ GELDINIZ';
  const delay = 100;

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex === sentence.length - 1) {
        clearInterval(interval);
        indicator.current.style.display = 'none';
        setTimeout(() => {
          let deleteIndex = sentence.length;
          const deleteInterval = setInterval(() => {
            if (deleteIndex === 1) {
              clearInterval(deleteInterval);
            }
          }, delay);
        }, 1000);
      } else {
        setText((prevText) => prevText + sentence[currentIndex]);
        currentIndex++;
      }
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="content" style={{ position: 'relative' }}>
        <div className="content-center">
          <h2 className="content-title">
            {text}
            <span className="typing-indicator" ref={indicator}>
              _
            </span>
          </h2>
          <p className="desc">
            Adıyaman'daki tarihi ve arkeolojik alanları tanıtmak için
            oluşturulmuş bir platformdur. Bu web sitesi, bölgedeki tarihi
            zenginlikleri ve kültürel mirası ziyaretçilere tanıtmayı amaçlar.
          </p>
          <button className="content-btn">
            <Link to={'/Videos'}>Şimdi Keşfet</Link>
          </button>
        </div>
        <Suspense fallback={<div className="skeleton-image"></div>}>
          <ImageComponent
            images={images}
            currentImageIndex={currentImageIndex}
          />
        </Suspense>
      </div>
    </>
  );
};

export default Content;
