// import styles
import './style.scss';

// create and import song component
export const Song = ({ currentSong }) => (
  <>
    <div className="song-container">
      <img src={currentSong?.cover} alt={currentSong?.name} />
      <h1>{currentSong?.name}</h1>
      <h1>{currentSong?.artist}</h1>
    </div>
  </>
);
