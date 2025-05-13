import labLogo from '../assets/logos_logodef_full_white.png'
import menuImg from '../assets/menu.png'
import cerrarImg from '../assets/cerrar-blanco.png'
import { openNav } from '../nav.js'
import { closeNav } from '../nav.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => { 
    const [imageSrc, setImageSrc] = useState(menuImg);
    const [fnNav, setFnNav] = useState(false)
    const handleClick = () => {
        fnNav ? closeNav() : openNav()
        setFnNav(!fnNav)
        setImageSrc(fnNav  ? menuImg : cerrarImg)
    }

    return (
        <div className="flex flex-row absolute w-full z-10">
                <div className="w-[100%] lg:w-1/2 flex justify-center lg:justify-normal">
                    <Link className="!w-70" to="/">
                        <img src={labLogo} className="size-52 lg:ml-10" alt="Laboratio Dentes logo" />
                    </Link>
                </div>
                <div className="lg:w-1/2 flex-row-reverse mr-20 items-center">
                    <div className="menu">
                        <div id="mySidenav" className="sidenav flex flex-col items-center space-y-24 justify-center">
                            <Link to="/maria-pazos" className="text-5xl text-gray-300 hover:text-white" id="a1">Maria Pazos</Link>
                            <Link to="/trabajos" className="text-5xl text-gray-300 hover:text-white" id="a2">Trabajos</Link>
                            <Link to="/laboratorio" className="text-5xl text-gray-300 hover:text-white" id="a3">Laboratorio</Link>
                            <Link to="/cuidados" className="text-5xl text-gray-300 hover:text-white" id="a4">Cuidados</Link>
                        </div>
                    </div>
                    <span onClick={handleClick}>
                        <img src={imageSrc} alt="Menu icon" className='size-8'/>
                    </span>
                </div>
        </div>
    )
}
