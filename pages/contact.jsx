import styles from '../styles/Contact.module.css'
import cx from 'classnames'

const contact = () => (
    <div className={styles.container}>
        <h1>Contact Us</h1>
        <form className={cx(styles.grid, styles.card)}>
            <div className={styles.label}>Name:</div><div className={styles.input}><input className={styles.field}/></div>
            <div className={styles.label}>Email:</div><div className={styles.input}><input className={styles.field}/></div>
            <div className={styles.label}>Phone:</div><div className={styles.input}><input className={styles.field}/></div>
            <div className={styles.label}>Description:</div><div className={styles.input}><textarea className={styles.textarea}/></div>
            <div className={styles.submit}><button class="btn2">Submit</button></div>
        </form>
    </div>
)

export default contact