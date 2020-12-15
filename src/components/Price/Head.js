import React from 'react'
import styles from "../styles.module.css"
import docs from "../../assets/docs.png"

const Head = () => {
    return (
        <section className={`${styles.docsHead} ${styles.bgPrimary} ${styles.py3}`}>
            <div className={`${styles.container} ${styles.grid}`}>
                <div>
                    <h1 className={styles.xl}>Docs</h1>
                    <p className={styles.lead}>
                        Learn how to work with the Loruki platform
                    </p>
                </div>
                <img src={docs} alt="docsImage"/>
            </div>
        </section>
    )
}

export default Head
