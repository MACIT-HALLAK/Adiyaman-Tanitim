import { useTranslation } from 'react-i18next';
import './Statistics.css';
import React, { useState, useEffect } from 'react';

const Statistics = () => {
  const { t } = useTranslation();
  const [population, setPopulation] = useState(0);
  const [malePopulation, setMalePopulation] = useState(0);
  const [femalePopulation, setFemalePopulation] = useState(0);
  let Statistics_line1 = document.querySelector('.statistics-line-1');
  let Statistics_line2 = document.querySelector('.statistics-line-2');
  let Statistics_line3 = document.querySelector('.statistics-line-3');

  useEffect(() => {
    const targetPopulation = 635169;
    const targetMalePopulation = 320177;
    const targetFemalePopulation = 314992;
    const duration = 2000; // 2 saniye

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
      if (window.scrollY > 155) {
        requestId = requestAnimationFrame(updatePopulations);
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
  if (window.scrollY > 155) {
    Statistics_line1.style.display = 'block';
    Statistics_line2.style.display = 'block';
    Statistics_line3.style.display = 'block';
  }

  return (
    <div className="Statistics">
      <div>
        {t('anasayfa.istatistic.nufusSayisi')}
        <div className="statistics-line-1"></div>
        <span>{population.toLocaleString()}</span>
      </div>

      <div>
        {t('anasayfa.istatistic.erkekSayisi')}
        <div className="statistics-line-2"></div>
        <span>{malePopulation.toLocaleString()}</span>
      </div>

      <div>
        {t('anasayfa.istatistic.kadinSayisi')}
        <div className="statistics-line-3"></div>
        <span>{femalePopulation.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default Statistics;
