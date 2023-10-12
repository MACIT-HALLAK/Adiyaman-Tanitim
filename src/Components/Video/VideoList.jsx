import React, { useState } from 'react';
import './VideoList.css';
import Video from './Video';
import Navbar from '../Navbar/Navbar';
import useDocumentTitle from '../../Hooks/useDocumentTitle';
import rota1 from '../../Assets/Rotalar/Rota1.mp4';
import rota2 from '../../Assets/Rotalar/Rota2.mp4';
import rota3 from '../../Assets/Rotalar/Rota3.mp4';
import rota4 from '../../Assets/Rotalar/Rota4.mp4';
import rota5 from '../../Assets/Rotalar/Rota5.mp4';
import Flip from 'react-reveal/Flip';

const dataVideos = [
  {
    title: 'Şehir İçi Tur',
    url: rota1,
  },
];
const dataVideos1 = [
  {
    title: 'Şehir İçi Tur',
    url: rota2,
  },
];
const dataVideos2 = [ 
  {
    title: 'Şehir Dışı Tur Nemrut Gun Batımı',
    url: rota3,
  },
];
const dataVideos3 = [
  {
    title: 'Şehir Dışı Tur Nemrut Gun Dogumu',
    url: rota4,
  },
];
const dataVideos4 = [
  {
    title: 'Şehir Dışı Tur',
    url: rota5,
  },
];

function VideoList() {

  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);
  const [played, setPlayed] = useState({});
  const [duration, setDuration] = useState({});
  const initialVideoState = {
    isPlaying: false,
    isFullscreen: false,
    areControlsVisible: true,
    isVisible: false,
  };

  const [videoStates, setVideoStates] = useState(
    new Array(dataVideos.length).fill(initialVideoState)
  );

  const updateVideoState = (index, newState) => {
    setVideoStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = newState;
      return newStates;
    });
  };
  const [window1, setWindow1] = useState(false);
  const [window2, setWindow2] = useState(false);
  const [window3, setWindow3] = useState(false);
  const [window4, setWindow4] = useState(false);
  const [window5, setWindow5] = useState(false);

  const handleOpebWindow1 = () => {setWindow1(!window1);};
  const handleOpebWindow2 = () => {setWindow2(!window2);};
  const handleOpebWindow3 = () => {setWindow3(!window3);};
  const handleOpebWindow4 = () => {setWindow4(!window4);};
  const handleOpebWindow5 = () => {setWindow5(!window5);};

  return (
    <>
      <div className="videos-layout">
        <Navbar />
        <div className="rota-wrapper">
      <div className="rota-content">
        <div className="title" onClick={handleOpebWindow1}>{dataVideos[0].title}</div>
        {window1 && (
          <div className="content-wrap">
             <Flip top>
            <div className="explain">
              <span>Kent Meydanı,</span>
              <span>Yenipınar Cami,</span>
              <span>Eskisaray Cami,</span> 
              <span>Adıyaman Kalesi,</span>
              <span>Mor Petrus ve Mor Paulus Kilisesi,</span>  
              <span>Vakıf Cami,</span>
              <span>Musalla Cami,</span>
              <span> Ulu Cami,</span> 
              <span>Kap Cami,</span>
              <span>Çarşı Cami,</span>
              <span>Tuz Hanı,</span>
              <span>Oturakçı Pazarı.</span>
            </div>
            </Flip>
            <div>
              
        <div className="rota-layout">
        
        <div className="video-container">
         
          {dataVideos?.map((item, index) => (
            <React.Fragment key={index}>
             
              <Video
                key={index}
                item={item}
                index={index}
                playingVideoIndex={playingVideoIndex}
                setPlayed={setPlayed}
                setDuration={setDuration}
                played={played}
                duration={duration}
                setPlayingVideoIndex={setPlayingVideoIndex}
                videoState={videoStates[index]}
                updateVideoState={(newState) =>
                  updateVideoState(index, newState)
                }
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      
            </div>
          </div>
        )}
      </div>
      <div></div>
      <div className="rota-content">
        <div className="title" onClick={handleOpebWindow2}>{dataVideos1[0].title}</div>
        {window2 && (
           <Flip top>
          <div className="content-wrap">
            <div className="explain">
              <span>Mini Adıyaman,</span>
              <span>Perre Antik Kenti,</span>
              <span>Zey Cami.</span> 

            </div>
            <div>
            <div className="rota-layout">
            <div className="video-container">
         
          {dataVideos1?.map((item, index) => (
            <React.Fragment key={index}>
             
              <Video
                key={index}
                item={item}
                index={index}
                playingVideoIndex={playingVideoIndex}
                setPlayed={setPlayed}
                setDuration={setDuration}
                played={played}
                duration={duration}
                setPlayingVideoIndex={setPlayingVideoIndex}
                videoState={videoStates[index]}
                updateVideoState={(newState) =>
                  updateVideoState(index, newState)
                }
              />
            </React.Fragment>
          ))}
        </div>
            </div>
            </div>
          </div>
          </Flip>
        )}
      </div>
      <div className="rota-content">
        <div className="title" onClick={handleOpebWindow3}>{dataVideos2[0].title}</div>
        {window3 && (
           <Flip top>
          <div className="content-wrap">
            <div className="explain">
              <span>Abuzer Gaffari Türbesi,</span>
              <span>Sahabe Saffan Bin Muaatdal Türbesi,</span>
              <span>Karakuş Tümülüsü,</span> 
              <span>Cendere Köprüsü,</span>
              <span>Kahta Kalesi,</span>
              <span>Arsemia,</span>
              <span>Nemrut Dağı.</span>

            </div>
            <div>
            <div className="rota-layout">
            <div className="video-container">
         
          {dataVideos2?.map((item, index) => (
            <React.Fragment key={index}>
             
              <Video
                key={index}
                item={item}
                index={index}
                playingVideoIndex={playingVideoIndex}
                setPlayed={setPlayed}
                setDuration={setDuration}
                played={played}
                duration={duration}
                setPlayingVideoIndex={setPlayingVideoIndex}
                videoState={videoStates[index]}
                updateVideoState={(newState) =>
                  updateVideoState(index, newState)
                }
              />
            </React.Fragment>
          ))}
        </div>
            </div>
          </div>
          </div>
          </Flip>
        )}
        </div>
      <div className="rota-content">
        <div className="title" onClick={handleOpebWindow4}>{dataVideos3[0].title}</div>
        {window4 && (
           <Flip top>
          <div className="content-wrap">
            <div className="explain">
              <span>Nemrut Dağı,</span>
              <span>Üzeyir Peygamber,</span>
              <span>Cendere Köprüsü,</span> 
              <span>Karakuş Tümülüsü,</span>
              <span>Sahabe Saffan Bin Muaatdal Türbesi,</span>
              <span>Mahmut El Ensari Türbesi,</span>
              <span>Abuzer Gaffari Türbesi.</span>
            </div>
            <div>
            <div className="rota-layout">
            <div className="video-container">
         
         {dataVideos3?.map((item, index) => (
           <React.Fragment key={index}>
            
             <Video
               key={index}
               item={item}
               index={index}
               playingVideoIndex={playingVideoIndex}
               setPlayed={setPlayed}
               setDuration={setDuration}
               played={played}
               duration={duration}
               setPlayingVideoIndex={setPlayingVideoIndex}
               videoState={videoStates[index]}
               updateVideoState={(newState) =>
                 updateVideoState(index, newState)
               }
             />
           </React.Fragment>
         ))}
       </div>
            </div>
          </div>
          </div>
          </Flip>
        )}
        </div>
      <div className="rota-content">
        <div className="title" onClick={handleOpebWindow5}>{dataVideos4[0].title}</div>
        {window5 && (
           <Flip top>
          <div className="content-wrap">
            <div className="explain">
              <span>Sahabe Saffan Bin Muaatdal Türbesi,</span>
              <span>Menzil.</span>

            </div>
            <div> <div className="rota-layout">

            <div className="video-container">
         
         {dataVideos4?.map((item, index) => (
           <React.Fragment key={index}>
            
             <Video
               key={index}
               item={item}
               index={index}
               playingVideoIndex={playingVideoIndex}
               setPlayed={setPlayed}
               setDuration={setDuration}
               played={played}
               duration={duration}
               setPlayingVideoIndex={setPlayingVideoIndex}
               videoState={videoStates[index]}
               updateVideoState={(newState) =>
                 updateVideoState(index, newState)
               }
             />
           </React.Fragment>
         ))}
       </div>
            </div>
            </div>
          </div>
          </Flip>
        )}
        </div>
    </div>

      </div>
    </>
  );
}

export default VideoList;
