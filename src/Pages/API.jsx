import { useEffect, useState } from "react";
import "../Styles.css";

export default function APIPage() {
  const [paises, setPaises] = useState([]);
  const [estado, setEstado] = useState("cargando"); // cargando | ok | error

  useEffect(() => {
    // América para que no traiga todo el mundo (más rápido)
    const url = "https://restcountries.com/v3.1/region/americas?fields=name,capital,flags,currencies,population,region";
    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Error HTTP");
        const data = await res.json();
        setPaises(data);
        setEstado("ok");
      } catch {
        setEstado("error");
      }
    })();
  }, []);

  if (estado === "cargando") return <p className="p-4">Cargando datos…</p>;
  if (estado === "error") return <p className="p-4">❌ No se pudo obtener la información.</p>;

  return (
    <div className="div1" style={{ maxWidth: 1100, margin: "0 auto", padding: 16 }}>
      <h1>Página API</h1>
      <p style={{opacity:.8, marginTop:-8}}>Fuente: restcountries.com (pública, sin clave)</p>

      <div className="gridCards">
        {paises.map((p) => {
          const nombre = p?.name?.common ?? "—";
          const capital = Array.isArray(p.capital) ? p.capital[0] : (p.capital ?? "—");
          const region = p?.region ?? "—";
          const poblacion = typeof p.population === "number" ? p.population.toLocaleString("es-AR") : "—";
          const bandera = p?.flags?.png || p?.flags?.svg || "";
          // armo un string corto de monedas (código: nombre)
          const monedas = p.currencies
            ? Object.entries(p.currencies).map(([k, v]) => `${k}: ${v.name}`).join(" · ")
            : "—";

          return (
            <article key={nombre} className="card">
              <img className="cardImg" src={bandera} alt={`Bandera de ${nombre}`} loading="lazy" />
              <div className="cardBody">
                <h2 className="cardTitle">{nombre}</h2>
                <p className="cardText">Región: {region}</p>

                <div className="cardRow">
                  <span className="badge">Capital: {capital}</span>
                  <span className="badge">Población: {poblacion}</span>
                </div>

                <div className="cardRow" style={{ flexWrap: "wrap", gap: 8 }}>
                  <span className="chip">Monedas</span>
                  <span style={{fontSize:".9rem", opacity:.9}}>{monedas}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}