import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';

// create and import Player component
export const Player = () => (
  <>
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} />
        <FontAwesomeIcon className="play" icon={faPlay} />
        <FontAwesomeIcon className="skip-forward" icon={faAngleRight} />
      </div>
    </div>
  </>
);
