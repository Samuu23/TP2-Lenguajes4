import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacto from "./Pages/Contacto";
import Inicio from "./Pages/Inicio";
import "./Styles.css";

function App() {
  return (
    <>
     <Navbar />
     <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/contacto" element={<Contacto />}/>
     </Routes>
    </>
  );
}
export default App;
