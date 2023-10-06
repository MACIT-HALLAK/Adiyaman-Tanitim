import { useState, useEffect, useRef } from 'react';

const TypeWriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const indicator = useRef();

  useEffect(() => {
    let timeout;

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        if (currentIndex === text.length) {
          setTimeout(() => {
            indicator.current.style.display = 'none';
          }, 500);
        }
      }, delay);
    } else {
      setCurrentText(text);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);

  return (
    <>
      <span>{currentText}</span>
      <span className="typing-indicator" ref={indicator}>
        _
      </span>
    </>
  );
};

export default TypeWriter;
