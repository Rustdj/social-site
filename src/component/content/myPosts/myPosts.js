import './myPosts.module.css';
import classes from './myPosts.module.css';
import Post from './post/post';

const MyPosts = () => {
 
    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 23},
        
        
     ]
    
    return (
            <div className={classes.posts}>
                <input type='text'/>
                <button className={classes.btn}>Click</button>
                <div className={classes.title}>
                    My posts
                </div>
                <Post message={postData [0].message} likesCount={postData [0].likesCount}/>
                <Post message={postData [1].message} likesCount={postData [1].likesCount}/>
                <Post />
                <Post/>
            </div>
    )
}

export default MyPosts;