import { useState } from "react";
import "../Styles.css";
import Imgcargada from "./Imgcargada";

function Validacion() {
  const [imagen, setImagen] = useState(null);

  function handleValidacion(e) {
    const file = e.target.previousSibling.files[0];

    if (!file) {
      alert("No seleccionaste ningún archivo");
      return;
    }

    if (file.type === "image/jpeg" || file.type === "image/png") {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setImagen(ev.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("El archivo no corresponde a una imagen");
      setImagen(null);
    }
  }

  return (
    <div className="div1">
      <h1>Cargar Imagen</h1>
      <input type="file" id="fileInput" />
      <button onClick={handleValidacion} className="btn">Cargar</button>
      <Imgcargada imagen={imagen} />
    </div>
  );
}

export default Validacion;