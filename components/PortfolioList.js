import styles from "../styles/portfolioList.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import SetProjectsPortfolio from "./SetProjectsPortfolio";
import React, { useContext, useEffect } from "react";

const PortfolioList = ({ datos }) => {
    const generateKey = (pre) => {
        return `${pre}_${Math.random() * 100000}`;
    };

    return (
        <>
            <div className={styles["div-content-title"]}>
                <div className={styles["divider"]}></div>
                <h2>Portafolio</h2>
                <p>
                    Conoce una muestra de nuestra contribución a la transformación digital
                    de la empresas que han confiado en las habilidades del equipo de
                    Innteria.
                </p>
            </div>
            <SetProjectsPortfolio data ={datos}/>
            {/* <div className={styles["container-list"]}>
                {datos.map((project, index) => (
                    <div key={index} className={styles["container-project"]}>
                        {project.id % 2 === 0 ? (
                            <Link href={project.urlSite}>
                                <a target="_blank" rel="noreferrer noopener">
                                    <motion.section
                                        className={styles["section-1"]}
                                        initial={{
                                            opacity: 0,
                                            x: "-5%",
                                            transition: {
                                                duration: 1,
                                                ease: [0.17, 0.67, 0.83, 0.95],
                                            },
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                duration: 1,
                                                ease: [0.17, 0.67, 0.83, 0.95],
                                            },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: "-5%",
                                            transition: {
                                                duration: 0.3,
                                                ease: [0.17, 0.67, 0.83, 0.95],
                                            },
                                        }}
                                    >
                                        <div className={styles["div-img-1"]}>
                                            <img src={project.img} alt={project.name} />
                                        </div>

                                        <div className={styles["div-content-1"]}>
                                            <img src={project.logo} alt={project.name} />
                                            <h3>{project.location}</h3>
                                        </div>
                                    </motion.section>
                                </a>
                            </Link>
                        ) : (
                            <Link href={project.urlSite}>
                                <a target="_blank" rel="noreferrer noopener">
                                    <motion.section
                                        className={styles["section-2"]}
                                        initial={{
                                            opacity: 0,
                                            x: "5%",
                                            transition: {
                                                duration: 1,
                                                ease: [0.17, 0.67, 0.83, 0.95],
                                            },
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                duration: 1,
                                                ease: [0.17, 0.67, 0.83, 0.95],
                                            },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: "5%",
                                            transition: {
                                                duration: 0.3,
                                                ease: [0.17, 0.67, 0.83, 0.95],
                                            },
                                        }}
                                    >
                                        <div className={styles["div-content-2"]}>
                                            <img src={project.logo} alt={project.name} />
                                            <h3>{project.location}</h3>
                                        </div>
                                        <div className={styles["div-img-2"]}>
                                            <img src={project.img} alt={project.name} />
                                        </div>
                                    </motion.section>
                                </a>
                            </Link>
                        )}
                    </div>
                ))}
            </div> */}
        </>
    );
};
export default PortfolioList;
