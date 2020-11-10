// adding components
import { Player } from '../Player/index.jsx';
import { Song } from '../Song/index.jsx';

// create app component and export it
export const App = () => (
  <div className="app">
    <Song />
    <Player />
  </div>
);
