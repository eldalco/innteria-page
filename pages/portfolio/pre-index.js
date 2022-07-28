import Layout from "../../components/Layout";
import ServiceSection from "../../components/ServiceSection";
import datos  from "../../content/content-portfolio/platform-content";
import styles from "../../styles/portfolio.module.css";
import Link from "next/link";
import Head from "../../components/Head";
import { motion } from "framer-motion";
export default function Portfolio() {
  return (
   
    <Layout>
      <Head titulo="Portafolio | Innteria" descripcion="Portafolio distribuido de acuerdo con el servicio al que corresponde cada proyecto"/>
      <motion.div 
      className={styles["div-container"]}
      initial={{
        opacity: 0,          
        transition: { duration: 1, ease: [0.17, 0.67, 0.83, 0.95] },
      }}
      animate={{
        opacity: 1,          
        transition: { duration: 1, ease: [0.17, 0.67, 0.83, 0.95] },
      }}
      exit={{
        opacity: 0         
        
      }}>
        <div className={styles["div-title"]}>
          <h1>Portafolio de Servicios</h1>
          <div className={styles["divider"]}></div>
        </div>
        <div className={styles["div-grid"]}>
          <Link href="/portfolio/web-platforms">
            <div>
                <ServiceSection dataSlider= {datos.data} tipo="platform" titulo="Plataformas web" contenido="Creamos el software a la medida para que se ajuste a tu modelo de negocio y lo potencialice."/>
            </div>
          </Link>

          <Link href="/portfolio/web-pages">
            <div>
                <ServiceSection dataSlider= {datos.data2} titulo="Páginas web" contenido="Diseñamos y desarrollamos tu lugar en el espacio digital según la necesidad de tu negocio."/>
            </div>
          </Link>

          <Link href="/portfolio/data-analytics">
            <div>
                <ServiceSection dataSlider= {datos.data3} titulo="Analítica de datos" contenido="Limpiamos y estructuramos la información recolectada para que sea útil, fácil de interpretar y analizar."/>
            </div>
          </Link>

          <Link href="/portfolio/artificial-intelligence">
            <div>
                <ServiceSection dataSlider= {datos.data3} titulo="Inteligencia artificial" contenido="Automatizamos los procesos de tu empresa y generamos herramientas predictivas."/>
            </div>
          </Link>
          
        </div>
      </motion.div>
      
    </Layout>    
  );    
};