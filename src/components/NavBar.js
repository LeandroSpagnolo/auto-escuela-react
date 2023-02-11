import React from 'react'
import {Link} from "react-router-dom"
import { IoMdCar } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

function NavBar() {
  return (
    <nav className="bg-slate-800 text-gray-300 font-inter text-lg flex gap-2 items-center py-3 px-2 font-semibold">
        <Link to="/"><IoMdCar size={40} className="text-cyan-500" /></Link>
        <h1 className="text-2xl font-bold">Auto<span className="text-cyan-500">Escuela</span></h1>
        <ul className='flex gap-1'>
            <li>
                <Link to="/AboutUs" className="hidden sm:block">Sobre nosotros</Link>
            </li>
            <li>
                <Link to="/Teoria" className="hidden sm:block">Teoria</Link>
            </li>
            <li>
                <Link to="/Prueba" className="hidden sm:block">Prueba</Link>
            </li>
            <li>
                <Link to="/" className="sm:hidden"><GiHamburgerMenu size={40} className="text-cyan-500"/></Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
