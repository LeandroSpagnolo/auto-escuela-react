import React from 'react'
import {Link} from "react-router-dom"
import { IoMdCar } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

function NavBar() {
  return (
    <nav className="font-inter text-lg flex gap-2 items-center py-3 xl:px-40 lg:px-10 px-5 font-semibold">
        <Link to="/"><IoMdCar size={40} className="text-primary" /></Link>
        <h1 className="text-2xl font-bold">Auto<span className="text-primary">Escuela</span></h1>
        <ul className='flex gap-10 grow justify-end items-center'>
            <li>
                <Link to="/AboutUs" className="hidden md:block transition-all duration-200 hover:text-primary-content">Sobre nosotros</Link>
            </li>
            <li>
                <Link to="/Teoria" className="hidden md:block transition-all duration-200 hover:text-primary-content">Teoria</Link>
            </li>
            <li>
                <Link to="/Prueba" className="hidden md:block transition-all duration-200 hover:text-primary-content">Prueba</Link>
            </li>
            <li>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" className="md:hidden btn btn-circle">
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                    </label>
                    <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
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
                </div>
            </li>
        </ul>
  
    </nav>

  )
}

export default NavBar
