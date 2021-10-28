
import classes from './content.module.css';
import ProfileInfo from './profileInfo/profileInfo';
import MyPostContainer from './myPosts/myPostContainer';

const Content = (props) => {
    debugger;
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostContainer store={props.store} />
        </div>
    )
}

export default Content;