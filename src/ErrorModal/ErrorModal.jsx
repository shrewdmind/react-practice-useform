import { React } from 'react';
import styles from './errormodal.module.css';

const ErrorModal = (props) => {

    const onClosePopUp = () => {

        props.changeErrorState({
            error: false,
            errorMessage: ''
        })
    }

    return (
        <div className={styles.main}>
            <div className={styles.error}>
                <div className={styles.header}>
                    <h1>Unsuccessful</h1>
                </div>
                <div>
                    <p>{props.error.errorMessage}</p>
                    <button className={styles.input} onClick={onClosePopUp}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ErrorModal