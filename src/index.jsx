// import render method
import { render } from 'react-dom';
// import app component
import App from './components/App/index.jsx';
// import provider
import { Provider } from 'react-redux';
// configure store
import { configureStore } from './utils/store';
// import global styles
import './scss/global-styles.scss';

// create root const
const root = document.getElementById('root');

// render the app
render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  root
);
