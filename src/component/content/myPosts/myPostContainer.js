import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./myPosts";
import {connect} from 'react-redux';



// const mapStateToProps = () => {
//    return ( 
//    <StoreContext.Consumer> 
//        { 
//        (store) => {
//         let state = store.getState();
//         let addPost = () => {
//             store.dispatch(addPostActionCreator());
//         }
//         let onPostChange = (text) => {
//             let action = (updateNewPostTextActionCreator(text));
//             store.dispatch(action);
//         }
//          return <MyPosts updateNewPostText={onPostChange} 
//                     addPost={addPost} 
//                     postData={state.profilePage.postData} 
//                     newPostText={state.profilePage.newPostText}/>
//        }
//     }
//     </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;