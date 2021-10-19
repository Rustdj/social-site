import './post.module.css';
import classes from './post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={classes.post}>
                <img className={classes.img} src='https://datavyhoda.ru/wp-content/uploads/2019/02/avatar-3-data-vyhoda.jpg'/>
                <div className={classes.descr}>{props.message}</div>
            </div>
            <span>&#9829;</span>
        </div>
    )
}

export default Post;