import classes from './content.module.css';
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './profileInfo/profileInfo';

const Content = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
            
        </div>
    )
}

export default Content;