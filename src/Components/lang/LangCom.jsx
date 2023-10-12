import i18n from '../../i18n';
import './LangCom.css';
const LangCom = ({ setFlag }) => {
  const lang = localStorage.getItem('lang');
  const changing = (lang) => {
    localStorage.setItem('lang', lang || 'tr');
    i18n.changeLanguage(lang);
    setFlag(lang);
  };
  return (
    <select onChange={(e) => changing(e.target.value)} className="languages">
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
