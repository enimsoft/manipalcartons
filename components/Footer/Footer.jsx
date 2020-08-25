import styles from './Footer.module.css';
import cx from 'classnames';
export default () => (
    <footer className={cx(styles.footer, styles.grid)}>
        <div className={styles.contentWrap}>
            <div className={styles.box}>
                <h3>Contact</h3>
                <p>+91 7760513189</p>
                <p>+91 8105780251</p>
            </div>

            <div className={styles.box}>
                <h3>Support</h3>
                <p>manipalcartons@gmail.com</p>
                {/* <p>support2@example.com</p> */}
            </div>

            <div className={styles.box}>
                <h3>Made By</h3>
                <a href="https://www.enim.ai" ><img src="/public/logo512.png" className={styles.enim} alt=""/></a>
                <p>Enim AI</p>
                {/* <p>support2@example.com</p> */}
            </div>
        </div>
    </footer>
)