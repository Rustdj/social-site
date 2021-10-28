
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
        ],
        newMessageBody: ''    
};

const dialogsReducer = (state = initialState, action) => { 
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 6,message: body});
            return state;
        default:
            return state;
    }
    
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;