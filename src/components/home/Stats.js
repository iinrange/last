import React from 'react'
import styles from "../styles.module.css"

const Stats = () => {
    return (
        <section className={styles.stats}>
            <div className={styles.container}>
                <h3 className={`${styles.statsHeading} ${styles.textCenter} ${styles.my1} `}>
                    Welcome to the best platform for building applications of <br/>all types with modern architecture and scaling
                </h3>

                <div className={`${styles.grid} ${styles.grid3} ${styles.textCenter} ${styles.my4}`}>
                    <div>
                        <i class="fas fa-server fa-3x"></i>
                        <h3>10,349,405</h3>
                        <p className={styles.textSecondary}>Deployments</p>
                    </div>
                    <div>
                        <i class="fas fa-upload fa-3x"></i>
                        <h3>987 TB</h3>
                        <p className={styles.textSecondary}>Published</p>
                    </div>
                    <div>
                        <i class="fas fa-project-diagram fa-3x"></i>
                        <h3>2,343,265</h3>
                        <p cclassName={styles.textSecondary}>Projects</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats
