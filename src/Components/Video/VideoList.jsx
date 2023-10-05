import React, { useState } from 'react';
import './VideoList.css';
import Video from './Video';
import Navbar from '../Navbar/Navbar';
import useDocumentTitle from '../../Hooks/useDocumentTitle';

const dataVideos = [
  {
    title: 'Şehir İçi Tur',
    url: '16yyeUlAedga9Ck1-1dOpbzFwKS_LCSC9',
  },
  {
    title: 'Şehir İçi Tur',
    url: '1rq4JuFd95l4TMi8TQeGHhzm474D_cY-h',
  },
  {
    title: 'Şehir Dışı Tur Nemrut Gun Batımı',
    url: '1IEEbpwEF00kmnMgAt91PjZMNREmn3MYY',
  },
  {
    title: 'Şehir Dışı Tur Nemrut Gun Dogumu',
    url: '1YB05JlDRzy46gXcEGnoPcsuNpp7XxTYH',
  },
  {
    title: 'Şehir Dışı Tur',
    url: '1d-x1yY4YtRYJxny_106IJHc9KCRnposp',
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
  );
}

export default VideoList;
