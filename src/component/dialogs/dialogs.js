
import './dialogs.module.css';
import classes from './dialogs.module.css';
import DialogsItem from './dialogItem/dialogItem';
import Message from './message/message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {

let state = props.store.getState() .messagesPage;

 let dialodsElements = state.dialogData.map( dialog =>  <DialogsItem name={dialog.name} id={dialog.id}/>  );
 let messageElements = state.messagesData.map( message => <Message message={message.message}/> )
 let newMessageBody = state.newMessageBody;
 

 let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
 }

 let onNewMessageChange = (e) => {
     let body = e.target.value;
     props.store.dispatch(updateNewMessageBodyCreator(body));
 }

 

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={` ${classes.dialog} ${classes.active} `}>
                { dialodsElements } 
                </div>  
            </div>

            <div messages>
                { messageElements }  
            </div>
                <div><messageElements/></div>
                <div>
                <textarea value={newMessageBody} 
                    onChange={onNewMessageChange}
                    className={classes.textarea} type='text'/>
                <button onClick={ onSendMessageClick } className={classes.btn}>Click</button>
                </div>
        </div>
    )
}

export default Dialogs;