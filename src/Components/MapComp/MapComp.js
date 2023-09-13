import './MapComp.css';
import map from '../../Assets/images/map.png';

const MapComp = () => {
  return (
    <div className='mapcomp-layout'>
        <div className='mapcomp-text'>
            <p>ADIYAMAN YOLUNU BULAMIYORSANIZ BURAYA TIKLAYINIZ</p></div>
        <div>
            <div><img src={map} alt='' /></div>
            <div className='card-img-overlay'>
                <button>tikla</button>
            </div>
        </div>
    </div>
  )
}

export default MapComp