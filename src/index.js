import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/app';
import store from './redux/redux-store';
import { Provider } from 'react-redux';


 let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireTree();

// store.subscribe( () => {
//   rerenderEntireTree();
// });




