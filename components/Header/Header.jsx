import styles from './Header.module.css'
import Link from 'next/link'
export default () => (
    <div className={styles.container}>
        <Link href="/"><div className={styles.logo}><h2>Manipal Cartons</h2></div></Link>
        <div className={styles.navbar}></div>
    </div>
)