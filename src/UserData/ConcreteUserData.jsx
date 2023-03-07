import { React } from 'react';
import styles from './userdata.module.css'

const ConcreateUserData = (props) => {
    return (
        <li className={styles.concreate_user}>
            <p className={`header ${styles.concreate_name}`}>{props.username}</p>
            <p className={`header ${styles.concreate_age}`}>{props.age}</p>
            <p className={`header ${styles.concreate_gender}`}>{props.gender}</p>
        </li>
    );
}

export default ConcreateUserData;