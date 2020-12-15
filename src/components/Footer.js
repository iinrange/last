import React from 'react'
import {Link} from "react-router-dom"
import styles from "./styles.module.css"

const Footer = () => {
    var date = new Date()
    var Copyright = date.getFullYear()


    return (
        <footer className={`${styles.footer} ${styles.bgDark}  ${styles.py5}`}>
            <div className={`${styles.container} ${styles.grid}  ${styles.grid3}`}>
                <div>
                    <h1>Loruki
                    </h1>
                    <p>Copyright &copy; {Copyright}</p>
                </div>
                <nav>
                    <ul className={styles.footerlinks}>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/features"><li>Features</li></Link>
                        <Link to="/price"><li>Price</li></Link>
                    </ul>
                </nav>
                <div className={styles.social}>
                    <a href="http://github.com"><i class="fab fa-github fa-2x"></i></a>
                    <a href="http://facebook.com"><i class="fab fa-facebook fa-2x"></i></a>
                    <a href="http://instagram.com"><i class="fab fa-instagram fa-2x"></i></a>
                    <a href="http://twitter.com"><i class="fab fa-twitter fa-2x"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
