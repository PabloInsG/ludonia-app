import { Logo } from "./Logo"
import animales from "../assets/animales.webp"
import frutas from "../assets/frutas.webp"
import cocodrilo from "../assets/cocodrilo.webp"
import luna from "../assets/luna.webp"
import zapato from "../assets/zapato.webp"
import arbol from "../assets/arbol.webp"
import miau from "../assets/miau.webp"
import cinco from "../assets/cinco.webp"
import { LibroDoReMi } from "./LibroDoReMi";

export const Libros = () => {

    const librosMap = [
        {id: 1, nombre: "Animales", foto: `${animales}`, url: "https://kalandraka.com/animales-castellano.html"},
        {id: 2, nombre: "Frutas", foto: `${frutas}`, url: "https://kalandraka.com/frutas-castellano.html"},
        {id: 3, nombre: "Cocodrilo", foto: `${cocodrilo}`, url: "https://kalandraka.com/cocodrilo-castellano.html"},
        {id: 4, nombre: "Luna", foto: `${luna}`, url: "https://kalandraka.com/luna-castellano.html"},
        {id: 5, nombre: "Zapato", foto: `${zapato}`, url: "https://kalandraka.com/zapato-castellano.html"},
        {id: 6, nombre: "Árbol", foto: `${arbol}`, url: "https://kalandraka.com/arbol-castellano.html"},
        {id: 7, nombre: "Miau", foto: `${miau}`, url: "https://kalandraka.com/miau-castellano.html"},
        {id: 8, nombre: "Cinco", foto: `${cinco}`, url: "https://kalandraka.com/cinco-castellano.html"}
    ]
    
    return (
    <>
        <div className="w-full h-full flex flex-col items-center gap-y-8 bg-[#091F92]">
            <Logo />
            <div className="lg:w-8/12 w-11/12 flex flex-col lg:h-[700px]">
                <h1 className="text-4xl lg:text-5xl font-semibold">Libros</h1>
                <LibroDoReMi />
            </div>
            <div className="lg:w-8/12 w-11/12 flex flex-col gap-y-4">
                <h1 className="text-start lg:text-4xl text-3xl">Libros recomendados:</h1>
                <div className="grid lg:grid-cols-4 w-full gap-4 h-full mb-4">
                    {librosMap.map((_libro) => (
                        <div key={_libro.id} className="text-[#091f92] font-bold text-center rounded-md bg-[#fff] flex flex-col hover:scale-[1.05] transition-all">
                            <a href={_libro.url} target="_blank" className="w-full h-full"><img src={_libro.foto} alt={`Libro ${_libro.nombre} `} className="w-full h-full rounded-t-md" /></a>
                            <h1 className="text-3xl p-2">{_libro.nombre}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}
