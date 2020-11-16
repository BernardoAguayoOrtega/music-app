// use ref
import { useRef } from 'react';
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
  const audioRef = useRef(null);

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="player">
        <div className="time-control">
          <p>Start Time</p>
          <input type="range" />
          <p>End Time</p>
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
        <audio ref={audioRef} src={currentSong.audio} />
      </div>
    </>
  );
};
