import styles from "../styles/loader.module.css";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Loader = () => {
    const [cover, setCover] = useState ();
    
    useEffect(() => { 
        setCover(cover = sessionStorage.getItem("num") || false)
    
       if (cover === false) {    
        setTimeout(()=> {
            setCover(cover = true)
        }, 3000) 
        sessionStorage.setItem("num", cover) 
        } 
    } , [] )
    setTimeout(()=> {
        setCover(cover = true)
    }, 3000)
   
    return (
        <div 
        className={styles[cover === false ? "container": "no-container"]}>
            <motion.div 
            className={styles["div-logo"]}
            initial={{
                opacity: 0,
                y: "-100%",
                transition: { duration: 1, ease: [0.17, 0.67, 0.83, 0.95] },
            }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: [0.17, 0.67, 0.83, 0.95] },
            }}
            exit={{
                opacity: 0,
                y: "-50%",
                transition: { duration: 0.3, ease: [0.17, 0.67, 0.83, 0.95] },
            }}>
            <img className={styles["img-logo"]} src="/img/logo.png" alt="Logo Innteria" />
            </motion.div>
            <div className={styles["div-back"]}>
                <img className={styles["img-back"]} src="/img/lineas-hexagonos-2000.png" alt="background" />
            </div>
        </div>
    )
}
export default Loader;