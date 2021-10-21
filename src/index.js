import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/app';
import state from './redux/state';


ReactDOM.render(
  <React.StrictMode>
    <App appState={state} />
  </React.StrictMode>,
  document.getElementById('root')
);


