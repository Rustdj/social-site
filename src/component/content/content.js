import { addPost } from '../../redux/state';
import classes from './content.module.css';
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './profileInfo/profileInfo';

const Content = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts postData={props.state.postData} addPost={props.addPost}/>
        </div>
    )
}

export default Content;