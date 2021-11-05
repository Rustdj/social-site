import './dialogs.module.css';
import classes from './dialogs.module.css';
import DialogsItem from './dialogItem/dialogItem';
import Message from './message/message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'


const Dialogs = (props) => {

 let state = props.messagesPage;
 
 let dialodsElements = state.dialogData.map( dialog =>  <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id}/>  );
 let messageElements = state.messagesData.map( messages => <Message message={messages.message} key={messages.id}/> )
 let newMessageBody = state.newMessageBody;
 

 let onSendMessageClick = () => {
    props.sendMessage();
 }

 let onNewMessageChange = (e) => {
     let body = e.target.value;
     props.updateNewMessageBodyCreator(body);
     
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