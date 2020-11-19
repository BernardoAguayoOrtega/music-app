// import hooks
import { useState } from 'react';
// adding components
import { Player } from '../Player/index.jsx';
import { Song } from '../Song/index.jsx';
import { Library } from '../Library/index.jsx';
// connect component
import { connect } from 'react-redux';

// create app component and export it
const App = ({ music = [] }) => {
  //state
  const [songs] = useState(music);
  const [currentSong] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="app">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  music: state.music,
});

export default connect(mapStateToProps)(App);
