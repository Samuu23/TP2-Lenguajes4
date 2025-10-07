import { useState } from "react";
import "../Styles.css";

function Formulario() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnngnwdz";
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });
  const [estado, setEstado] = useState("");

  const manejarCambio = (e) =>
    setFormulario({ ...formulario, [e.target.name]: e.target.value });

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setEstado("Enviando...");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formulario.nombre,
          email: formulario.correo,
          message: formulario.mensaje
        }),
      });
      if (!res.ok) throw new Error("Error");
      setEstado("Mensaje enviado");
      setFormulario({ nombre: "", correo: "", mensaje: "" });
    } catch {
      setEstado("No se pudo enviar el mensaje, inténtalo de nuevo");
    }
  };

  return (
    <div className="div1">
      <h1>Formulario de Contacto</h1>
      <form onSubmit={manejarEnvio} className="div2">
        <label>Nombre</label>
        <input name="nombre" value={formulario.nombre} onChange={manejarCambio} required/>

        <label>Dirección de Correo</label>
        <input name="correo" type="email" value={formulario.correo}onChange={manejarCambio} required/>

        <label>Mensaje</label>
        <textarea name="mensaje" rows="5" value={formulario.mensaje} onChange={manejarCambio} required/>

        <button type="submit" className="btn">Enviar</button>
      </form>
      {estado && <p>{estado}</p>}
    </div>
  );
}

export default Formulario;