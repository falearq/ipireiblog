import React, { useState } from "react";
import { useForm } from "react-hook-form";
import contactImage from "../../images/contact.png";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

init("user_4tY4M8y3ny7vJUiEWzHsO");

function Form() {
  const [thanks, setThanks] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    // emailjs
    //   .sendForm(
    //     "gmail",
    //     "template_fv2eeko",
    //     e.target,
    //     "user_4tY4M8y3ny7vJUiEWzHsO"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setThanks(true);
    //     },
    //     (error) => {
    //       alert('Ocurrió un error inesperado. Intentalo de nuevo.');
    //       console.log(error)
    //     }
    //   );

    setThanks(true);
    console.log(data);
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <div className="contact-form-text">
          <h1 className="post-title">CONTÁCTANOS</h1>
          <p className="contact-form-brief">
            Envíanos un mensaje. Queremos escucharte.
          </p>
        </div>
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-name">
            <div className="name-col-1">
              <label htmlFor="name">Nombre</label>
              <input
                className="name-input name-input-1"
                type="text"
                placeholder="Ej. María"
                name="firstname"
                ref={register({
                  required: {
                    value: true,
                    message: "⚠ Requerido",
                  },
                })}
              />

              <span style={{ color: "red", marginTop: "5px" }}>
                {errors?.firstname?.message}
              </span>
            </div>
            <div className="name-col-2">
              <label htmlFor="name" className="label">
                Apellido
              </label>
              <input
                className="name-input name-input-2"
                type="text"
                placeholder="Ej. Sánchez"
                name="lastname"
                ref={register({
                  required: {
                    value: true,
                    message: "⚠ Requerido",
                  },
                })}
              />
              <span style={{ color: "red", marginTop: "5px" }}>
                {errors?.lastname?.message}
              </span>
            </div>
          </div>
          <div className="form-info">
            <label htmlFor="name">E-mail</label>
            <input
              className="email-input"
              type="text"
              placeholder="Ejemplo@mail.com"
              name="email"
              ref={register({
                required: {
                  value: true,
                  message: "⚠ E-mail requerido",
                },
              })}
            />
            <span style={{ color: "red", marginTop: "5px" }}>
              {errors?.email?.message}
            </span>

            <label htmlFor="name">Mensaje</label>
            <textarea
              className="msg-input"
              placeholder="Escribe aquí tu mensaje..."
              name="msg"
              ref={register({
                required: { value: true, message: "⚠ Mensaje requerido" },
              })}
            />
            <span style={{ color: "red", marginTop: "5px" }}>
              {errors?.msg?.message}
            </span>

            {thanks === true ? (
              <h3>¡Gracias! Te responderemos a la brevedad.</h3>
            ) : null}
            <button className="contact-btn">ENVIAR</button>
          </div>
        </form>
      </div>
      <div className="contact-right">
        <img src={contactImage} alt="Contacto" className="contact-image"></img>
        <div className="contact-right-info">
          <div className="contact-right-info-col1">
            <p>
              <b>Tel.</b> 55 1850 5883
            </p>
          </div>
          <div className="contact-right-info-col2">
            <p>
              <b>Cuenca 48 Colonia Álamos CP 03400 Benito Juárez, CDMX</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
