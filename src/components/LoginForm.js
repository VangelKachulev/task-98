import styles from '../components/LoginForm.module.css'


export default function LoginForm() {


    return (
        <form >
            <label className={styles.label} htmlFor="username">Username</label>
            <input className={styles.input} type="text" id="username" />
            <label className={styles.label} htmlFor="password">Password</label>
            <input className={styles.input} type="text" id="password" />
            <button className={styles.submit}>Submit</button>
        </form>
    )
}