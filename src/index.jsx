// import render method
import { render } from 'react-dom';
// import app component
import { App } from './components/App/index.jsx';

// create root const
const root = document.getElementById('root');

// render the app
render(
	<>
		<h1>I'm the app and I'm alive</h1>
		<App />
	</>,
	root,
);
