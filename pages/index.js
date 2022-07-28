import styles from "../styles/home.module.css";
import Layout from "../components/Layout";
import Head from "../components/Head";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Layout>
        <Head
          titulo="Innteria - Empresa de desarrollo de software"
          descripcion="Innteria es una empresa que acompaña, desarrolla e implementa todo el proceso de transformación digital de las empresas."
        />
        <motion.div
          className={styles["container-home"]}
          id="home"
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
          }}
        >
          <motion.div
            className={styles["div-content"]}
            initial={{
              opacity: 0,
              y: "5%",
              transition: { duration: 1, ease: [0.17, 0.67, 0.83, 0.95] },
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: [0.17, 0.67, 0.83, 0.95] },
            }}
            exit={{
              opacity: 0,
              y: "5%",
              transition: { duration: 0.3, ease: [0.17, 0.67, 0.83, 0.95] },
            }}
          >
            <img
              className={styles["img-title"]}
              src="/img/innteria-title.webp"
              alt="Titulo Innteria"
            />
            <div className={styles["divider"]}></div>
            <h1 className={styles["title"]}>
              Consigue la transformación digital de tu empresa.
            </h1>
            <p>
              Acompañamos, desarrollamos e implementamos todo el proceso
              mediante una experiencia integra, humana y personalizada
            </p>
            <h2>coding a better future</h2>
            <div className={styles["div-button"]}>
              <Link to="contact" spy={true} smooth={true}>
                CONTACTO
              </Link>
            </div>
          </motion.div>
          <motion.div
            className={styles["div-img-pc"]}
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
            }}
          >
            <img
              className={styles["img-pc"]}
              src="/img/innteria_hero-pc-home.webp"
              alt="Innteria PC"
            />
          </motion.div>
        </motion.div>
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </Layout>
    </>
  );
}
