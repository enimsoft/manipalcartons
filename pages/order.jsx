import styles from '../styles/Form.module.css'
import cx from 'classnames'
import WithStateToggle from '../utils/WithStateToggle'
import Layout from '../components/Layout/Layout'
import Link from 'next/link'

const order = ({ handler }) => (
    <div className={styles.container}>
        <div className={styles.card}>
            <h1 className={styles.heading}>Order</h1>
            <form className={cx(styles.grid, styles.form)}>
                <div className={styles.label}>Name</div><div className={styles.input}><input type="name" className={styles.field} /></div>
                <div className={styles.label}>Email</div><div className={styles.input}><input type="email" className={styles.field} /></div>
                <div className={styles.label}>Phone</div><div className={styles.input}><input type="phone" className={styles.field} /></div>
                <div className={styles.label}>Hostel Address</div><div className={styles.input}><textarea type="address" className={styles.textarea} /></div>
                <div className={styles.label}>Home Address</div><div className={styles.input}><textarea type="address" className={styles.textarea} /></div>
                <div className={styles.label}>Estimated no. of cartons</div><div className={styles.input}><input type="number" className={styles.field} /></div>
                <div className={styles.label}>Remarks (Any fragile items, flammable material etc.)</div><div className={styles.input}><textarea className={styles.textarea} /></div>
            </form>
            <div className={styles.submit}><button class="btn2" onClick={e => handler(e.target.value)}>Submit</button></div>
        </div>
    </div>
)

const done = ({ handler }) => (
    <div className={styles.container}>
        <div className={styles.card2}>
            <h1 className={styles.heading}>Order</h1>
            <h2 className={styles.heading}>Your request has been submitted! We will contact you shortly.</h2>
            <div className={styles.submit2}><Link href="/"><button class="btn2">Okay</button></Link></div>
        </div>
    </div>
)

export default () => (<Layout><WithStateToggle {...{ Before: order, After: done }} /></Layout>)