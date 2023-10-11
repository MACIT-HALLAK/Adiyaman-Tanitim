import React, { useEffect, useState } from 'react';
import './LangCom.css';
import { useTranslation } from 'react-i18next';
const LangCom = () => {
  const { i18n } = useTranslation();
  const lang = navigator.language;
  const changeLanguage = (lang) => {
    localStorage.setItem('lang', lang || 'tr');
    i18n.changeLanguage(lang || 'tr');
  };
  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      className="languages"
    >
      <option value="tr" selected={lang === 'tr' ? true : false}>
        TR
      </option>
      <option value="en" selected={lang === 'en' ? true : false}>
        EN
      </option>
    </select>
  );
};

export default LangCom;
