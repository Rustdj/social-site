import React from 'react';
import './myPosts.module.css';
import classes from './myPosts.module.css';
import Post from './post/post';

const MyPosts = (props) => {
     let postsElementsAll = 
     props.postData.map( post => <Post message={post.message} likesCount={post.likesCount}/> );

   
     let newPostElement = React.createRef();

     let onAddPost = () => {
         props.addPost();
         //props.dispatch(addPostActionCreator());
     }

     let onPostChange = () => {
         let text = newPostElement.current.value;
          props.updateNewPostText(text);
     }
    
    return (
            <div className={classes.posts}>
                <input onChange={onPostChange} ref={newPostElement} value={props.newPostText} type='text'/>
                <button onClick={ onAddPost } className={classes.btn}>Add post</button>
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