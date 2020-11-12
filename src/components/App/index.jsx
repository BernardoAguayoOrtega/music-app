// import hooks
import { useState } from 'react';
// adding components
import { Player } from '../Player/index.jsx';
import { Song } from '../Song/index.jsx';
// import util
import data from '../../utils/data';

// create app component and export it
export const App = () => {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="app">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
};
