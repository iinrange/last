import React from 'react'
import styles from "../styles.module.css"
import {Link} from "react-router-dom"

const Showcase = () => {
    return (
        <section className={styles.showcase}>
            <div className={`${styles.container} ${styles.grid}`}> 
                <div className={styles.showcaseText}>
                    <h1>Easier Access</h1>
                    <p>Sell Producst of all kinds, from large scale enterprise APIs to static personal projects for individuals. Fill out the form to try out our platform</p>
                    <Link to="/features" className={`${styles.btn} ${styles.btnOutlined}`}>Read More</Link>
                </div>  
            
        

                <div class={`${styles.showcaseForm} ${styles.card} ${styles.bgWhite}`}>
                    <h2>Request a Demo</h2>
                    <form autoComplete="off"name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact"/>
                        <p className={styles.hidden}>
                            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                        </p>
                        <div className={styles.formControl}>
                            <input type="text" name="name" placeholder="Name" required />
                        </div>
                        <div className={styles.formControl}>
                            <input type="text" name="company" placeholder="Company Name" required />
                        </div>
                        <div className={styles.formControl}>
                            <input type="email" name="email" placeholder="Email" required/>
                        </div>
                        <input type="submit" value="Send" className={`${styles.btn} ${styles.btnPrimary}`} />
                    </form>
                </div>
            </div>
        </section>       
    )
};

export default Showcase
