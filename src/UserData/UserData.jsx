import { React } from 'react';
import styles from './userdata.module.css'
import ConcreateUserData from './ConcreteUserData';

const UserData = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.userdata}>
                <p className={`header ${styles.username}`}>Username</p>
                <p className={`header ${styles.age}`}>Age</p>
                <p className={`header ${styles.gender}`}>Gender</p>
            </div>
            <hr className={styles.break}/>
            <ul>
                {props.users.map((user) => 
                    <ConcreateUserData
                        key={user.id}
                        username={user.username}
                        age={user.age}
                        gender={user.gender}
                    />
                )}
            </ul>
        </div>
    )
}

export default UserData;