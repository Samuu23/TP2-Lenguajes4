import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <nav className="navbar">
            <div className="navbarList">
                <Link to="/" className="navbarItem">Inicio</Link>
                <Link to="/contacto" className="navbarItem">Contacto</Link>
                <Link to="/servicios" className="navbarItem">Servicios</Link>
                <Link to="/api" className="navbarItem">API</Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar;