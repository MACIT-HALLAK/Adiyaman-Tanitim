import React, { useEffect, useState } from 'react';
import './VideoList.css';
import Video from './Video';
import Navbar from '../Navbar/Navbar';
import useDocumentTitle from '../../Hooks/useDocumentTitle';
import rota1 from '../../Assets/Rotalar/Rota1.mp4';
import rota2 from '../../Assets/Rotalar/Rota2.mp4';
import rota3 from '../../Assets/Rotalar/Rota3.mp4';
import rota4 from '../../Assets/Rotalar/Rota4.mp4';
import rota5 from '../../Assets/Rotalar/Rota5.mp4';

import i18n from '../../i18n';
import { render } from 'react-dom';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  useEffect(() => {
    const lang = localStorage.getItem('lang');
    i18n.changeLanguage(lang);
  }, [i18n]);

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

  const handleOpebWindow1 = () => {
    setWindow1(!window1);
    setWindow2(false);
    setWindow3(false);
    setWindow4(false);
    setWindow5(false);
  };
  const handleOpebWindow2 = () => {
    setWindow2(!window2);
    setWindow1(false);
    setWindow3(false);
    setWindow4(false);
    setWindow5(false);
  };
  const handleOpebWindow3 = () => {
    setWindow3(!window3);
    setWindow2(false);
    setWindow1(false);
    setWindow4(false);
    setWindow5(false);
  };
  const handleOpebWindow4 = () => {
    setWindow4(!window4);
    setWindow2(false);
    setWindow3(false);
    setWindow1(false);
    setWindow5(false);
  };
  const handleOpebWindow5 = () => {
    setWindow5(!window5);
    setWindow2(false);
    setWindow3(false);
    setWindow4(false);
    setWindow1(false);
  };

  return (
    <>
      <div className="videos-layout">
        <div className="rota-wrapper">
          <div className="rota-content">
            <div className="title" onClick={handleOpebWindow1}>
              <span>{t(`rotalar.rota1.title`)}</span>
            </div>
            {window1 && (
              <div className="content-wrap">
            
                  <div className="explain" style={{ width: '50%' }}>
                    <span>🟤 {t('rotalar.rota1.places.place1')}</span>
                    <span>🟤 {t('rotalar.rota1.places.place2')}</span>
                    <span>🟤 {t('rotalar.rota1.places.place3')}</span>
                    <span>🟤 {t('rotalar.rota1.places.place4')}</span>
                    <span>🟤 {t('rotalar.rota1.places.place5')}</span>
                    <span>🟤 {t('rotalar.rota1.places.place6')}</span>
                    <span>🟤 {t('rotalar.rota1.places.place7')}</span>
                    <span>🟤 {t('rotalar.rota1.places.place8')}</span>
                    <span>🟤 {t('rotalar.rota1.places.place9')}</span>
                    <span>🟤 {t('rotalar.rota1.places.place10')}</span>
                    <span>🟤 {t('rotalar.rota1.places.place11')}</span>
                    <span>🟤 {t('rotalar.rota1.places.place12')}</span>
                  </div>
          
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
            <div className="title" onClick={handleOpebWindow2}>
              <span>{t(`rotalar.rota2.title`)}</span>
            </div>
            {window2 && (
         
                <div className="content-wrap">
                  <div className="explain" style={{ width: '50%' }}>
                    <span>🟤 {t('rotalar.rota2.places.place1')}</span>
                    <span>🟤 {t('rotalar.rota2.places.place2')}</span>
                    <span>🟤 {t('rotalar.rota2.places.place3')}</span>
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
          
            )}
          </div>
          <div className="rota-content">
            <div className="title" onClick={handleOpebWindow3}>
              <span>{t(`rotalar.rota3.title`)}</span>
            </div>
            {window3 && (
        
                <div className="content-wrap">
                  <div className="explain" style={{ width: '50%' }}>
                    <span>🟤 {t('rotalar.rota3.places.place1')}</span>
                    <span>🟤 {t('rotalar.rota3.places.place2')}</span>
                    <span>🟤 {t('rotalar.rota3.places.place3')}</span>
                    <span>🟤 {t('rotalar.rota3.places.place4')}</span>
                    <span>🟤 {t('rotalar.rota3.places.place5')}</span>
                    <span>🟤 {t('rotalar.rota3.places.place6')}</span>
                    <span>🟤 {t('rotalar.rota3.places.place7')}</span>
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
          
            )}
          </div>
          <div className="rota-content">
            <div className="title" onClick={handleOpebWindow4}>
              <span>{t(`rotalar.rota4.title`)}</span>
            </div>
            {window4 && (
        
                <div className="content-wrap">
                  <div className="explain" style={{ width: '50%' }}>
                    <span>🟤 {t('rotalar.rota4.places.place1')}</span>
                    <span>🟤 {t('rotalar.rota4.places.place2')}</span>
                    <span>🟤 {t('rotalar.rota4.places.place3')}</span>
                    <span>🟤 {t('rotalar.rota4.places.place4')}</span>
                    <span>🟤 {t('rotalar.rota4.places.place5')}</span>
                    <span>🟤 {t('rotalar.rota4.places.place6')}</span>
                    <span>🟤 {t('rotalar.rota4.places.place7')}</span>
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
          
            )}
          </div>
          <div className="rota-content">
            <div className="title" onClick={handleOpebWindow5}>
              <span>{t(`rotalar.rota5.title`)}</span>
            </div>
            {window5 && (
         
                <div className="content-wrap">
                  <div className="explain" style={{ width: '50%' }}>
                    <span>🟤 {t('rotalar.rota5.places.place1')}</span>
                    <span>🟤 {t('rotalar.rota5.places.place2')}</span>
                  </div>
                  <div>
                    {' '}
                    <div className="rota-layout">
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
      
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoList;
