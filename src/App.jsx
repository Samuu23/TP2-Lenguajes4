import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import APIPage from "./Pages/API";
import Contacto from "./Pages/Contacto";
import Inicio from "./Pages/Inicio";
import Servicios from "./Pages/Servicios";
import "./Styles.css";

function App() {
  return (
    <>
     <Navbar />
     <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/servicios" element={<Servicios />}/>
        <Route path="/api" element={<APIPage />}/>
     </Routes>
    </>
  );
}
export default App;
