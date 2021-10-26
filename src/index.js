import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/app';
//import  {rerenderEntireTree}  from './render';
import { addPost, subscribe, updateNewPostText } from './redux/state';
import store from './redux/state';


 let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);




