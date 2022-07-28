import styles from "../styles/ProjectPortafolio.module.css";
import ProjectPortafolio from "./ProjectPortafolio";
export default function SetProjectsPortfolio({ data }) {

  return (
    <>
      <div className={styles["container-Projects"]}>
        <ProjectPortafolio data={data[1]} />
        <ProjectPortafolio data={data[5]} />
        <ProjectPortafolio data={data[4]} />
        <ProjectPortafolio data={data[2]} />
        <ProjectPortafolio data={data[8]} />       
        
        <ProjectPortafolio data={data[7]} />
        <ProjectPortafolio data={data[0]} />
        <ProjectPortafolio data={data[3]} />
       
        <ProjectPortafolio data={data[15]} />
        <ProjectPortafolio data={data[9]} />
        
        <ProjectPortafolio data={data[11]} />
       
        <ProjectPortafolio data={data[6]} />
        <ProjectPortafolio data={data[13]} />
        <ProjectPortafolio data={data[14]} />
        <ProjectPortafolio data={data[10]} />
        <ProjectPortafolio data={data[12]} />
      </div>
    </>
  );
}
