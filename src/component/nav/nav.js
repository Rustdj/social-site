import classes from './nav.module.css';


const Nav = () => {
    return (
        <div className={classes.nav}>
            <ul>
                <li><a href='/content'>Profile</a></li>
                <li><a href='/dialogs'>Message</a></li>
                <li><a href='/listnews'>News</a></li>
                <li><a href='/music'>Music</a></li>
            </ul>
                <ul>
                    <li><a href='/setting'>Setting</a></li>
                </ul>
        </div>
    )
}

export default Nav;