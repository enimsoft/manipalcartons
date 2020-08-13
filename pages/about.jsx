import React from 'react'
import styles from '../styles/About.module.css'

const about = () => {
    return (
        <div className={styles.container}>

            <header className={styles.header}>
                {/* collapsible navbar */}
                <div className={styles.nav}></div>

                {/* title */}
                <div className={styles.headerTitle}>Manipal Cartons</div>

                <div className={styles.wrappertext}>
                    <p className={styles.headerText}>
                        The <strong>#1</strong> movers and packers in Manipal
                    </p>
                </div>

                <div className={styles.button}>Deliver Now</div>
            </header>

            <section className={styles.section_1}>
                <div className={styles.card}>
                    <div className={styles.logo}></div>
                    <div className={styles.contentWrap}>
                        <div className={styles.cardTitle}>
                            Quality
                        </div>
                        <p>
                            We deliver on time and ensure you have the best experience
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.logo}></div>
                    <div className={styles.contentWrap}>
                        <div className={styles.cardTitle}>
                            Safety
                        </div>
                        <p>
                            We use the best services for delivering to ensure your valuable luggage is safe
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.logo}></div>
                    <div className={styles.contentWrap}>
                        <div className={styles.cardTitle}>
                            Guarantee
                        </div>
                        <p>
                            We value your feedback and are always there to address all of your issues
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section_2}>
                <div className={styles.contentWrap}>
                    <div className={styles.heading}>Great service at a competitive price</div>
                    <p>We strive to give our best to all our customers. With us you will get a carefree experience at a competitive price</p>
                    <div className={styles.button}>Place your order</div>
                </div>
            </section>

            <section className={styles.section_3}>
                <div className={styles.contentWrap}>
                    <div className={styles.heading}>Seamless Customer Support</div>
                    <p>We want our customers to have a worry-free experience. We are always active on our support channels to address all your issues.</p>
                    <div className={styles.button}>Place your order</div>
                </div>
            </section>

            <footer className={styles.footer}></footer>
        </div>
    )
}

export default about
