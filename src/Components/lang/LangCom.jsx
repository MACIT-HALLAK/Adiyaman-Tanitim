import React, { useCallback, useEffect, useRef, useState } from 'react';
import './LangCom.css';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
const LangCom = () => {
  const switcher = useRef();
  const lang = localStorage.getItem('lang');
  useEffect(() => {
    const lang = localStorage.getItem('lang');
    if (!lang) {
      i18n.changeLanguage('tr');
    }
  }, [i18n]);
  const changeLanguage = useCallback(() => {
    const lang = switcher.current.getAttribute('data-language');
    localStorage.setItem('lang', lang || 'tr');
    i18n.changeLanguage(lang);
  }, [lang]);
  return (
    <>
      {/* <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="languages"
      >
        <option value="tr" selected={lang === 'tr' ? true : false}>
          TR
        </option>
        <option value="en" selected={lang === 'en' ? true : false}>
          EN
        </option>
      </select> */}
      <div
        className={` themesCon languages`}
        style={{ paddingBlock: '15px', borderRadius: '20px' }}
      >
        <div
          className={` ${
            lang === 'tr' ? `isActive` : ``
          } themesEle tr__language`}
          onClick={(e) => changeLanguage(e)}
        >
          TR
        </div>
        <div
          className={` ${
            lang === 'en' ? `isActive` : ``
          } themesEle en__language`}
          onClick={(e) => changeLanguage(e)}
        >
          EN
        </div>
        <div
          className="switcher"
          onClick={changeLanguage}
          data-language={lang === 'tr' ? 'en' : 'tr'}
          ref={switcher}
        ></div>
      </div>
    </>
  );
};

export default LangCom;
