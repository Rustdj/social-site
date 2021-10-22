import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/app';
import { addPost } from './redux/state';


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}
