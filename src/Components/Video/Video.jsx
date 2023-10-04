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
    setPlayingVideoIndex,
    videoState,
    updateVideoState,
  } = props;

  const {
    isPlaying,
    isFullscreen,
    areControlsVisible,
    isExitingFullscreen, // متغير جديد لمراقبة خروج ملء الشاشة
  } = videoState;

  const playerRef = useRef();
  const wrapperRef = useRef();

  const handleFullscreen = () => {
    const wrapperElement = wrapperRef.current;
    updateVideoState({
      ...videoState,
      isPlaying: true,
      isFullscreen: true,
      areControlsVisible: true, // إظهار الأزرار عند الدخول في ملء الشاشة
    });
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

  const handleExitFullscreen = () => {
    updateVideoState({
      ...videoState,
      isFullscreen: false,
      isPlaying: false,
      areControlsVisible: false,
      isExitingFullscreen: true, // تحديث متغير الخروج من ملء الشاشة
    });
    setPlayingVideoIndex(null); // إيقاف جميع الفيديوهات عند الخروج من ملء الشاشة
    console.log(isPlaying);
  };

  const handleForward = () => {
    const playerInstance = playerRef.current;
    const currentVideoTime = playerInstance.getCurrentTime();
    const newTime = currentVideoTime + 10;
    playerInstance.seekTo(newTime);
  };

  useEffect(() => {
    const wrapperElement = wrapperRef.current;

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        if (wrapperElement) {
          wrapperElement.style.flexDirection = 'column';
        }
        updateVideoState({
          ...videoState,
          isFullscreen: false,
          isPlaying: false,
          areControlsVisible: false,
          isExitingFullscreen: true, // تحديث متغير الخروج من ملء الشاشة
        });
      } else {
        updateVideoState({
          ...videoState,
          isFullscreen: true,
          isPlaying: true,
          areControlsVisible: true,
          isExitingFullscreen: false, // تحديث متغير الخروج من ملء الشاشة
        });
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [index, playingVideoIndex, isPlaying]);

  const handleRewind = () => {
    const playerInstance = playerRef.current;
    const currentVideoTime = playerInstance.getCurrentTime();
    const newTime = currentVideoTime - 10;
    playerInstance.seekTo(newTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      updateVideoState({ ...videoState, isVisible: entries[0].isIntersecting });
    });

    const videoElement = document.getElementById(`video_wrapper-${index}`);
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
        {isFullscreen === true &&
          areControlsVisible === true &&
          playingVideoIndex === index && (
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
        onPlay={() => {
          updateVideoState({ ...videoState, isPlaying: true });
        }}
        onPause={() => {
          updateVideoState({ ...videoState, isPlaying: false });
        }}
      />
      <button
        className={`play-button ${isPlaying ? 'pause-hide' : ''}`}
        onClick={() => {
          if (playingVideoIndex === index) {
            setPlayingVideoIndex(null);
            updateVideoState({ ...videoState, isPlaying: false });
            handleExitFullscreen();
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
