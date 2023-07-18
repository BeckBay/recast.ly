// TODO: Render the `App` component to the DOM
// import App from './components/App.js';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

console.log('hello');
// ReactDOM.render(
//   searchYouTube,
//   document.getElementById('app')
// );