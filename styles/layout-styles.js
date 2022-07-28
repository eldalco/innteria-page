import css from "styled-jsx/css";
export default css`
  .nav-point {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .nav-item {
    display: flex;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
  }
  .nav-item > :global(a.active) h4{
    color: #FFFFFF;
  }
  .nav-item h4 {
    text-transform: uppercase;
    font-family: "Cera Pro Light";
    font-size: 10px;
    letter-spacing: 2px;
    margin: 0 0;
  }
  .main {
    height: 100vh;
    max-height: 100vh;
    width: 100%;
    /* overflow: auto; */
  }
  .container {
    background-color: #060f1a;
    width: 100%;
    height: 100vh;
    margin-top: 0px;
    padding-left: 200px;
    position: relative;
    /* overflow: hidden; */
  }
  @media (max-width: 980px) {
    .container {
      padding-left: 0px;
    }
  }
  .div-menu-mob {
    display: none;
    width: 100%;
    height: 80px;
    padding: 10px 50px;
    background-color: #060f1a;
    border-bottom: solid 1px #5f7286;
    position: fixed;
    top: 0;
    z-index: 50;
  }
  @media (max-width: 980px) {
    .div-menu-mob {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  @media (max-width: 480px) {
    .div-menu-mob {
      padding: 10px 30px;
    }
  }
  .div-image-mob {
    width: 80px;
    height: 60px;
    margin: auto 0;
    display: flex;
    align-items: center;
  }
  .img-mob {
    width: 60px;
    height: 50px;
    margin: auto 0;
    cursor: pointer;
  }

  .div-icon {
    color: #0d72c5;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .nav-mob {
    display: none;
    position: fixed;
    top: 80px;
    background-color: #141c28;
    width: 100%;
    z-index: 50;
  }
  .nav-mob-open {
    left: 0;
    transition: 0.5s all ease-in;
  }
  .nav-mob-close {
    left: -100%;
    transition: 0.5s all ease-in;
  }
  @media (max-width: 980px) {
    .nav-mob {
      display: flex;
    }
  }

  .nav-mob ul li {
    list-style: none;
    padding: 0px;
  }
  .nav-mob ul li h4{  
    font-family: Cera Pro Bold;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin:30px 0px;
  }
  .nav-mob > :global(a.active) h4{
    color: #0D72C5;
  }
  .nav-mob a {
    font-family: Cera Pro Bold;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    list-style: none;
  }
  .active-mob {
    color: #0d72c5;
  }
  .no-active-mob {
    color: #ffffff;
  }

  .divMenu {
    position: fixed;
    width: 150px;
    height: 90vh;
    top: 5%;
    left: 0;
    bottom: 5%;
    border-right: solid 1px #5f7286;
    display: grid;
    grid-template-rows: auto auto;
    z-index: 10;
    background-color: #060f1a;
  }
  @media (max-width: 980px) {
    .divMenu {
      display: none;
    }
  }
  .divImage {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 80px;
    margin: 0 auto;
  }

  .img {
    width: 100%;
    margin: 0px auto 0px auto;
    cursor: pointer;
  }
  .nav {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
  }
  .active {
    color: #ffffff;
  }
  .no-active {
    color: #6e8cb0;
    transition: color 0.2s;
  }
  .no-active:hover {
    color: #ffffff;
  }
  .nav-point-active {
    background-color: #1374C9;
  }
  .nav-point-no {
    background-color: #1374C9;
  }
`;
