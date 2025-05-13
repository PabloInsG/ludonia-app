import animales from "../assets/animales.jpg"
import frutas from "../assets/frutas.jpg"
import cocodrilo from "../assets/cocodrilo.jpg"
import luna from "../assets/luna.jpg"
import zapato from "../assets/zapato.jpg"
import arbol from "../assets/arbol.jpg"
import miau from "../assets/miau.jpg"
import cinco from "../assets/cinco.jpg"


export const Libros = () => {
    const librosMap = [
        {id: 1, nombre: "Animales", foto: {animales}, url: "https://kalandraka.com/animales-castellano.html"},
        {id: 2, nombre: "Frutas", foto: {frutas}, url: "a"},
        {id: 3, nombre: "Cocodrilo", foto: {cocodrilo}, url: "a"},
        {id: 4, nombre: "Luna", foto: {luna}, url: "a"},
        {id: 5, nombre: "Zapato", foto: {zapato}, url: "a"},
        {id: 6, nombre: "Arbol", foto: {arbol}, url: "a"},
        {id: 7, nombre: "Miau", foto: {miau}, url: "a"},
        {id: 8, nombre: "Cinco", foto: {cinco}, url: "a"}
    ]

    librosMap.map((l) => (
        console.log(l.foto)
    ))
    
    return (
    <>
        <div className="w-full h-full flex flex-col items-center gap-y-8 bg-[#091F92]">
            <h1 className="font-bold text-6xl text-white">LIBROS</h1>
            <div className="w-8/12">
                <h1>AQUI VA EL LIBRO DO RE MI</h1>
            </div>
            <div className="grid grid-cols-4 w-8/12 gap-4 h-full mb-2">
                {librosMap.map((_libro) => (
                    <div key={_libro.id} className="text-white rounded-md bg-[#131313] flex flex-col">
                        <a href={_libro.url} className="w-full h-full"><img src={_libro.foto} alt="" className="w-full h-full rounded-t-md" /></a>
                        <h1 className="text-3xl p-2">{_libro.nombre}</h1>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
