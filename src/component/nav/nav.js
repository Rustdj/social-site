import { NavLink } from 'react-router-dom';
import classes from './nav.module.css';


const Nav = () => {
    return (
        <div className={classes.nav}>
            <ul>
                <li className={classes.item}><NavLink to='/content' activeClassName={classes.active}>Profile</NavLink></li>
                <li className={`${classes.item} ${classes.active}`}><NavLink to='/dialogs' activeClassName={classes.active}>Message</NavLink></li>
                <li className={classes.item}><NavLink to='/listnews' activeClassName={classes.active}>News</NavLink></li>
                <li className={classes.item}><NavLink to='/music' activeClassName={classes.active}>Music</NavLink></li>
            </ul>
                <ul>
                    <li className={classes.item}><NavLink to='/setting' activeClassName={classes.active}>Setting</NavLink></li>
                </ul>
        </div>
    )
}

export default Nav;