import styles from "../styles/sliderTestimonials.module.css";
import React, { useState, useEffect, useContext } from "react";
import dataSlider from "../content/testimonials-content";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MenuContext from "../context/menuContext";

const SliderTestimonials = () => {
  const [slider, setSlider] = useState(0);

  const [data, setData] = useState({
    logo: dataSlider[slider]["logo"],
    img: dataSlider[slider]["img"],
    content: dataSlider[slider]["content"],
    name: dataSlider[slider]["name"],
    profession: dataSlider[slider]["profession"],
    slogan: dataSlider[slider]["slogan"],
    website: dataSlider[slider]["website"],
    url: dataSlider[slider]["url"],
  });

  useEffect(() => {
    setData({
      logo: dataSlider[slider]["logo"],
      img: dataSlider[slider]["img"],
      content: dataSlider[slider]["content"],
      name: dataSlider[slider]["name"],
      profession: dataSlider[slider]["profession"],
      slogan: dataSlider[slider]["slogan"],
      website: dataSlider[slider]["website"],
      url: dataSlider[slider]["url"],
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
    <div  className={styles["container-testimonials"]} id="testimonials">
      <div className={styles["div-content-title"]}>
        <div className={styles["divider"]}></div>
        <h2>Lo que dicen nuestros clientes</h2>
      </div>
      <div className={styles["container-slider"]}>
        <section className={styles["slider-body-show"]}>
          <div className={styles["div-content"]}>
            <motion.div
              key={generateKey(data.name)}
              className={styles["col-1"]}
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
              <img
                className={styles["img-person"]}
                src={data.img}
                alt="Representante"
              />
            </motion.div>
            <motion.div
              key={generateKey(data.name)}
              className={styles["col-2"]}
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
              {data.logo ? (
                <img src={data.logo} alt="logo empresa" />
              ) : (
                <h4 className={styles["no-logo"]}>{data.slogan}</h4>
              )}
              <p>{data.content}</p>
              <h2>{data.name}</h2>
              <h3>{data.profession}</h3>
              <h4>{data.slogan}</h4>
            </motion.div>
          </div>

          <motion.div
            key={generateKey(data.name)}
            className={styles["div-site"]}
            initial={{
              opacity: 0,
              x: "-10%",
              transition: { duration: 1, ease: [0.17, 0.67, 0.83, 0.95] },
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: [0.17, 0.67, 0.83, 0.95] },
            }}
            exit={{
              opacity: 0,
              x: "-10%",
              transition: { duration: 0.3, ease: [0.17, 0.67, 0.83, 0.95] },
            }}
          >
            <div className={styles["divider"]}></div>
            <h3>{data.website}</h3>
          </motion.div>
        </section>

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
        <div className={styles["div-img-back"]}>
          <img
            className={styles["img-hexa-back"]}
            src="/img/lineas-hexagonos-800.webp"
            alt="Hexagonos"
          />
        </div>
        <div className={styles["div-img-front"]}>
          <img
            className={styles["img-hexa-800"]}
            src="/img/lineas-hexagonos-800.webp"
            alt="Hexagonos"
          />
        </div>
      </div>
    </div>
  );
};
export default SliderTestimonials;
