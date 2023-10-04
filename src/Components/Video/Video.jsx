import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import playImageIcon from '../../Assets/images/play.svg';
import pauseImageIcon from '../../Assets/images/pause.svg';
import reply from '../../Assets/images/forward.svg';
import forward from '../../Assets/images/replay.svg';

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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef();
  const wrapperRef = useRef();

  const handleFullscreen = () => {
    const wrapperElement = wrapperRef.current;
    setIsPlaying(true);
    setIsFullscreen(true);
    if (wrapperElement && !isFullscreen) {
      if (wrapperElement.requestFullscreen) {
        wrapperElement.requestFullscreen();
      } else if (wrapperElement.mozRequestFullScreen) {
        wrapperElement.mozRequestFullScreen();
      } else if (wrapperElement.webkitRequestFullscreen) {
        wrapperElement.webkitRequestFullscreen();
      } else if (wrapperElement.msRequestFullscreen) {
        wrapperElement.msRequestFullscreen();
      }
    }
  };

  useEffect(() => {
    const wrapperElement = wrapperRef.current;

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        if (wrapperElement) {
          wrapperElement.style.flexDirection = 'column';
        }
        setIsFullscreen(false);
        handleExitFullscreen();
      } else {
        setIsFullscreen(true);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [index, playingVideoIndex]);

  const handleExitFullscreen = () => {
    setIsFullscreen(false);
    if (playingVideoIndex === index) {
      setPlayingVideoIndex(null);
      setIsPlaying(false);
    }
  };

  const handleForward = () => {
    const playerInstance = playerRef.current;
    const currentVideoTime = playerInstance.getCurrentTime();
    const newTime = currentVideoTime + 10;
    playerInstance.seekTo(newTime);
  };

  const handleRewind = () => {
    const playerInstance = playerRef.current;
    const currentVideoTime = playerInstance.getCurrentTime();
    const newTime = currentVideoTime - 10;
    playerInstance.seekTo(newTime);
  };

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
      id={`video_wrapper-${index}`}
      className={`video-wrapper`}
    >
      <span>{item.title}</span>

      <div className="video-controls">
        {isFullscreen === true && playingVideoIndex === index && (
          <div className="fullscreen-controls">
            <button onClick={handleForward} id="forward-button">
              <img src={forward} alt="increase video 10" srcSet="" />
            </button>
            <button onClick={handleRewind} id="rewind-button">
              <img src={reply} alt="decrease video 10" srcSet="" />
            </button>
          </div>
        )}
      </div>

      <ReactPlayer
        ref={playerRef}
        url={`https://drive.google.com/uc?id=${item?.url}`}
        playing={playingVideoIndex === index && isPlaying}
        loop
        width="100%"
        height="100%"
        controls={true}
        onProgress={({ played }) =>
          setPlayed((prev) => ({ ...prev, [index]: played }))
        }
        onDuration={(dur) => setDuration((prev) => ({ ...prev, [index]: dur }))}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button
        className={`play-button ${isPlaying ? 'pause-hide' : ''}`}
        onClick={() => {
          if (playingVideoIndex === index) {
            setPlayingVideoIndex(null);
          } else {
            setPlayingVideoIndex(index);
            handleFullscreen();
          }
        }}
      >
        {isPlaying ? (
          <img src={pauseImageIcon} alt="pause button" />
        ) : (
          <img src={playImageIcon} alt="play button" />
        )}
      </button>
    </div>
  );
};

export default Video;
