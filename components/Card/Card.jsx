import styles from './Card.module.css'

export default ({ logo, heading, content }) => (
    <div className={styles.card}>
        <div className={styles.logo}>{logo}</div>
        <div className={styles.cardContent}>
            <h3>{heading}</h3>
            <p>{content}</p>
        </div>
    </div>
)