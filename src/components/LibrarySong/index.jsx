import './style.scss';

export const LibrarySong = ({ currentSong }) => (
  <>
    <div className="library-song">
      <img src={currentSong?.cover} alt={currentSong?.name} />
      <h3>{currentSong?.name}</h3>
      <h4>{currentSong?.artist}</h4>
    </div>
  </>
);
