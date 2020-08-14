import React from 'react'
import styles from '../styles/About.module.css'
// import background from '/static/assets/background.jpg'

const about = () => {
    return (
        <div className={styles.container}>

            <header className={styles.header}>   

                <img src="/static/assets/background.jpg" className={styles.bgImage}/>

                {/* collapsible navbar */}
                <div className={styles.nav}></div>

                {/* title */}
                <h1>Manipal Cartons</h1>

                <div className={styles.contentWrap}>
                    <p>
                        The <strong>#1</strong> movers and packers in Manipal
                    </p>
                </div>
                <br />

                <button>Deliver Now</button>
            </header>

            <section className={styles.section_1}>
                <div className={styles.card}>
                    <div className={styles.logo}></div>
                    <div className={styles.contentWrap}>
                        <h3>
                            Quality
                        </h3>
                        <p>
                            We deliver on time and ensure you have the best experience
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.logo}></div>
                    <div className={styles.contentWrap}>
                        <h3>
                            Safety
                        </h3>
                        <p>
                            We use the best services for delivering to ensure your valuable luggage is safe
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.logo}></div>
                    <div className={styles.contentWrap}>
                        <h3>
                            Guarantee
                        </h3>
                        <p>
                            We value your feedback and are always there to address all of your issues
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section_2}>
                <div className={styles.contentWrap}>
                    <h1>Great service at a competitive price</h1>
                    <p>We strive to give our best to all our customers. With us you will get a <strong>carefree experience</strong> at a competitive price</p>
                    <br />
                    <button>Place your order</button>
                </div>
            </section>

            <section className={styles.section_3}>
                <div className={styles.contentWrap}>
                    <h1>Seamless Customer Support</h1>
                    <p>We want our customers to have a <strong>worry-free experience.</strong> We are always active on our support channels to address all your issues.</p>
                </div>
            </section>

            <footer className={styles.footer}>
                <div className={styles.box}>
                    <h3>Contact</h3>
                    <p>+91 8765435467</p>
                    <p>+91 8765435467</p>
                </div>

                <div className={styles.box}>
                    <h3>Support</h3>
                    <p>support@example.com</p>
                    <p>support2@example.com</p>
                </div>
            </footer>
        </div>
    )
}

export default about
