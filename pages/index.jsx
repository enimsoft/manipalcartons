import React from 'react'
import styles from '../styles/About.module.css'
import cx from 'classnames'
import correct from '../assets/Guarantee'
import Guarantee from '../assets/Guarantee'
import Quality from '../assets/Quality'
import Safety from '../assets/Safety'
import Card from '../components/Card/Card'
import Link from 'next/link'

import background from '../assets/background.jpg'
import Layout from '../components/Layout/Layout'

const About = () => {
    return (
        <div className={styles.container}>

            <section className={cx(styles.header, styles.grid)}>

                <div className={styles.imageContainer}>
                    <img src={background} className={styles.bgImage} />
                </div>

                <div className={styles.contentWrap}>
                    <h3>
                        The <strong>#1</strong> movers and packers in Manipal
                    </h3>
                    <br/>
                    <Link href="/order"><button>Deliver Now</button></Link>
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
                        <div className={styles.buttons}><Link href="/order"><button>Place Your Order</button></Link></div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.boxContent}>
                        <h1>Seamless Customer Support</h1>
                        <p>We want our customers to have a <strong>worry-free experience.</strong> We are always active on our support channels to address all your issues.</p><br />
                        <div className={styles.buttons}><Link href="/contact"><button className={styles.btn2}>Contact Us</button></Link></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default () => (<Layout><About/></Layout>)
