import { NavLink } from 'react-router-dom';
import './dialogs.module.css';
import classes from './dialogs.module.css';

const DialogsItem = (props) => {

    let path='/dialogs/' + props.id;
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

    
}

const Message = (props) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {

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

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogsItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogsItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogsItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogsItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogsItem name={dialogData[4].name} id={dialogData[4].id}/>
                <DialogsItem name={dialogData[5].name} id={dialogData[5].id}/>
                <DialogsItem name={dialogData[6].name} id={dialogData[6].id}/>
            </div>
            <div messages>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>
            </div>

        </div>
    )
}

export default Dialogs;