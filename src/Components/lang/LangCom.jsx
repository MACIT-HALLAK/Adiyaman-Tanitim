import React, { useCallback, useEffect, useState } from 'react';
import './LangCom.css';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
const LangCom = () => {
  const lang = localStorage.getItem('lang');
  const changeLanguage = useCallback(
    (lang) => {
      localStorage.setItem('lang', lang || 'tr');
      i18n.changeLanguage(lang);
    },
    [lang]
  );
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
