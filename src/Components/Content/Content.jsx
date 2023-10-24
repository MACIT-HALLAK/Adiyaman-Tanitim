import './Content.css';
import React, { useState, useEffect, Suspense } from 'react';

import slidimage1 from '../../Assets/images/sliders/slider1edit.png';
import slidimage2 from '../../Assets/images/sliders/slider2.jpeg';
import slidimage3 from '../../Assets/images/sliders/slider3.jpeg';
import slidimage4 from '../../Assets/images/sliders/slider4.jpeg';
import slidimage5 from '../../Assets/images/sliders/slider5.jpeg';
import slidimage6 from '../../Assets/images/sliders/slider6.jpeg';
import slidimage7 from '../../Assets/images/sliders/slider7.jpeg';
import slidimage8 from '../../Assets/images/sliders/slider8.jpeg';
import slidimage9 from '../../Assets/images/sliders/slider9.jpeg';
import slidimage10 from '../../Assets/images/sliders/slider10.jpeg';
import slidimage11 from '../../Assets/images/sliders/silder11edit.png';
import slidimage12 from '../../Assets/images/sliders/slider12.jpeg';
import slidimage13 from '../../Assets/images/sliders/slider13edit.png';
import slidimage14 from '../../Assets/images/sliders/slider14.jpeg';
import slidimage15 from '../../Assets/images/sliders/slider15.jpeg';
import slidimage16 from '../../Assets/images/sliders/slider16.jpeg';
import slidimage17 from '../../Assets/images/sliders/slider17.jpeg';
import slidimage18 from '../../Assets/images/sliders/slider18.jpeg';
import { Link } from 'react-router-dom';
import TypeWriter from './TypeWriter';
import { useTranslation } from 'react-i18next';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
const ImageComponent = React.lazy(() => import('../skeletons/ImageComponent'));

