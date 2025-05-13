import { useState } from "react";
import { Logo } from "./Logo"
import { Menu } from "./Menu"

export const Libros = () => {
    const [menu, setMenuOpened] = useState(false);

    const librosMap = [
        {id: 1, nombre: "Animales", foto: "../assets/animales.jpg", url: "https://kalandraka.com/animales-castellano.html"},
        {id: 2, nombre: "Frutas", foto: "../assets/frutas.jpg", url: "https://kalandraka.com/frutas-castellano.html"},
        {id: 3, nombre: "Cocodrilo", foto: "../assets/cocodrilo.jpg", url: "https://kalandraka.com/cocodrilo-castellano.html"},
        {id: 4, nombre: "Luna", foto: "../assets/luna.jpg", url: "https://kalandraka.com/luna-castellano.html"},
        {id: 5, nombre: "Zapato", foto: "../assets/zapato.jpg", url: "https://kalandraka.com/zapato-castellano.html"},
        {id: 6, nombre: "Arbol", foto: "../assets/arbol.jpg", url: "https://kalandraka.com/arbol-castellano.html"},
        {id: 7, nombre: "Miau", foto: "../assets/miau.jpg", url: "https://kalandraka.com/miau-castellano.html"},
        {id: 8, nombre: "Cinco", foto: "../assets/cinco.jpg", url: "https://kalandraka.com/cinco-castellano.html"}
    ]
    
    return (
    <>
        <div className="w-full h-full flex flex-col items-center gap-y-8 bg-[#091F92]">
            <Logo />
            <div className="lg:w-8/12 w-11/12">
                <h1 className="font-semibold text-5xl text-white">LIBROS</h1>
                <h1>AQUI VA EL LIBRO DO RE MI</h1>
            </div>
            <div className="lg:w-8/12 w-11/12 flex flex-col gap-y-4">
                <h1 className="text-start lg:text-4xl text-3xl font-semibold">Libros recomendados:</h1>
                <div className="grid lg:grid-cols-4 w-full gap-4 h-full mb-4">
                    {librosMap.map((_libro) => (
                        <div key={_libro.id} className="text-[#091f92] font-bold text-center rounded-md bg-[#fff] flex flex-col hover:scale-[1.05] transition-all">
                            <a href={_libro.url} target="_blank" className="w-full h-full"><img src={_libro.foto} alt="" className="w-full h-full rounded-t-md" /></a>
                            <h1 className="text-3xl p-2">{_libro.nombre}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Menu menuOpened={menu} setMenuOpened={setMenuOpened} />
    </>
  )
}
