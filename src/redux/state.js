const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state: {
    profilePage: {
      postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 23},
      ],
      //newPostText: 'hello'
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
  },
  _callSubscriber () {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  
  subscribe (observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
    
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
    }
  }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newText: text})


  export default store;
  window.store = store;