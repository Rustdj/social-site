import {rerenderEntireTree} from './../render';

let state = {
    profilePage: {
      postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 23},
      ]
    },
    messagesPage: {
      dialogData: [
        {id: 1, name: 'Rustam'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Victor'},
        {id: 7, name: 'Valera'}
      ],
      messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
      ]

    },
    sidebar: {
      
    }
  }

  export let addPost = (postMessage) => {
    let newPost = {
      id: 5,
      message: postMessage,
      likesCount: 0
    };

    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);

  }
  

  export default state;