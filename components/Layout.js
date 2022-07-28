import styles from "../styles/layout-styles";
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";
import { useRouter } from "next/router";
import MenuContext from "../context/menuContext";
import { useContext } from "react";
import { Link } from "react-scroll";

const Layout = ({ children }) => {
  const [click, setClick] = useState(false);
  const router = useRouter();
  const { contref, seref, portref, testref } = useContext(MenuContext);

  const changeClick = () => {
    setClick(!click);
    console.log('click');
  };
  
  return (
    <div className="container">
      <div className="div-menu-mob">
        <div className="div-image-mob">
          <Link to="home" spy={true} smooth={true}>
            <img
              className="img-mob"
              src="/img/Innteria_logo.webp"
              alt="Company logo"
            />
          </Link>
        </div>
        <div className="div-icon">
          <FaBars onClick={changeClick} size="30px" />
        </div>
      </div>
      <nav className={click ? "nav-mob nav-mob-open" : "nav-mob nav-mob-close"}>
        <ul>
          <li>
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              <h4 onClick={changeClick} className={"no-active-mob"}>Home</h4>
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="services" spy={true} smooth={true}>
              <h4 onClick={changeClick} className={seref ? "active-mob" : "no-active-mob"}>
                Servicios
              </h4>
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="portfolio" spy={true} smooth={true}>
              <h4 onClick={changeClick} className={portref ? "active-mob" : "no-active-mob"}>
                Portafolio
              </h4>
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="testimonials" spy={true} smooth={true}>
              <h4 onClick={changeClick} className={testref ? "active-mob" : "no-active-mob"}>
                Testimonios
              </h4>
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="contact" spy={true} smooth={true}>
              <h4 onClick={changeClick} className={contref ? "active-mob" : "no-active-mob"}>
                Contacto
              </h4>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="divMenu">
        <div className="divImage">
          <Link to="home" spy={true} smooth={true}>
            <img
              className="img"
              src="/img/Innteria_logo.webp"
              alt="Company logo"
            />
          </Link>
        </div>
        <nav className="nav">
          <div className="nav-item">
            <div className={"nav-point nav-point-no"}></div>
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              <h4 className={"no-active"}>Home</h4>
            </Link>
          </div>
          <div className="nav-item">
            <div
              className={
                seref ? "nav-point nav-point-active" : "nav-point nav-point-no"
              }
            ></div>
            <Link activeClass="active" to="services" spy={true} smooth={true}>
              <h4 className={"no-active"}>Servicios</h4>
            </Link>
          </div>
          <div className="nav-item">
            <div className={"nav-point nav-point-no"}></div>
            <Link activeClass="active" to="portfolio" spy={true} smooth={true}>
              <h4 className={"no-active"}>Portafolio</h4>
            </Link>
          </div>
          <div className="nav-item">
            <div className={"nav-point nav-point-no"}></div>
            <Link activeClass="active" to="testimonials" spy={true} smooth={true}>
              <h4 className={"no-active"}>Testimonios</h4>
            </Link>
          </div>
          <div className="nav-item">
            <div className={"nav-point nav-point-no"}></div>
            <Link activeClass="active" to="contact" spy={true} smooth={true}>
              <h4 className={"no-active"}>Contacto</h4>
            </Link>
          </div>
        </nav>
      </div>

      <main className="main">{children}</main>
      
      <style jsx>{styles}</style>
    </div>
  );
};
export default Layout;
