import React from 'react';
import './TitleCom.css';
import { useTranslation } from 'react-i18next';

const TitleCom = () => {
  const { t } = useTranslation();
  return (
    <div className="title-com">
      <h1>{t('anasayfa.gallery.header.mainTitle')}</h1>
      <p>{t('anasayfa.gallery.header.title')}</p>
    </div>
  );
};

export default TitleCom;
