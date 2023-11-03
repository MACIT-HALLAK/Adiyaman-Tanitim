import { useTranslation } from 'react-i18next';
import './Statistics.css';
import React, { useState, useEffect, useRef } from 'react';

const Statistics = () => {
  const { t } = useTranslation();
  const [population, setPopulation] = useState(0);
  const [malePopulation, setMalePopulation] = useState(0);
  const [femalePopulation, setFemalePopulation] = useState(0);
  
  
  const Statistics_line1Ref = useRef(null);
  const Statistics_line2Ref = useRef(null);
  const Statistics_line3Ref = useRef(null);

  useEffect(() => {
    const targetPopulation = 635169;
    const targetMalePopulation = 320177;
    const targetFemalePopulation = 314992;
    const duration = 2000;
    const scrollThreshold = 150;

    let startTimestamp;
    let requestId;

    const updatePopulations = (timestamp) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const elapsedTime = timestamp - startTimestamp;
      const nextPopulation = Math.min(
        Math.ceil((elapsedTime / duration) * targetPopulation),
        targetPopulation
      );
      const nextMalePopulation = Math.min(
        Math.ceil((elapsedTime / duration) * targetMalePopulation),
        targetMalePopulation
      );
      const nextFemalePopulation = Math.min(
        Math.ceil((elapsedTime / duration) * targetFemalePopulation),
        targetFemalePopulation
      );

      setPopulation(nextPopulation);
      setMalePopulation(nextMalePopulation);
      setFemalePopulation(nextFemalePopulation);

      if (nextPopulation < targetPopulation) {
        requestId = requestAnimationFrame(updatePopulations);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        requestId = requestAnimationFrame(updatePopulations);
        if (Statistics_line1Ref.current) {
          Statistics_line1Ref.current.style.display = 'block';
        }
        if (Statistics_line2Ref.current) {
          Statistics_line2Ref.current.style.display = 'block';
        }
        if (Statistics_line3Ref.current) {
          Statistics_line3Ref.current.style.display = 'block';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Statistics">
      <div>
        {t('anasayfa.istatistic.nufusSayisi')}
        <div className="statistics-line-1" ref={Statistics_line1Ref}></div>
        <span>{population.toLocaleString()}</span>
      </div>

      <div>
        {t('anasayfa.istatistic.erkekSayisi')}
        <div className="statistics-line-2" ref={Statistics_line2Ref}></div>
        <span>{malePopulation.toLocaleString()}</span>
      </div>

      <div>
        {t('anasayfa.istatistic.kadinSayisi')}
        <div className="statistics-line-3" ref={Statistics_line3Ref}></div>
        <span>{femalePopulation.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default Statistics;
