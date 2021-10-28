import './dialogs.module.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';



const DialogsContainer = (props) => {

let state = props.store.getState() .messagesPage;
 

 let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
 }

 let onNewMessageChange = (body) => {
     props.store.dispatch(updateNewMessageBodyCreator(body));
 }

 
    return <dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
    messagesPage={state}/>
}

export default DialogsContainer;