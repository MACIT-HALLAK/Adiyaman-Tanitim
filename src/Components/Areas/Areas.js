import './Areas.css';
import Navber from '../Navbar/Navbar';
import image from '../../Assets/images/r.jpg';
import image1 from '../../Assets/images/ww.jpg';
import image2 from '../../Assets/images/www.JPG';
import image3 from '../../Assets/images/wwwww.webp';
const Areas = () => {
  return (
    <div className="areas-layout">
      <Navber />
      <div className="main-content">
        <h2>Adiyamanda gezilecek Alanlar</h2>
        <div className="areas-navigation">
          <div>
            <a href="#Cendere">Cendere Köprüsü</a>
          </div>
          <div>
            <a href="#Perre">Perre Antik Kenti</a>
          </div>
          <div>
            <a href="#Eski">Eski Besni Harabeleri</a>
          </div>
          <div>
            <a href="#yuzen">Yüzen Adalar</a>
          </div>
        </div>
        <div className="areas-content">
          <div className="areas-card">
            <div>
              <img src={image} alt="" />
            </div>
            <div>
              <h2>Cendere Köprüsü</h2>
              <p>
                Roma hükümdarı Septimus Severus tarafından inşaa ettirilen yapı
                Anadolu’nun en eski köprülerinden biridir. Köprünün en önemli
                özelliklerinden biri 120 metre uzunluğundaki köprüde hiç çimento
                kullanılmamış olması. Cendere Çayı üzerine yapılan köprü,
                Adıyaman’ın Kahta ile Sincik ilçelerini birbirine bağlıyor.
              </p>
            </div>
          </div>
          <div className="areas-card">
            <div>
              <img src={image1} alt="" />
            </div>
            <div>
              <h2>Perre Antik Kenti</h2>
              <p>
                Kommagene İmparatorluğu’nun bıraktığı yazıtlarda bahsedilen
                antik kentlerden biri olan Perre zengin su kaynaklarına sahip
                olmasıyla ün kazanmış. Şehrin kale duvarlarının birçoğu da hala
                mevcut. Roma İmparatorluğu’nun bu şehre kattığı Roma Çeşmesi de
                dönemin durak yerlerinden biri olan şehre dağları aşarak
                yolculuk ulaşmaya çalışanlar için mükemmel bir imkan yaratmış.
                Antik kente, şehir merkezine sadece 4 km uzaklıkta olmasıyla çok
                kolay bir şekilde ulaşılabilir.
              </p>
            </div>
          </div>
          <div className="areas-card">
            <div>
              <img src={image2} alt="" />
            </div>
            <div>
              <h2>Eski Besni Harabeleri</h2>
              <p>
                Besni, yüzyıllar boyunca birçok medeniyete ev sahipliği yapmış
                ve sanayi ve ticaret kenti olarak da tanınmıştır. Besni
                Kalesi’yle de beraber şehir korunaklı kalmış; sulak ve ormanlık
                arazi varlığıyla zengin bir yerleşim yeri olarak görülmüştür.
                Besni ilçesinin 4-5 km güneyinde bulunan Eski Besni Ören Yeri,
                Besni Kalesi’ni bütünleyen Ulu Camii, Külhanönü Camii, Tokatmış
                Camii gibi cami ve minareler, Bekir Bey Külliyesi’nden kalan
                hamam ve çeşme ile diğer külliye, köprü ve çarşı kalıntılarıyla
                oldukça çekici bir görünüme sahiptir.
              </p>
            </div>
          </div>
          <div className="areas-card">
            <div>
              <img id="yuzen" src={image3} alt="" />
            </div>
            <div>
              <h2>Yüzen Adalar</h2>
              <p>
                Adıyaman’ın Çelikhan ilçesinde bulunan Çat Barajı’nda farklı
                büyüklüklerde onlarca yüzen ada bulunuyor. Sürekli şekil, boyut
                ve yer değiştiren bu küçük adacıkların binlerce yılda oluştuğu
                düşünülüyor. Adacıkların bir kısmı kıyaya vurarak artık hareket
                edemez oluyor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="areas-section"></div>
    </div>
  );
};

export default Areas;
