import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (!name || !email || !asunto || !mensaje) {
      setMensajeError("Todos los campos son obligatorios");
      return;
    }

    emailjs
      .sendForm(
        "default_service",
        "template_8uyzmlb",
        e.target,
        "dnJLMbi6zB3iEfgZD"
      )
      .then(() => {
        Swal.fire(
          "¡Mensaje enviado!",
          "Gracias por contactarnos.",
          "success"
        );
        setName("");
        setEmail("");
        setAsunto("");
        setMensaje("");
        setMensajeError("");
      })
      .catch((error) => {
        console.error("Error al enviar el mensaje:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrió un error al enviar el mensaje",
        });
      });
  };

  return (
    <section id="Contacto">
      <div className="container_contact">
        <form className="box_contact" onSubmit={submitForm}>
          <h1>Contacto</h1>

          <label>Nombre</label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="Nombre"
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="Correo_Electronico"
          />

          <label>Asunto</label>
          <input
            type="text"
            placeholder="Ingresa el asunto de tu mensaje"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            name="Asunto"
          />
          {mensajeError && <p className="error-message">{mensajeError}</p>}
          <textarea
            className="Mensaje"
            placeholder="Escribe tu mensaje aquí..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            name="Mensaje"
            cols={108}
            rows={7}
          ></textarea>

          <input
            type="hidden"
            name="_next"
            value={"http://localhost:5173/#Contacto"}
          />
          <input type="hidden" name="_captcha" value={false} />

          <button type="submit" className="submit_mensaje">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;