import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/app';
import  {rerenderEntireTree}  from './render';
import state from './redux/state';



rerenderEntireTree(state);




