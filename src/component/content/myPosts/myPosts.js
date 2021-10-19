import './myPosts.module.css';
import classes from './myPosts.module.css';
import Post from './post/post';

const MyPosts = () => {
    
    return (
            <div className={classes.posts}>
                <input type='text'/>
                <button className={classes.btn}>Click</button>
                <div className={classes.title}>
                    My posts
                </div>
                <Post message='Hi, how are you?'/>
                <Post message="It's my first post"/>
                <Post />
                <Post/>
            </div>
    )
}

export default MyPosts;