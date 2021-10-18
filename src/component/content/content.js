import classes from './content.module.css';

const Content = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.img} src='https://99px.ru/sstorage/56/2020/03/mid_333368_689628.jpg'/>
            </div>
            <div className={classes.descr}>
                ava + descr
            </div>
            <div className={classes.descr}>
                My posts
                <div>
                    new post
                </div>
                <dic>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </dic>
            </div>
        </div>
    )
}

export default Content;