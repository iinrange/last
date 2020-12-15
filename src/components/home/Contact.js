import React from 'react'
import styles from "../styles.module.css"
import Cli from "../../assets/cli.png"

const Contact = () => {
    return (
        <section className={styles.cli}>
            <div className={`${styles.container} ${styles.grid}`}>
                <img src={Cli} alt="Cli"/>
                <div className={styles.card}>
                    <h3>Easy to use, cross platform CLI</h3>
                </div>
                <div className={styles.card}>
                    <h3>Deploy in seconds</h3>
                </div>
            </div>
        </section>
    )
}

export default Contact
