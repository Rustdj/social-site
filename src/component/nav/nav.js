import classes from './nav.module.css';


const Nav = () => {
    return (
        <div className={classes.nav}>
            <ul>
                <li><a href='#'>Profile</a></li>
                <li><a href='#'>Message</a></li>
                <li><a href='#'>News</a></li>
                <li><a href='#'>Music</a></li>
            </ul>
        </div>
    )
}

export default Nav;