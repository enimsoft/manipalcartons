import styles from '../styles/Form.module.css'
import cx from 'classnames'
import WithStateToggle from '../utils/WithStateToggle'
import Layout from '../components/Layout/Layout'
import Link from 'next/link'
import { useState } from 'react'

// const img = require("../public/background.jpg");
const order = ({ handler }) => {

    const [state, setstate] = useState({
        name: null,
        email: null,
        phone: null,
        hostel: null,
        home: null,
        cartons: null,
        remarks: null,
        people: null,
        location: null,
        vehicle: null,
        vehicle_quantity: null
    })

    async function onSubmit() {
        // if(Object.keys(state).filter(key => state[key]) != Object.keys(state)) return;
        console.log(state)
        await fetch('/api/send',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ endpoint: "/orders", data: state })
            }
        )
    }

    const estimateTable = {
        "hostel": {
            1: 2500,
            2: 4500,
            3: 6000,
            4: 7000,
            5: 8000,
            6: 9000,
        },
        "flat": {
            1: 3000,
            2: 5000,
            3: 7000
        },
        "vehicle": {
            "cycle": 1000,
            "bike": 2000,
            "none": 0
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.heading}>Order</h1>
                <form className={cx(styles.grid, styles.form)}>
                    <div className={styles.label}>Name</div>
                    <div className={styles.input}><input name="name" type="name" className={styles.field}
                        onChange={e => setstate({ ...state, name: e.target.value })}
                    /></div>
                    <div className={styles.label}>Number Of People</div>
                    <div className={styles.input}><input name="people" type="name" className={styles.field}
                        onChange={e => setstate({ ...state, people: e.target.value })}
                    /></div>
                    <div className={styles.label}>Order Location</div>
                    <div className={styles.input}><input name="ordertype" type="radio" value="flat"
                        onChange={e => setstate({ ...state, location: e.target.value })}
                    />Flat
                    <input name="ordertype" type="radio" value="hostel"
                            onChange={e => setstate({ ...state, location: e.target.value })}
                        />Hostel
                    </div>
                    <div className={styles.label}>Vehicle</div>
                    <div className={styles.input}><input name="vehicle" type="radio" value="cycle"
                        onChange={e => setstate({ ...state, vehicle: e.target.value })}
                    />Cycle
                    <input name="vehicle" type="radio" value="bike"
                            onChange={e => setstate({ ...state, vehicle: e.target.value })}
                        />Bike
                    <input name="vehicle" type="radio" value="none"
                            onChange={e => setstate({ ...state, vehicle: e.target.value })}
                        />None
                    </div>

                    <div className={styles.label}>Number Of Vehicle</div>
                    <div className={styles.input}><input name="vehicles" type="name" className={styles.field}
                        onChange={e => setstate({ ...state, vehicle_quantity: e.target.value })}
                    /></div>

                    <div className={styles.label}>Email</div>
                    <div className={styles.input}><input name="email" type="email" className={styles.field}
                        onChange={e => setstate({ ...state, email: e.target.value })}
                    /></div>

                    <div className={styles.label}>Phone</div>
                    <div className={styles.input}><input name="phone" type="phone" className={styles.field}
                        onChange={e => setstate({ ...state, phone: e.target.value })}
                    /></div>

                    <div className={styles.label}>Hostel Address</div>
                    <div className={styles.input}><textarea name="hostel" type="address" className={styles.textarea}
                        onChange={e => setstate({ ...state, hostel: e.target.value })}
                    /></div>

                    <div className={styles.label}>Home Address</div>
                    <div className={styles.input}><textarea name="home" type="address" className={styles.textarea}
                        onChange={e => setstate({ ...state, home: e.target.value })}
                    /></div>

                    <div className={styles.label}>Estimated no. of cartons</div>
                    <div className={styles.input}><input name="cartons" type="number" className={styles.field}
                        onChange={e => setstate({ ...state, cartons: e.target.value })}
                    /></div>

                    <div className={styles.label}>Remarks (fragile items etc.)</div>
                    <div className={styles.input}><textarea name="remarks" className={styles.textarea}
                        onChange={e => setstate({ ...state, remarks: e.target.value })}
                    /></div>

                </form>
                <div className={styles.estimate}>
                    <h1>Estimate:</h1>
                    <div>{
                        state && state["vehicle"] && state["vehicle_quantity"] && state["people"] && state["location"] && <div>{estimateTable["vehicle"][state.vehicle]*parseInt(state.vehicle_quantity) + estimateTable[state.location][parseInt(state.people)]}</div>
                        }</div>
                </div>
                <div className={styles.submit}><button class="btn2"
                    onClick={
                        async () => {
                            await onSubmit();
                            handler();
                        }
                    }
                >Submit</button></div>
            </div>
        </div>
    )
}

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