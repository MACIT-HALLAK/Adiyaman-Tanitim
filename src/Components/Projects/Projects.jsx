import './Projects.css';
import Navbar from '../Navbar/Navbar';
import zigzak from '../../Assets/images/zigzag.png';
import useDocumentTitle from '../../Hooks/useDocumentTitle';
import logoImg from '../../Assets/images/logo/adiyaman-logo.png';
import mainImg from '../../Assets/images/hakkinda/main-image-second.jpg';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  useDocumentTitle('Hakkında');

  return (
    <>
      <div className="project-container">
        <div className="project-content">
          <div className="project-title-wrapper">
            <h1>{t('hakkinda.hedef')}</h1>
          </div>
          <div className="project-img">
            <img src={zigzak} alt="zigzak" />
          </div>
          <p>
            {t('hakkinda.content.section1')}
            <hr />
            {t('hakkinda.content.section2')}
            <hr />
            {t('hakkinda.content.section3')}
            <hr />
            {t('hakkinda.content.section4')}
            <hr />
            {t('hakkinda.content.section5')}
            <hr />
            {t('hakkinda.content.section6')}
            <hr />
          </p>
        </div>
        <div className="side-content">
          {/* <img
            src={logoImg}
            alt="discover adıyaman"
            width={100}
            height={100}
            className="proj-logo-img"
            srcSet=""
          /> */}
          <img
            src={mainImg}
            className="main-image"
            alt="adıyaman pricture"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
