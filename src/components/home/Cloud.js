import React from 'react'
import cloud from "../../assets/cloud.png"
import styles from "../styles.module.css"
import {Link} from "react-router-dom"

const Cloud = () => {
    return (
        <section className={`${styles.cloud} ${styles.bgPrimary} ${styles.my2} ${styles.py2}`}>
            <div className={`${styles.container} ${styles.grid}`}>
                <div className={styles.textCenter}>
                    <h2 className={styles.lg}>Extreme Cloud Hosting</h2>
                    <p className={`${styles.lead} ${styles.my1}`}> Cloud hosting like you've never seen. Fast, efficient and scalable</p>
                    <Link to="/features" className={`${styles.btn} ${styles.btnDark}`}>Read More </Link>
                </div>
                <img src={cloud} alt="Cloud Services" />
            </div>
        </section>
    )
}

export default Cloud
