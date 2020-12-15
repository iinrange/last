import React from 'react'
import styles from '../styles.module.css'
import server2 from "../../assets/server2.png"


const Subhead = () => {
    return (
        <div>
            <section className={`${styles.featuresSubhead} ${styles.bgLight} ${styles.py3}`}>
                <div className={`${styles.container} ${styles.grid}`}>
                    <div>
                        <h1 className={styles.md}>The Loruki Platform</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Dolor cupiditate dignissimos temporibus perspiciatis quae! 
                            Suscipit qui, consectetur ea consequatur, doloribus repellendus quasi, 
                            aut corporis nam alias culpa. Nostrum, inventore accusantium!
                        </p>
                    </div>
                    <img src={server2 }alt="serverimage" />
                </div>
            </section>

            <section className={`${styles.featuresMain} ${styles.my2}`}>
            <div className={`${styles.container} ${styles.grid} ${styles.grid3}`}>
                <div className={`${styles.card} ${styles.flex}`}>
                        <i class="fas fa-server fa-3x"></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas nemo saepe corrupti et dolorem voluptate at, nostrum rem voluptatem 
                            ab alias quia molestiae ea, libero nihil deserunt. Molestias, eum? Necessitatibus!</p>
                    </div>
                    <div className={`${styles.card} ${styles.flex}`}>
                        <i class="fas fa-network-wired fa-3x"></i>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
                            dignissimos ipsum!
                        </p>
                    </div>
                    <div className={`${styles.card} ${styles.flex}`}>
                        <i class="fas fa-laptop-code fa-3x"></i>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                            magnam.
                        </p>
                    </div>
                    <div className={`${styles.card} ${styles.flex}`}>
                        <i class="fas fa-database fa-3x"></i>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, a!
                        </p>
                    </div>
                    <div className={`${styles.card} ${styles.flex}`}>
                        <i class="fas fa-power-off fa-3x"></i>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                            magnam.
                        </p>
                    </div>
                    <div className={`${styles.card} ${styles.flex}`}>
                        <i class="fas fa-upload fa-3x"></i>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                            magnam.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Subhead
