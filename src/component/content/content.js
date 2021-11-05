
import classes from './content.module.css';
import ProfileInfo from './profileInfo/profileInfo';
import MyPostContainer from './myPosts/myPostContainer';

const Content = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostContainer />
        </div>
    )
}

export default Content;