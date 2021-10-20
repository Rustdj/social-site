import classes from './content.module.css';
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './profileInfo/profileInfo';

const Content = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Content;