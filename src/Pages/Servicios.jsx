import { habitaciones } from "../data/habitaciones";
import "../Styles.css";

function Servicios() {
  const asset = (relPath) => `${import.meta.env.BASE_URL}${relPath}`;

  return (
    <div className="div1" style={{ maxWidth: 1100, margin: "0 auto", padding: 16 }}>
      <h1>Servicios</h1>

      <div className="gridCards">
        {habitaciones.map((h) => (
          <article key={h.id} className="card">
            <img
              className="cardImg"
              src={asset(h.imagen)}
              alt={h.titulo}
              loading="lazy"
            />
            <div className="cardBody">
              <h2 className="cardTitle">{h.titulo}</h2>
              <p className="cardText">{h.descripcion}</p>

              <div className="cardRow">
                <span className="badge">{h.camas}</span>
                <span className="badge">Capacidad: {h.capacidad}</span>
              </div>

              <div className="cardRow" style={{ flexWrap: "wrap", gap: 8 }}>
                {h.servicios.map((s, i) => (
                  <span key={i} className="chip">{s}</span>
                ))}
              </div>

              <div className="cardFooter">
                <span className="price">${h.precio.toLocaleString("es-AR")}</span>
                <a className="btn" href="#/contacto">Reservar</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Servicios;