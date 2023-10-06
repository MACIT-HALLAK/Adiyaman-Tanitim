import './Projects.css';
import Navbar from '../Navbar/Navbar';
import zigzak from '../../Assets/images/zigzag.png';
import useDocumentTitle from '../../Hooks/useDocumentTitle';
import logoImg from '../../Assets/images/logo/adiyaman-logo.png';
import mainImg from '../../Assets/images/hakkinda/main-image.jpg';

const Projects = () => {
  useDocumentTitle('Projeler');

  return (
    <>
      <Navbar />
      <div className="project-container">
        <div className="project-content">
          <div className="project-title-wrapper">
            <h1>Projenin Hedef ve Amaçları</h1>
          </div>
          <div className="project-img">
            <img src={zigzak} alt="zigzak" />
          </div>
          <p>
            Projenin Hedef ve Amaçları Adıyaman başta inanç ve kültür turizmi
            olmak üzere spor, doğa, gastronomi, sağlık turizm türleri açısından
            oldukça büyük bir potansiyele sahiptir. İldeki tarihi yapılar
            insanlığın ilk çağlarından başlayarak günümüze kadar birçok
            medeniyetin izlerini taşımaktadır.
            <hr />
            Bölgede yaşayan eski çağ insanları ve sonrasında hâkimiyet kuran
            medeniyetler kendi dönemlerin inanç sistemi değerlerini eserlerine
            yansıtmışlardır. Örneğin Nemrut Dağı, Karakuş ve Sofraz tümülüsleri
            ile Pirin Kaya Mezarları dönemin inanç değerlerini günümüze taşıyan
            önemli eserlerdendir. İslamiyet’in yayılması amacıyla bölgeye
            yapılan fetihler sonucunda şehit olan ve kabri de Samsat ilçesi
            sınırlarında bulunan Sahabe Safvan B. Muattal Hz.’de Müslüman âlemi
            için çok önemli bir sahabedir.
            <hr />
            Osmanlı dönemi eserlerinden ayakta kalan Camii, İbadethane ve
            Türbeler de inanç turizmi açısından önemli eserlerdir. Yüzyıllardır
            bölgede yaşayan Süryani Cemaati’nin halen Metropolitlik olarak
            bölgedeki 7 ili kapsayan Mor Petrus-Mor Pavlus kilisesi son yıllarda
            geçirdiği restorasyon çalışmaları sonucunda özgün mimarisine
            kavuşarak Süryani Cemaatine hizmet vermektedir.
            <hr />
            Sonuç olarak Adıyaman ilinin tüm bu inanç turizmi eserleri ile sahip
            olduğu potansiyelinin ilin kalkınmasında hizmet edecek şekilde
            kullanılması son derece önemlidir. Bu proje ile; *Adıyaman’ın
            yurtiçi ve yurtdışında tanıtımının yapılması, *Bölgede inanç turizmi
            alanında öne çıkan Şanlıurfa, Diyarbakır ve Mardin’i de kapsayan
            Güneydoğu gezilerinde rotaya Adıyaman’ın dâhil edilerek tur
            programlarının oluşturulması, *Adıyaman’ın sahip olduğu inanç turizm
            potansiyelini ortaya çıkarmak, yapılacak yatırım ve verilecek
            hizmetlere ışık tutmak, hem sosyo-ekonomik gelişmişlik farklarının
            azaltılmasına hem de bölgenin kalkınmasına katkıda bulunmak
            hedeflenmektedir.
          </p>
        </div>
        <div className="side-content">
          <img
            src={logoImg}
            alt=""
            width={100}
            height={100}
            className="proj-logo-img"
          />
          <img
            src={mainImg}
            className="main-image"
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
