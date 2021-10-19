import classes from './content.module.css';
import MyPosts from './myPosts/myPosts';

const Content = () => {
    return (
        <div className={classes.content}>
            <div className={classes.content}>
                <img className={classes.img} src='https://99px.ru/sstorage/56/2020/03/mid_333368_689628.jpg'/>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Content;