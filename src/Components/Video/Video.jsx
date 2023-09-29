import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import fullImageIcon from '../../Assets/images/fullscreen-white.svg';
import playImageIcon from '../../Assets/images/play.svg';
import pauseImageIcon from '../../Assets/images/pause.svg';

const Video = (props) => {
  const {
    item,
    index,
    playingVideoIndex,
    setPlayed,
    setDuration,
    played,
    duration,
    setPlayingVideoIndex,
  } = props;
  const [isVisible, setIsVisible] = useState(false);
  const playerRef = useRef();
  const wrapperRef = useRef();

  const handleFullscreen = () => {
    const playerInstance = playerRef.current;
    const videoElement = playerInstance.getInternalPlayer();
    const wrapperElement = wrapperRef.current;

    if (videoElement) {
      if (wrapperElement) {
        wrapperElement.style.flexDirection = 'row';
      }

      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }
    } else {
      console.error('Video element not found!');
    }
  };
  useEffect(() => {
    const wrapperElement = wrapperRef.current;

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        if (wrapperElement) {
          wrapperElement.style.flexDirection = 'column';
        }
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
    });

    const videoElement = document.getElementById(`video-wrapper-${index}`);
    if (videoElement) observer.observe(videoElement);

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={wrapperRef}
      id={`video-wrapper-${index}`}
      className={`video-wrapper ${isVisible ? 'visible' : ''}`}
    >
      <h1>{item.title}</h1>

      <ReactPlayer
        ref={playerRef}
        url={`https://drive.google.com/uc?id=${item?.url}`}
        playing={playingVideoIndex === index}
        loop
        width="100%"
        height="100%"
        onProgress={({ played }) =>
          setPlayed((prev) => ({ ...prev, [index]: played }))
        }
        onDuration={(dur) => setDuration((prev) => ({ ...prev, [index]: dur }))}
      />
      {!isVisible && (
        <div>
          <img
            src="../../Assets/images/rota.svg"
            alt=""
            width={100}
            height={100}
            style={{ position: 'absolute', zIndex: '1000', inset: '0' }}
          />
        </div>
      )}
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width:
              played[index] !== undefined && duration[index] !== undefined
                ? `${
                    ((played[index] * duration[index]) / duration[index]) * 100
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
        {playingVideoIndex === index ? (
          <img src={pauseImageIcon} alt="pause button" />
        ) : (
          <img src={playImageIcon} alt="play button" />
        )}
      </button>
      <img
        className={`fullscreen-button`}
        onClick={handleFullscreen}
        src={fullImageIcon}
        alt="full screen button"
        width={20}
        height={20}
        color="white"
        style={{ backgroundColor: 'transparent' }}
      />
    </div>
  );
};

export default Video;
