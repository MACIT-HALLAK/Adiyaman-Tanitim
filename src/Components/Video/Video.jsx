import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './Video.css';

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

function Video() {
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <div>
      {dataVideos.map((item, index) => (
        <div key={index} className="player-wrapper">
          <h1>{item.title}</h1>
          <ReactPlayer
            url={`https://drive.google.com/uc?id=${item.url}`}
            playing={playingVideoIndex === index}
            loop
            width="100%"
            height="100%"
            onProgress={({ played }) => setPlayed(played)}
            onDuration={(duration) => setDuration(duration)}
            onClick={() => {
              if (playingVideoIndex === index) {
                setPlayingVideoIndex(null);
              } else {
                setPlayingVideoIndex(index);
              }
            }}
          />
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${((played * duration) / duration) * 100}%` }}
            ></div>
          </div>
          <button
            className={`play-button ${
              playingVideoIndex === index ? 'pasue-hide' : ''
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
  );
}

export default Video;
