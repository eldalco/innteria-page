import styles from "../styles/sliderServices.module.css";
import React, { useState, useEffect } from "react";
import dataSlider from "../content/slider-ser-content";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const SliderServices = () => {
  const [slider, setSlider] = useState(0);

  const [data, setData] = useState({
    title: dataSlider[slider]["title"],
    slogan: dataSlider[slider]["slogan"],
    content: dataSlider[slider]["content"],
    imgUrl: dataSlider[slider]["imgUrl"],
    id: dataSlider[slider]["id"],
  });

  useEffect(() => {
    setData({
      title: dataSlider[slider]["title"],
      slogan: dataSlider[slider]["slogan"],
      content: dataSlider[slider]["content"],
      imgUrl: dataSlider[slider]["imgUrl"],
      id: dataSlider[slider]["id"],
    });
    const timerId = timer();
    return () => {
      clearInterval(timerId);
    };
  }, [slider]);

  let sliderValue = dataSlider.length - 1;
  const aumentar = () => {
    slider >= sliderValue ? setSlider((slider = 0)) : setSlider(slider + 1);
  };
  const disminuir = () => {
    slider <= 0 ? setSlider((slider = sliderValue)) : setSlider(slider - 1);
  };

  const generateKey = (pre) => {
    return `${pre}_${Math.random() * 100000}`;
  };

  const timer = () => {
    let sliderValue = dataSlider.length - 1;
    return setInterval(() => {
      slider >= sliderValue ? setSlider((slider = 0)) : setSlider(slider + 1);
    }, 8000);
  };

  return (
    <>
      <motion.div className={styles["container-slider"]} id="services">
        <motion.section
          key={generateKey(data.id)}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className={styles["slider-body-show"]}
        >
          <div className={styles["div-content"]}>
            <motion.div
              key={generateKey(data.id)}
              className={styles["col-1"]}
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
              <div className={styles["divider"]}></div>
              <h2>{data.title}</h2>
            </motion.div>
            <motion.div
              key={generateKey(data.id)}
              className={styles["col-2"]}
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
              <h3>{data.slogan}</h3>
              <p>{data.content}</p>
              <div className={styles["div-button"]}>
                <Link to="contact" spy={true} smooth={true}>
                  CONTACTO
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.div
            key={generateKey(data.id)}
            className={styles["div-img-slider"]}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3, ease: [0.17, 0.67, 0.83, 0.95] },
            }}
          >
            <img
              className={styles["img-slider"]}
              src={data.imgUrl}
              alt="Paginas web"
            />
          </motion.div>
        </motion.section>

        <div className={styles["div-row"]}>
          <img
            onClick={disminuir}
            className={styles["row"]}
            src="/img/arrow-left.png"
            alt="flecha izquierda"
          />
          <img
            onClick={aumentar}
            className={styles["row"]}
            src="/img/arrow-right.png"
            alt="flecha derecha"
          />
        </div>
      </motion.div>
    </>
  );
};
export default SliderServices;
