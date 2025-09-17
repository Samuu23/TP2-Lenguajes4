import "../Styles.css";

function Imgcargada({ imagen }) {
  if (!imagen) return null;

  return (
    <div id="div2" className="div2">
      <h2>Imagen Cargada</h2>
      <img id="imagen" src={imagen} width="200" height="200" alt="preview" />
    </div>
  );
}

export default Imgcargada;