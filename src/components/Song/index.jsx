// import styles
import './style.scss';

// create and import song component
export const Song = ({ currentSong }) => (
  <>
    <div className="song-container">
      <img src={currentSong?.cover} alt={currentSong?.name} />
      <h2>{currentSong?.name}</h2>
      <h3>{currentSong?.artist}</h3>
    </div>
  </>
);
