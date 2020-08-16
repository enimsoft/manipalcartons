import styles from '../styles/Contact.module.css'
import cx from 'classnames'
import { useState } from 'react'
import WithStateToggle from '../utils/WithStateToggle'
import Layout from '../components/Layout/Layout'
import Link from 'next/link'

const contact = ({ handler }) => (
    <div className={styles.container}>
        <div className={styles.card}>
            <h1 className={styles.heading}>Contact Us</h1>
            <form className={cx(styles.grid, styles.form)}>
                <div className={styles.label}>Name</div><div className={styles.input}><input type="name" className={styles.field} /></div>
                <div className={styles.label}>Email</div><div className={styles.input}><input type="email" className={styles.field} /></div>
                <div className={styles.label}>Phone</div><div className={styles.input}><input type="phone" className={styles.field} /></div>
                <div className={styles.label}>Description</div><div className={styles.input}><textarea className={styles.textarea} /></div>
            </form>
            <div className={styles.submit}><button class="btn2" onClick={e => handler(e.target.value)}>Submit</button></div>
        </div>
    </div>
)

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