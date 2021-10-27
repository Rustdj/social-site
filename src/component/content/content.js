import { addPost } from '../../redux/state';
import classes from './content.module.css';
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './profileInfo/profileInfo';

const Content = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData}
                     newPostText={props.profilePage.newPostText} 
                     dispatch={props.dispatch}
                     />
        </div>
    )
}

export default Content;