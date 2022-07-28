import data from "../../content/content-portfolio/content-services/web-pages";
import PortfolioList from "../PortfolioList";
import styles from "../../styles/portfolio-service-styles";


export default function Project() {    
    return (
        <>           
            <div className="container-grid" id="portfolio">
                <PortfolioList datos ={data}/>
            </div>
            <style jsx>{styles}</style>
        </>
        
    )
}

