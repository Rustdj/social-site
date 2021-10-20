import classes from './profileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={classes.content}>
            <div className={classes.content}>
                <img className={classes.img} src='https://99px.ru/sstorage/56/2020/03/mid_333368_689628.jpg'/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;