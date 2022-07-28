import data from "../../content/content-portfolio/content-services/web-pages"
import PortfolioList from "../../components/PortfolioList"
import Layout from "../../components/Layout"
import styles from "../../styles/portfolio-service-styles"
import Head from "../../components/Head";

export default function Project() {    
    return (
        <Layout>
            <Head titulo="Portafolio | Inteligencia Artificial" descripcion="Proyectos desarrollados por Innteria relacionados con el area de inteligencia artificial"/>  
            <div className="container-grid">
                <PortfolioList datos ={data}/>
            </div>
            <style jsx>{styles}</style>
        </Layout>
        
    )
}