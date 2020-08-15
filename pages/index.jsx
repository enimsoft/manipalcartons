import React from 'react'
import styles from '../styles/AboutMobile.module.css'
import cx from 'classnames'
import correct from '../assets/Guarantee'
import Guarantee from '../assets/Guarantee'
import Quality from '../assets/Quality'
import Safety from '../assets/Safety'
import Card from '../components/Card/Card'

import background from '../assets/background.jpg'

const About = () => {
    return (
        <div className={styles.container}>

            <section className={cx(styles.header, styles.grid)}>

                <div className={styles.imageContainer}>
                    <img src={background} className={styles.bgImage} />
                </div>
                {/* collapsible navbar */}
                <div className={styles.nav}></div>

                <div className={styles.contentWrap}>
                    {/* title */}
                    <h1><strong>Manipal Cartons</strong></h1>
                    <br/><br/>
                    <p>
                        The <strong>#1</strong> movers and packers in Manipal
                    </p>
                    <br />

                    <button>Deliver Now</button>
                </div>
            </section>

            <section className={cx(styles.section_1, styles.grid)}>
                <div>
                    <div>
                        <Card
                            {...{
                                styles: styles,
                                logo: <Quality/>,
                                heading: "Quality",
                                content: "We deliver on time and ensure you have the best experience"
                            }}
                        ></Card>
                    </div>
                    <div>
                        <Card
                            {...{
                                styles: styles,
                                logo: <Safety/>,
                                heading: "Safety",
                                content: "We use the best services for delivering to ensure your valuable luggage is safe"
                            }}
                        ></Card>
                    </div>
                    <div>
                        <Card
                            {...{
                                styles: styles,
                                logo: <Guarantee/>,
                                heading: "Guarantee",
                                content: "We value your feedback and are always there to address all of your issues."
                            }}
                        ></Card>
                    </div>
                </div>
            </section>

            <section className={cx(styles.section_2, styles.grid)}>
                <div className={styles.box}>
                    <div className={styles.boxContent}>
                        <h1>Great service at a competitive price</h1>
                        <p>We strive to give our best to all our customers. With us you will get a <strong>carefree experience</strong> at a competitive price</p>
                        <br />
                        <div className={styles.buttons}><button>Place Your Order</button></div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.boxContent}>
                        <h1>Seamless Customer Support</h1>
                        <p>We want our customers to have a <strong>worry-free experience.</strong> We are always active on our support channels to address all your issues.</p><br />
                        <div className={styles.buttons}><button className={styles.btn2}>Contact Us</button></div>
                    </div>
                </div>
            </section>

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
                </div>
            </footer>
        </div>
    )
}

export default About
