import styles from "../styles/serviceSection.module.css";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const ServiceSection = ({dataSlider, titulo, contenido}) => {
    const [slider, setSlider] = useState (1);   
    const [data, setData] = useState({        
        img: dataSlider[slider]["img"],
        id: dataSlider[slider]["id"]       
    });
    useEffect(() => {
        setData({            
            img: dataSlider[slider]["img"],
            id: dataSlider[slider]["id"]            
        });
    }, [slider]);

    let sliderValue = dataSlider.length -1;
    setTimeout(()=> {
        slider >= sliderValue ? setSlider(slider = 0): setSlider(slider + 1);
    },3000);

    return (
        <>
        <section className={styles["section-container"]}>
            <div className={styles["div-img"]}>
                <motion.img 
                key={data.id}
                src={data.img} 
                alt={titulo} 
                initial={{
                    opacity: 0,          
                    transition: { duration: 1, ease: [0.17, 0.67, 0.83, 0.95] },
                  }}
                  animate={{
                    opacity: 1,          
                    transition: { duration: 1, ease: [0.17, 0.67, 0.83, 0.95] },
                  }}
                  exit={{
                    opacity: 0,          
                    transition: { duration: 0.3, ease: [0.17, 0.67, 0.83, 0.95] },
                  }}/>
            </div>            
            <div className={styles["div-content"]}>
                <h3>{titulo}</h3>
                <p>{contenido}</p>
            </div>
        </section>
        
        </>
    )
}
export default ServiceSection;