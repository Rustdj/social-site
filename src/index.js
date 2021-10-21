import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/app';


let postData = [
  {id: 1, message: 'Hi, how are you?', likesCount: 12},
  {id: 2, message: "It's my first post", likesCount: 23}, 
]

let dialogData = [
  {id: 1, name: 'Rustam'},
  {id: 2, name: 'Dimych'},
  {id: 3, name: 'Andrey'},
  {id: 4, name: 'Sveta'},
  {id: 5, name: 'Sasha'},
  {id: 6, name: 'Victor'},
  {id: 7, name: 'Valera'}
]

let messagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your it?'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'},
  {id: 6, message: 'Yo'}
  
]


ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogData={dialogData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);


