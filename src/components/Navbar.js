import React from 'react'
import styles from "./styles.module.css"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={`${styles.container} ${styles.flex}`}>
                <h1 className={styles.logo}>Products</h1>
                <nav>
                    <ul className={styles.navlinks}>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/features"><li>Features</li></Link>
                        <Link to="/price"><li>Price</li></Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
