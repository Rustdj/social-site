
import './dialogs.module.css';
import classes from './dialogs.module.css';
import DialogsItem from './dialogItem/dialogItem';
import Message from './message/message';


const Dialogs = (props) => {

 let dialodsElements = props.dialogData
 .map( dialog =>  <DialogsItem name={dialog.name} id={dialog.id}/>  );

 

 let messageElements = props.messagesData
 .map( message => <Message message={message.message}/> )

 

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialodsElements }   
            </div>

            <div messages>
                { messageElements }  
            </div>
        </div>
    )
}

export default Dialogs;