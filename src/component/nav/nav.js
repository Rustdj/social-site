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

                <div className={classes.h}>
                    <h1>Friends</h1>
                </div>
                <div className={classes.frendi}>
                    <div className={classes.item}>
                        <img src='https://bipbap.ru/wp-content/uploads/2017/08/0-70.jpg'/>
                        <div className={classes.name}>Sergey</div>
                    </div>
                    <div className={classes.item}>
                        <img src='https://bipbap.ru/wp-content/uploads/2017/08/0-70.jpg'/>
                        <div className={classes.name}>Bogdan</div>
                    </div>
                    <div className={classes.item}>
                        <img src='https://bipbap.ru/wp-content/uploads/2017/08/0-70.jpg'/>
                        <div className={classes.name}>Alex</div>
                    </div>
                </div>

            

        </div>
    )
}

export default Nav;