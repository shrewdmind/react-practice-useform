import { React } from 'react';
import styles from './userform.module.css';
import { useState } from 'react';

const UserForm = (props) => {

    const [ userData, setUserData ] = useState({
        Username: '',
        Age: '',
        Gender: 'female'
    });

    const onSetUserName = (event) => {
        setUserData((prevData) => {
            return { ...prevData, Username: event.target.value }
        })
    }

    const onSetAge = (event) => {
        setUserData((prevData) => {
            return { ...prevData, Age: event.target.value}
        })
    }

    const onSetGender = (event) => {
        setUserData((prevData) => {
            return { ...prevData, Gender: event.target.value}
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            id: Math.random().toString(),
            username: userData.Username,
            age: userData.Age,
            gender: userData.Gender
        }

        props.onSubmitForm(user)

        setUserData({
            Username: '',
            Age: '',
            Gender: 'female',
        })
    }

    return (
        <form 
            className={styles.userform}
            onSubmit={handleSubmit}
            >
            <div className={styles.userprofile}>
                <label className={styles.label}>
                    Username:
                </label>
                <input 
                    className={styles.input} 
                    type='text' 
                    id='username'
                    value={userData.Username}
                    onChange={onSetUserName}
                />
            </div>
            <div className={styles.userprofile}>
                <label className={styles.label}>
                    Age (Years):
                </label>
                <input 
                    className={styles.input} 
                    type='text'
                    id='age'
                    value={userData.Age}
                    onChange={onSetAge}
                />
            </div>
            <label className={styles.gender}> Gender:</label>
            <select className={styles.selection} value={userData.Gender} onChange={onSetGender}>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </select>
            <button 
                className={styles.button}
                type='submit'
                value='Add User'
            >Add User</button>
        </form>
    );
}

export default UserForm;