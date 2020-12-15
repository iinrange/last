import React from 'react'
import node from "../../assets/logos/node.png"
import python from "../../assets/logos/python.png"
import csharp from "../../assets/logos/csharp.png"
import ruby from "../../assets/logos/ruby.png"
import php from "../../assets/logos/php.png"
import scala from "../../assets/logos/scala.png"
import clojure from "../../assets/logos/clojure.png"
import styles from "../styles.module.css"

const Lenguages = () => {
    return (
        <section className={styles.lenguages}>
            <h2 className={`${styles.md} ${styles.textCenter} ${styles.my2}`}>
                Supported Languages
            </h2>
            <div className={`${styles.container} ${styles.flex}`}>
                <div className={styles.card}>
                    <h4>Node.js</h4>
                    <img src={node} alt=""/>
                </div>
                <div className={styles.card}>
                    <h4>Python</h4>
                    <img src={python} alt=""/>
                </div>
                <div className={styles.card}>
                    <h4>C#</h4>
                    <img src={csharp} alt=""/>
                </div>
                <div className={styles.card}>
                    <h4>Ruby</h4>
                    <img src={ruby} alt=""/>
                </div>
                <div className={styles.card}>
                    <h4>PHP</h4>
                    <img src={php} alt=""/>
                </div>
                <div className={styles.card}>
                    <h4>Scala</h4>
                    <img src={scala} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Lenguages
