import React from 'react'
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <nav>
        <Link to="/">Inicio</Link>
        <ul>
            <li>
                <Link to="/AboutUs">Sobre nosotros</Link>
            </li>
            <li>
                <Link to="/Teoria">Teoria</Link>
            </li>
            <li>
                <Link to="/Prueba">Prueba</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
