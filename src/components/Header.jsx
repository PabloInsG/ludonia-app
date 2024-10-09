import labLogo from '../assets/logos_logodef_full_white.png'
import menuImg from '../assets/menu.png'
import cerrarImg from '../assets/cerrar-blanco.png'
import { openNav } from '../nav.js'
import { closeNav } from '../nav.js'
import { useState } from 'react'

export const Header = () => { 
    const [imageSrc, setImageSrc] = useState(menuImg);
    const [fnNav, setFnNav] = useState(false)
    const handleClick = () => {
        if(fnNav) {
            closeNav();
        } else {
            openNav();
        }

        setFnNav(!fnNav)
        setImageSrc(fnNav  ? menuImg : cerrarImg)
    }

    return (
        <div className="flex flex-row absolute w-full z-10">
                <div className="w-1/2 flex">
                    <a className="!w-70" href="/">
                    <img src={labLogo} className="size-52 ml-10" alt="Laboratio Dentes logo" />
                    </a>
                </div>
                <div className="w-1/2 flex flex-row-reverse mr-20 items-center">
                    <div className="menu">
                        <div id="mySidenav" className="sidenav flex flex-col items-center space-y-24 justify-center">
                            <a href="/maria-pazos" className="text-5xl text-gray-300 hover:text-white" id="a1">Maria Pazos</a>
                            <a href="/trabajos" className="text-5xl text-gray-300 hover:text-white" id="a2">Trabajos</a>
                            <a href="/laboratorio" className="text-5xl text-gray-300 hover:text-white" id="a3">Laboratorio</a>
                            <a href="/cuidados" className="text-5xl text-gray-300 hover:text-white" id="a4">Cuidados</a>
                        </div>
                    </div>
                    <span onClick={handleClick}>
                        <img src={imageSrc} alt="Menu icon" className='size-8'/>
                    </span>
                </div>
        </div>
    )
}