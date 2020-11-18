// use ref
import { useRef, useState } from 'react';
// import component to show icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import icons
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
// import styles
import './style.scss';

// create and import Player component
export const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
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

  return (
    <>
      <div className="player">
        <div className="time-control">
          <p>{getTime(songInfo.currentTime)}</p>
          <input type="range" />
          <p>{getTime(songInfo.duration - songInfo.currentTime)}</p>
        </div>
        <div className="play-control">
          <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
          <FontAwesomeIcon
            className="play"
            size="2x"
            icon={faPlay}
            onClick={playSongHandler}
          />
          <FontAwesomeIcon
            className="skip-forward"
            size="2x"
            icon={faAngleRight}
          />
        </div>
        <audio
          onTimeUpdate={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
        />
      </div>
    </>
  );
};