const Content = () => {
  const { t } = useTranslation();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    slidimage1,
    slidimage2,
    slidimage3,
    slidimage4,
    slidimage5,
    slidimage6,
    slidimage7,
    slidimage8,
    slidimage9,
    slidimage10,
    slidimage11,
    slidimage12,
    slidimage13,
    slidimage14,
    slidimage15,
    slidimage16,
    slidimage17,
    slidimage18,
  ];
  const delay1 = 5000; // 10 saniye
  const [left, setLeft] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay1);

    return () => clearInterval(interval);
  }, []);

  const sentence = t('anasayfa.sliders.baslik');

  const [textValues] = useState([
    {
      title: 'Abuzer Gaffari Türbesi',
      content:
        'Sahabelerden olduğu söylenir. Adıyaman’da savaşırken düşmanlar tarafından şehit edildiği ve buraya gömüldüğü rivayet edilmektedir.',
    },
    {
      title: 'Adıyaman Kalesi',
      content:
        'Adıyaman şehir merkezinde yer alan kale yaklaşık 25 metre yükseklikteki yığma bir höyük üzerine kurulmuştur. VII. yüzyıl ortalarında Bizans saldırılarına karşı koymak amacıyla Emevi komutanı Mansur İbn-i Cavana yaptırdığı bilinmektedir',
    },
    {
      title: 'Altınlı Köprüsü',
      content:
        'Adıyaman’ın Gölbaşı ilçesine bağlı olan Yolbağ Köyü’ndeki Altınlı Köprü, şehrin en eski kalıntılarının başında geliyor. Altınlı Köprü’nün tarihi Roma dönemlerine dayanmakta ve günümüze kadar çok fazla tadilat görmemiştir. Yapımı sırasında beyaz kesme taş ve moloz taş kullanıldığı görülen köprü, büyük dört kemerden oluşmaktadır. Yapım tarihi ise kesin olarak bilinmemektedir',
    },
    {
      title: 'Arsemia',
      content:
        'Arsemia Antik Kenti, Nemrut güzergâhı üzerindeki bir başka ören yeri. Kommagene medeniyetinin bir dönem başkentiymiş burası. Kale olarak da adlandırılan Arsemia, savunma amacıyla kullanılmasının yanısıra dini amaçlı tüneller kazmak için de kullanılmış',
    },
    {
      title: 'Nemrud Arslanlı Horoskop',
      content:
        "Aslanın gövdesinde 19 yıldız vardır. Her yıldız sivri uçlu sekiz ışından oluşur. Konumlarındaki küçük değişiklikler dışında, bu yıldızlar Eratostenes'in Ephemeris'inde tasvir ettiği Aslan Konstelasyonu'nu temsil eder.",
    },
    {
      title: 'Cendere Köprüsü',
      content:
        'Cendere Köprüsü, Roma İmparatoru Septimius Severus adına M.S. 193 yılında inşa edilmiş olup halen kullanılmakta olan en eski köprülerden birisidir.',
    },
    {
      title: 'Dikilitaş (Sesönk)',
      content:
        'Besni ilçesi Hacıhalil ve Dikilitaş köyü yakınlarında konumlanan, Roma dönemine ait anıt mezar olan Dikilitaş (Sesönk), Kızıldağ üzerinde yer alır.',
    },
    {
      title: 'Gerger Kalesi',
      content:
        "Gerger Kalesi Adıyaman Oymaklı Köyü'nde bulunmaktadır. Tarihi Geç Hitit Beylikleri Dönemi'ne kadar dayanır. Ancak Eski Gerger Kenti'nin MÖ. 3'üncü yüzyılda Arsames adında Seleukos kralı zamanında kurulduğu bilinmektedir. MÖ. II. yüzyılda ise Fırat (Euphrat) Arsameiası olarak adlandırılmaktaydı.",
    },
    {
      title: 'Gerger Kanyonu',
      content:
        '2004 yılında kent turizmine kazandırılan Gerger Kanyonu, Fırat Nehri ile Atatürk Baraj Gölü’nün kesiştiği noktada yer almaktadır. Eskiden çok fazla bilinmeyen bu kanyon, son yıllarda popüler olmaya başlamıştır. Yolunuz buraya düşerse bu doğal güzelliğin tadını çıkarmak için mutlaka Gerger Kanyonu’na uğramalısınız.',
    },
    {
      title: 'Antiochos Apollon',
      content:
        "Adıyaman'ın Gerger ilçesinde keşfedilen Temenosta Kral l. Antiochos ve Tanrı Apollon'un tokalaşma sahnesi ile Antiochos kanunların yazılı olduğu steller görülmeye değer.",
    },
    {
      title: 'Karakuş Tümülüsü',
      content:
        'Adıyaman-Kahta girişinde bulunan, Kommagene Kralı II. Mithridates tarafından annesi İsas adına yaptırılan anıt mezar, sütun üzerindeki kartaldan dolayı Karakuş Tümülüsü olarak anılmaktadır.',
    },
    {
      title: 'Keleş Konağı',
      content:
        'Keleş Konağı, Adıyaman Merkez ilçesinde Hısn-ı Mansur Kalesi’nin altında bulunuyor. Buranın restorasyonu tamamlanmıştır. Kale yolu ve merpenlerinin yenilendiği konak günümüzde sosyal tesis olarak hizmet veriyor.',
    },
    {
      title: 'Mahmud El Ensari',
      content:
        'Medineli bir Sahabe olduğu rivayet edilmektedir. İslamiyet’i yaymak amacıyla Anadolu’ya gelmiş ve burada şehit düşmüştür. Mezarının bulunduğu yerde başka şehitlerin de olduğu rivayet edilir.',
    },
    {
      title: 'Musalla Cami',
      content:
        'Adıyaman merkezde bulunan camiinin yapım tarihi kesin olarak bilinmemektedir. 1308 hicri 1890 miladi yılında deprem sonucu minaresinin yıkıldığı rivayet edilmektedir. Dolayısıyla daha önce inşa edilmiş olmalıdır.',
    },
    {
      title: 'Nemrut Dağı Örenyeri',
      content:
        ' 1987 yılında UNESCO İnsanlığın Kültür Mirası listesine girmiş olan Nemrut Dağı Örenyeri, İl merkezine 77 km, Kahta ilçesine 43 km uzaklıktadır. Dünya Miras Alanı bu yer, Doğu Toros sıradağları üzerinde 2.206 metre yükseklikte, Fırat Nehri geçitlerine ve ovaya hakim bir tepe üzerinde yer almaktadır.',
    },
    {
      title: 'Perre Antik Kenti',
      content:
        'Eski kaynaklarda Me’arath gazze Pörön, Mezopotamya’da ise Pirin ve Perin olarak bilinen Kommagene Krallığı’nın beş büyük kentinden biri olan Perre Antik Kenti, Melitene’yi (Malatya) başkent Samosata’ya (Samsat) bağlayan yol güzergahı üzerinde olması nedeniyle geçmişte jeopolitik bir öneme sahipti.',
    },
    {
      title: 'Mor Petrus ve Mor Paulus Kilisesi',
      content:
        "Mor Petrus ve Mor Paulus Kilisesi Adıyaman Merkez Mara Mahallesi'ndedir. 4 veya 5'inci yüzyılda yapıldığı tahmin edilen kilise, giriş kapısı üzerinde ve içeride bulunan Süryanice kitabelere göre 1888 ve 1905 yıllarında onarım görmüştür.",
    },
    {
      title: 'Tuzhanı',
      content:
        'Tarihte yolcuların konaklama ve ticaret merkezi olarak inşa edilen ve günümüze kadar ayakta kalmayı başaran 200 yıllık Tarihi Tuz Hanı, aslına ve günümüz şartlarına uygun yapılan restorasyon çalışmalarının ardından mimari güzelliğiyle dikkatleri üzerinde topluyor.',
    },
  ]);
  const handleClickLeft =()=> {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1) % images.length);
  }
  const handleClickRight =()=> {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
}
  return (
    <>
      <div className="content" style={{ position: 'relative' }}>
        <div className="content-center">
          <p className="content-title">
            <TypeWriter text={sentence} delay={150} />
          </p>
          <p className="imgTilte">
            {t(`anasayfa.sliders.slide${currentImageIndex + 1}.title`)}
          </p>
          <p className="desc">
            {t(`anasayfa.sliders.slide${currentImageIndex + 1}.content`)}
          </p>
          <button className="content-btn">
            <Link to={'/Videos'}>{t('anasayfa.sliders.submit')}</Link>
          </button>
        </div>
        <Suspense fallback={<div className="skeleton-image"></div>}>
          <ImageComponent
            images={images}
            currentImageIndex={currentImageIndex}
          />
        </Suspense>
        <div onClick={handleClickLeft} className='navigation left'><IoIosArrowBack /></div>
        <div onClick={handleClickRight} className='navigation right'><IoIosArrowForward /></div>
      </div>

    </>
  );
};

export default Content;
