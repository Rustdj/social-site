import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/app';
import store from './redux/state';


 let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);




