import React, { useState } from 'react';
import './VideoList.css';
import Video from './Video';
import Navbar from '../Navbar/Navbar';

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
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);
  const [played, setPlayed] = useState({} | 0);
  const [duration, setDuration] = useState({} | 0);

  return (
    <div className="videos-layout">
      <Navbar />
      <div className="rota-layout">
        <div className="video-container">
          {dataVideos?.map((item, index) => (
            <div key={index} className="player-wrapper" id={index + 1}>
              <h1>{item.title}</h1>
              <Video
                item={item}
                index={index}
                playingVideoIndex={playingVideoIndex}
                setPlayed={setPlayed}
                setDuration={setDuration}
              />
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width:
                      played[index] !== undefined &&
                      duration[index] !== undefined
                        ? `${
                            ((played[index] * duration[index]) /
                              duration[index]) *
                            100
                          }%`
                        : '0%',
                  }}
                ></div>
              </div>
              <button
                className={`play-button ${
                  playingVideoIndex === index ? 'pause-hide' : ''
                }`}
                onClick={() => {
                  if (playingVideoIndex === index) {
                    setPlayingVideoIndex(null);
                  } else {
                    setPlayingVideoIndex(index);
                  }
                }}
              >
                {playingVideoIndex === index ? '⏸' : '▶️'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoList;
