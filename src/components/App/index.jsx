// import hooks
import { useState } from 'react';
// adding components
import { Player } from '../Player/index.jsx';
import { Song } from '../Song/index.jsx';
// connect component
import { connect } from 'react-redux';

// create app component and export it
const App = ({ music = [] }) => {
  //state
  const [songs, setSongs] = useState(music);
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="app">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  music: state.music,
});

export default connect(mapStateToProps)(App);
