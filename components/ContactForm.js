import { useForm } from "react-hook-form";
import styles from "../styles/contact-form-styles";
import useContact from "../hooks/useContact";
import { useEffect } from "react";
import { useState } from "react";
import CallSignList from "./CallsignList";

const ContactForm = () => {
  const [send, setSend] = useState(false);  
  const { register, handleSubmit, reset, formState: {errors} } = useForm();
    const { isLoadingSend, hasErrorSend, dataSend, successSend, create } =
      useContact();
    const onSubmit = (data) => {
      data = {
        payload: data,
      };
      console.log(data)
      create(data);
    };
    useEffect(() => {
      if (hasErrorSend) {
        console.log("Error");
      } else if (dataSend == 201) {
        console.log("Enviado");
        setSend(send = true)
        reset();
      }
    }, [dataSend]);
    return (
      <>
        <div className="div-form">
          <h2>Hablemos.</h2>
          <p>
            Queremos conocer la idea que tienes para tu negocio y convertirla realidad. No dudes en preguntar, estamos listos para escucharte.
          </p>
          {isLoadingSend && (
            <div>
              <p>loading</p>
            </div>
          )}
  
          {!isLoadingSend && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="div-input">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  {...register("name", { 
                    required: true,
                    pattern:
                      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
                    maxLength: 128,
                  })}
                />
                <span className="errors">
                  {errors.lead_name?.type === "required" && "*Obligatorio"}
                  {errors.lead_name?.type === "pattern" && "*Caracteres inválidos"}
                  {errors.lead_name?.type === "maxLength" && "*Máximo de letras 128"}
                </span>
              </div>
              <div className="div-input">
                <input
                  type="email"
                  name="email_name"
                  placeholder="Email"
                  {...register("email_name", { 
                    required: true,
                    maxLength: 40 
                  })}
                />
                <span className="errors">
                  {errors.lead_email?.type === "required" && "*Obligatorio"}
                  {errors.lead_email?.type === "maxLength" && "*Máximo de números 40"}
                </span>
              </div>

              <div className="div-phone div-input">
                <div className="div-cod">
                  <CallSignList register={register} name={"id_callsign"}/>
                </div>
                <div className="div-number">
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="Celular"
                    {...register("phone_number", { 
                      required: true,
                      pattern: /^([0-9])*$/,
                      maxLength: 25, })}
                  />
                  <span className="errors">
                    {errors.lead_cellphone?.type === "required" && "*Obligatorio"}
                    {errors.lead_cellphone?.type === "pattern" &&
                      "*Caracteres inválidos"}
                    {errors.lead_cellphone?.type === "maxLength" &&
                      "*Máximo de números 25"}
                  </span>
                </div>    
              </div>
                       
              <div className="div-input">
                <textarea
                  type="textarea"
                  name="lead_message"
                  placeholder="Mensaje"
                  rows="4"
                  {...register("lead_message", { 
                    required: true,
                    pattern:
                    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
                    maxLength: 256 })}
                />
                <span className="errors">
                  {errors.lead_message?.type === "required" && "*Obligatorio"}
                  {errors.lead_message?.type === "pattern" && "*Caracteres inválidos"}
                  {errors.lead_message?.type === "maxLength" && "*Máximo de letras 256"}
                </span>
              </div>
              <div>
                <button>ENVIAR</button>
              </div>
              {send === true && 
              <span className="message">!Gracias por contactarnos y querer ser parte de la transformación digital¡</span>}
            </form>
          )}
        </div>
  
        <style jsx>{styles}</style>
      </>
    );
  };
  export default ContactForm;
  