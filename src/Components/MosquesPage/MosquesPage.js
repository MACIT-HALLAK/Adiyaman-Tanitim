import './MosquesPage.css';
import Navber from '../Navbar/Navbar';
import image from '../../Assets/images/slider1.jpg'
import image1 from '../../Assets/images/tt.jpg'
const MosquesPage = () => {
  return (
    <div className='mosque-layout'>
      <Navber />
      <div className='main-content'>
          <h2>Adiyamanda gezilecek Camiler</h2>
          <div className='mosque-navigation'>
              <div><a href='#ulu'>1.Ulu Camii</a></div>
              <div><a href='#car'>2.Çarşı Camii</a></div>
              <div><a href='#'>3.aya sofya cami</a></div>
              <div><a href='#'>4.aya sofya cami</a></div>
             
          </div>
          <div className='mosque-content'>
            <div className='mosque-card'>
              <div ><img id='ulu' src={image} alt='' /></div>
              <div>
                <h2 >Ulu Camii</h2>
                <p>Adıyaman’ın şehir merkezinde bulunmaktadır. Dulkadiroğulları Beyliği zamanında yapılan camii daha sonraları birçok kez onarım görmüştür. Caminin bu günkü şekliyle 1863 tarihinde yaptırıldığını bildiren bir kitabe, minare kaidesinin doğuya bakan üst yüzeyinde bulunmaktadır. Aynı yerde altta kemer içinde bulunan bir başka kitabede caminin 1902 yılında tamir gördüğü anlaşılmaktadır.</p>
              </div>
            </div>
            <div className='mosque-card'>
              <div ><img id='car' src={image1} alt='' /></div>
              <div>
                
                <h2 >Çarşı Camii</h2>
                <p>Eski Besni’nin en merkezi yerinde yer alan Çarşı camii adı ile anılır. Bazı kimselere göre camii, Hacı Arslan isminde birisi tarafından yaptırılmıştır. Fakat üzerindeki kitabede Kalaunoğlu Mehmet Nasır ismi geçmektedir. Bunun Mısır Kölemen sultanlarından Kalaun ile ne derece ilişkili olduğu bilinmemektedir. Mahalli geleneğe uygun olarak yapılmış olan camiinin muntazam bir planı bulunmaktadır.</p>
              </div>
            </div>
          </div>
      </div>
      <div className='mosque-section'></div>
    </div>
  )
}

export default MosquesPage