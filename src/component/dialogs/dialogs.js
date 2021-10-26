
import './dialogs.module.css';
import classes from './dialogs.module.css';
import DialogsItem from './dialogItem/dialogItem';
import Message from './message/message';


const Dialogs = (props) => {

 let dialodsElements = props.state.dialogData
 .map( dialog =>  <DialogsItem name={dialog.name} id={dialog.id}/>  );

 

 let messageElements = props.state.messagesData
 .map( message => <Message message={message.message}/> )

 

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
                <textarea className={classes.textarea} type='text'/>
                <button className={classes.btn}>Click</button>
        </div>
    )
}

export default Dialogs;