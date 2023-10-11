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

const dataVideos = [
  {
    title: 'Şehir İçi Tur',
    url: rota1,
  },
  {
    title: 'Şehir İçi Tur',
    url: rota2,
  },
  {
    title: 'Şehir Dışı Tur Nemrut Gun Batımı',
    url: rota3,
  },
  {
    title: 'Şehir Dışı Tur Nemrut Gun Dogumu',
    url: rota4,
  },
  {
    title: 'Şehir Dışı Tur',
    url: rota5,
  },
];

function VideoList() {
  useDocumentTitle('Rotalar');

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

  return (
    <>
      <div className="videos-layout">
        <Navbar />
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
    </>
  );
}

export default VideoList;
