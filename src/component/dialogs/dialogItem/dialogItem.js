import { NavLink } from 'react-router-dom';
import classes from './../dialogs.module.css';

const DialogsItem = (props) => {
    let path='/dialogs/' + props.id;
    return (
        <div className={classes.dialogs}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}



export default DialogsItem;