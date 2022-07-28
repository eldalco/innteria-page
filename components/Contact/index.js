import ContactForm from "../ContactForm";
import styles from "../../styles/contact.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <div className={styles["contact-container"]} id="contact">
        <motion.div
          className={styles["div-contact-data"]}
          initial={{
            opacity: 0,
            y: "-5%",
            transition: { duration: 1, ease: [0.17, 0.67, 0.83, 0.95] },
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.17, 0.67, 0.83, 0.95] },
          }}
          exit={{
            opacity: 0,
            y: "-5%",
            transition: { duration: 0.3, ease: [0.17, 0.67, 0.83, 0.95] },
          }}
        >
          <div className={styles["divider"]}></div>
          <h2>Nos emociona trabajar con emprendedores y empresas.</h2>
          <div className={styles["div-media"]}>
            <div className={styles["div-media-ind"]}>
              <div>
                <Link href="https://www.instagram.com/innteria_/">
                  <a target="_blank" rel="noreferrer noopener">
                    <img src="/img/instagram.png" alt="logo instagram" />
                  </a>
                </Link>
              </div>
              <div className={styles["div-info"]}>
                <h3>Instagram</h3>
                <Link href="https://www.instagram.com/innteria_/">
                  <a target="_blank" rel="noreferrer noopener">
                    <h4>@Innteria_</h4>
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles["div-media-ind"]}>
              <div>
                <Link href="mailto:info.innteria@gmail.com">
                  <a target="_blank" rel="noreferrer noopener">
                    <img src="/img/email.png" alt="logo correo" />
                  </a>
                </Link>
              </div>
              <div className={styles["div-info"]}>
                <h3>Correo</h3>
                <Link href="mailto:info.innteria@gmail.com">
                  <a target="_blank" rel="noreferrer noopener">
                    <h4>Info.innteria@gmail.com</h4>
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles["div-media-ind"]}>
              <div>
                <Link href="https://wa.link/rigi8n">
                  <a target="_blank" rel="noreferrer noopener">
                    <img src="/img/whatsapp.png" alt="logo whatsapp" />
                  </a>
                </Link>
              </div>
              <div className={styles["div-info"]}>
                <h3>Whatsapp</h3>
                <Link href="https://wa.link/rigi8n">
                  <a target="_blank" rel="noreferrer noopener">
                    <h4>350 541 0330</h4>
                  </a>
                </Link>
                <Link href="https://wa.link/oe333j">
                  <a target="_blank" rel="noreferrer noopener">
                    <h4>312 573 2651</h4>
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles["div-calendly"]}>
              <div>
                <Link href="https://calendly.com/innteria">
                  <a target="_blank" rel="noreferrer noopener">
                    <img src="/img/calendly.png" alt="logo calendly" />
                  </a>
                </Link>
              </div>
              <div className={styles["div-info"]}>
                <h3>Calendly</h3>
                <Link href="https://calendly.com/innteria">
                  <a target="_blank" rel="noreferrer noopener">
                    <h4>Calendly.com/innteria</h4>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles["div-form"]}
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
          <ContactForm />
        </motion.div>
      </div>
    </>
  );
}
