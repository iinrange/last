import React from 'react'
import server from "../../assets/server.png"
import styles from "../styles.module.css"

const Head = () => {
    return (
        <section className={`${styles.featuresHead} ${styles.bgPrimary} ${styles.py3}`}>
            <div className={`${styles.container} ${styles.grid}`}>
                <div>
                    <h1 className={styles.xl}>Features</h1>
                    <p className={styles.lead}>
                        Check out the features of Loruki that separate us from the
                            competition
                    </p>
                </div>
                <img src={server} alt="ServerImage"/>
            </div>
        </section>
    )
}

export default Head
