import React, { useEffect, useState } from 'react';

const LangCom = ({ changeLanguage }) => {
  const [selectLng, setSelectLng] = useState('');
  useEffect(() => {
    const localLanguage = localStorage.getItem('lang');
    if (localLanguage) setSelectLng(localLanguage || 'tr');
  }, []);
  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      className="languages"
    >
      <option value="tr" selected={selectLng === 'tr' ? true : false}>
        TR
      </option>
      <option value="en" selected={selectLng === 'en' ? true : false}>
        EN
      </option>
    </select>
  );
};

export default LangCom;
