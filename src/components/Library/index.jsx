import { LibrarySong } from '../LibrarySong/index.jsx';

export const Library = ({ songs = [] }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong key={song.id} currentSong={song} />
        ))}
      </div>
    </div>
  );
};
