import css from "styled-jsx/css";
export default css`
  .div-form {
    /* background-color: #141c28; */
    border-radius: 30px;
    padding: 60px 40px;
    width: 90%;
  }
  @media (max-width: 1400px) {
    .div-form {
      width: 80%;
      margin: 0px auto;
    }
  }
  @media (max-width: 980px) {
    .div-form {
      margin: 40px auto;
    }
  }
  @media (max-width: 620px) {
    .div-form {
      width: 100%;
      padding: 60px 10px;
    }
  }

  .div-form h2 {
    color: #ffffff;
    font-family: Cera Pro Bold;
    font-size: 1.6vw;
    margin: 0 0 20px 0;
  }
  @media (max-width: 980px) {
    .div-form h2 {
      font-size: 28px;
    }
  }
  .div-form p {
    color: #ffffff;
    font-family: Cera Pro Thin;
    font-size: 1vw;
    margin-bottom: 40px;
    width: 80%;
  }
  @media (max-width: 980px) {
    .div-form p {
      font-size: 16px;
    }
  }
  .div-form .div-input {
    padding-bottom: 30px;
  }
  .div-form input,
  .div-form textarea{
    font-family: Cera Pro Bold;
    font-size: 15px;
    color: #000;
    background-color: #FFFFFF;
    border: solid 2px #a1c9ef;
    border-radius: 15px;
    width: 100%;
    padding: 10px;
  }
  .div-form input:focus,
  .div-form textarea:focus{
    outline: none;
  }

  .div-form button {
    background-image: linear-gradient(90deg, #2090ba, #0a479b);
    font-family: Cera Pro Medium;
    font-size: 15px;
    letter-spacing: 4px;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 12px 42px;
    cursor: pointer;
  }
  .errors {
    color: #ff0000;
    font-size: 12px;
  }
  .message {
    font-family: Cera Pro Light;
    font-size: 1vw;
    color: #ffffff;
  }
  @media (max-width: 980px) {
    .message {
      font-size: 16px;
    }
  }

  .div-phone {
    display: flex;
    align-items: center;
  }
  .div-cod {
    width: 30%;
  }
  @media (max-width: 980px) {
    .div-cod {
      width: 40%;
    }
  }
  .div-number {
    width: 70%;
    margin-left: 10px;
  }
  @media (max-width: 980px) {
    .div-number {
      width: 60%;
    }
  }
`;
