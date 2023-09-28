import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { InView } from 'react-intersection-observer';

const Video = (props) => {
  const { item, index, playingVideoIndex, setPlayed, setDuration } = props;
  const [isVisible, setIsVisible] = useState(false);

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
      id={`video-wrapper-${index}`}
      className={`video-wrapper ${isVisible ? 'visible' : ''}`}
    >
      <ReactPlayer
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
      {!isVisible && <div>Thumbnail</div>}
    </div>
  );
};

export default Video;
