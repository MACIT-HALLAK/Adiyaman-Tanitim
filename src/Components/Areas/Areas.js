import './Areas.css';
import Navber from '../Navbar/Navbar';
import image from '../../Assets/images/r.jpg';
import image1 from '../../Assets/images/ww.jpg';
import image2 from '../../Assets/images/www.JPG';
const Areas = () => {



  return (
    <div className="Areas-layout">
      <Navber />
      <div className="main-areas">
        <h2>Adiyamanda gezilecek Alanlar</h2>
        <ul className="Areas-navigation">
          <li className='areas-li' >
            <a href="#Cendere">Cendere Köprüsü</a>
          </li>
          <li className='areas-li'>
            <a href="#Perre">Perre Antik Kenti</a>
          </li>
          <li className='areas-li'>
            <a href="#Eski">Eski Besni Harabeleri</a>
          </li>
          <li className='areas-li'>
            <a href="#">aya sofya cami</a>
          </li>
        </ul>
        <div className="Areas-content">
          <div className="Areas-card">
            <div>
              <img id="Cendere" src={image} alt="" />
            </div>
            <div>
              <h2>Cendere Köprüsü</h2>
              <p>
                  Roma hükümdarı Septimus Severus tarafından inşaa ettirilen yapı Anadolu’nun en eski köprülerinden biridir.
                  Köprünün en önemli özelliklerinden biri 120 metre uzunluğundaki köprüde hiç çimento kullanılmamış olması.
                  Cendere Çayı üzerine yapılan köprü, Adıyaman’ın Kahta ile Sincik ilçelerini birbirine bağlıyor.
              </p>
            </div>
          </div>
          <div className="Areas-card">
            <div>
              <img id="Perre" src={image1} alt="" />
            </div>
            <div>
              <h2>Perre Antik Kenti</h2>
              <p>
                  Kommagene İmparatorluğu’nun bıraktığı yazıtlarda bahsedilen antik kentlerden biri olan Perre zengin su kaynaklarına sahip olmasıyla ün kazanmış. Şehrin kale duvarlarının birçoğu da hala mevcut.
                  Roma İmparatorluğu’nun bu şehre kattığı Roma Çeşmesi de dönemin durak yerlerinden biri olan şehre dağları aşarak yolculuk ulaşmaya çalışanlar için mükemmel bir imkan yaratmış.
                  Antik kente, şehir merkezine sadece 4 km uzaklıkta olmasıyla çok kolay bir şekilde ulaşılabilir.
              </p>
            </div>
          </div>
          <div className="Areas-card">
            <div>
              <img id="Eski" src={image2} alt="" />
            </div>
            <div>
              <h2>Eski Besni Harabeleri</h2>
              <p>
                  Besni, yüzyıllar boyunca birçok medeniyete ev sahipliği yapmış ve sanayi ve ticaret kenti olarak da tanınmıştır. Besni Kalesi’yle de beraber şehir korunaklı kalmış; sulak ve ormanlık arazi varlığıyla zengin bir yerleşim yeri olarak görülmüştür.
                  Besni ilçesinin 4-5 km güneyinde bulunan Eski Besni Ören Yeri, Besni Kalesi’ni bütünleyen Ulu Camii, Külhanönü Camii, Tokatmış Camii gibi cami ve minareler, Bekir Bey Külliyesi’nden kalan hamam ve çeşme ile diğer külliye, köprü ve çarşı kalıntılarıyla oldukça çekici bir görünüme sahiptir.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Areas-section"></div>
    </div>
  );
};

export default Areas;
