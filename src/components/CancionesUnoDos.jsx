import { CancionesComponent } from "./CancionesComponent"

export const CancionesUnoDos = () => {
  const videosArray = [
    {nombre: "¿Cual Es Tu Color Favorito?", link: "https://www.youtube.com/embed/PHPbg9x8Gvs?si=IGHLoZhzXJDtXW7D"},
    {nombre: "Las Ruedas Del Autobus", link: "https://www.youtube.com/embed/71fbx-fIOZg?si=E1L6v-E4-T9Di2K9"},
  ]

  return (
    <>
      <div className="flex flex-col lg:w-8/12 w-full h-full gap-y-4 p-2">
        <h1>Canciones 1-2 Años</h1>
        {videosArray.map((cancion) => (
          <CancionesComponent key={cancion.nombre} nombre={cancion.nombre} link={cancion.link} />
        ))}
      </div>
    </>
  )
}
