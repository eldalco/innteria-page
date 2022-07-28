import styles from "../styles/ProjectPortafolio.module.css";
export default function ProjectPortafolio({ data }) {
  const { name, logo, img, location, urlSite } = data;
  return (
    <>
      <a
        href={urlSite}
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className={styles["containerProjectPortafolio"]}>
          <div>
            <img className={styles["project"]} src={img} alt="" />
          </div>
          <div className={styles["container-logo"]}>
            <img
              className={styles["logo"]}
              src={logo}
              alt=""
            />
            <p>{location}</p>
          </div>
        </div>
      </a>
    </>
  );
}
