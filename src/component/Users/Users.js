import React from "react";
import styles from './users.module.css';

const Users = (props) => {
    if (props.users.lenght === 0) {
        props.setUsers(     [
                {
                    id: 1,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/274px-Dwayne_Johnson_2%2C_2013.jpg', 
                    followed: false,
                    fullname: 'Rustam', 
                    status: 'I am a boss', 
                    location: {city: "Saint-P", country: "Russia"} },

                {
                    id: 2, 
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/274px-Dwayne_Johnson_2%2C_2013.jpg', 
                    followed: true, 
                    fullname: 'Andrey', 
                    status: 'I am a employe', 
                    location: {city: "Saint-P", country: "Russia"} },

                {
                    id: 3, 
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/274px-Dwayne_Johnson_2%2C_2013.jpg', 
                    followed: false, 
                    fullname: 'Dimych', 
                    status: 'I am a employe', 
                    location: {city: "Saint-P", country: "Russia"} }
            ] 
        )
    }
    return <div>
        {
                props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        { u.followed 
                        ? <button className={styles.userBtn} onClick={ () => { props.unfollow(u.id) } }>Unfollow</button> 
                        : <button className={styles.userBtn} onClick={ () => { props.follow(u.id) } }>Follow</button> }
                    </div>
                </span>
                   <span>
                    <span>
                        <div className={styles.userName}>{u.fullname}</div>
                        <div className={styles.userDescr}>{u.status}</div>
                    </span>
                    <span>
                        <div className={styles.userDescr}>{u.location.country}</div>
                        <div className={styles.userDescr}>{u.location.city}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    
}

export default Users;