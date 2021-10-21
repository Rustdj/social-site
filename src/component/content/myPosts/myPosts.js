import './myPosts.module.css';
import classes from './myPosts.module.css';
import Post from './post/post';

const MyPosts = (props) => {

     let postsElementsAll = props.postData.map( post => <Post message={post.message} likesCount={post.likesCount}/> );
    
    return (
            <div className={classes.posts}>
                <input type='text'/>
                <button className={classes.btn}>Click</button>
                <div className={classes.title}>
                    My posts
                </div>
                    { postsElementsAll }
                    { postsElementsAll }
                    { postsElementsAll }
                <Post />
                <Post/>
            </div>
    )
}

export default MyPosts;