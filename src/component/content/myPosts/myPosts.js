import React from 'react';
import './myPosts.module.css';
import classes from './myPosts.module.css';
import Post from './post/post';

const MyPosts = (props) => {


     let postsElementsAll = props.postData.map( post => <Post message={post.message} likesCount={post.likesCount}/> );

   
     let newPostElement = React.createRef();

     let addPost = () => {
         let text = newPostElement.current.value;
         props.addPost(text);
     }
    
    return (
            <div className={classes.posts}>
                <input ref={newPostElement} type='text'/>
                <button onClick={ addPost } className={classes.btn}>Add post</button>
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