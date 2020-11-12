// adding components
import { Player } from '../Player/index.jsx';
import { Song } from '../Song/index.jsx';
// import util
import data from '../../utils/data';

// create app component and export it
export const App = () => (
  <div className="app">
    <Song />
    <Player />
  </div>
);
