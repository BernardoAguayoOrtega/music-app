// use ref
import { useRef, useState } from 'react';
// import component to show icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import icons
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from '@fortawesome/free-solid-svg-icons';
// import styles
import './style.scss';

// create and import Player component
export const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const [songInfo, setSongInfo] = useState({
    currentTime: '',
    duration: '',
  });

  const audioRef = useRef(null);

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  const getTime = (time) =>
    Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  return (
    <>
      <div className="player">
        <div className="time-control">
          <p>{getTime(songInfo.currentTime)}</p>
          <input
            min={0}
            max={songInfo?.duration}
            value={songInfo.currentTime}
            type="range"
            onChange={dragHandler}
          />
          <p>{getTime(songInfo.duration - songInfo.currentTime)}</p>
        </div>
        <div className="play-control">
          <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
          {isPlaying ? (
            <FontAwesomeIcon
              className="play"
              size="2x"
              icon={faPause}
              onClick={playSongHandler}
            />
          ) : (
            <FontAwesomeIcon
              className="play"
              size="2x"
              icon={faPlay}
              onClick={playSongHandler}
            />
          )}
          <FontAwesomeIcon
            className="skip-forward"
            size="2x"
            icon={faAngleRight}
          />
        </div>
        <audio
          onTimeUpdate={timeUpdateHandler}
          onLoadedData={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
        />
      </div>
    </>
  );
};
