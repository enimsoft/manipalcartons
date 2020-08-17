import styles from '../styles/Form.module.css'
import cx from 'classnames'
import WithStateToggle from '../utils/WithStateToggle'
import Layout from '../components/Layout/Layout'
import Link from 'next/link'
import { useState } from 'react'
import axios from '../config/axios'
import send from '../config/axios'

const contact = ({ handler }) => {

    const [state, setstate] = useState({})
    async function onSubmit() {
        // if(Object.keys(state).filter(key => state[key]) != Object.keys(state)) return;
        console.log(state)
        await send('/contacts', state)
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.heading}>Contact Us</h1>
                <form className={cx(styles.grid, styles.form)}>
                    <div className={styles.label}>Name</div>
                    <div className={styles.input}><input type="name" className={styles.field}
                        onChange={(e) => setstate({ ...state, name: e.target.value })}
                    /></div>

                    <div className={styles.label}>Email</div>
                    <div className={styles.input}><input type="email" className={styles.field}
                        onChange={(e) => setstate({ ...state, email: e.target.value })}
                    /></div>

                    <div className={styles.label}>Phone</div>
                    <div className={styles.input}><input type="phone" className={styles.field}
                        onChange={(e) => setstate({ ...state, phone: e.target.value })}
                    /></div>

                    <div className={styles.label}>Description</div>
                    <div className={styles.input}><textarea className={styles.textarea}
                        onChange={(e) => setstate({ ...state, description: e.target.value })}
                    /></div>

                </form>
                <div className={styles.submit}><button class="btn2" onClick={async () => { await onSubmit(); handler(); }}>Submit</button></div>
            </div>
        </div>
    )
}

const done = ({ handler }) => (
    <div className={styles.container}>
        <div className={styles.card2}>
            <h1 className={styles.heading}>Contact Us</h1>
            <h2 className={styles.heading}>Your request has been submitted! We will contact you shortly.</h2>
            <div className={styles.submit2}><Link href="/"><button class="btn2">Okay</button></Link></div>
        </div>
    </div>
)

export default () => (<Layout><WithStateToggle {...{ Before: contact, After: done }} /></Layout>)