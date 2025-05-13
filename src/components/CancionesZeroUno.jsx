import { CancionesComponent } from "./CancionesComponent"

export const CancionesZeroUno = () => {
  const videosArray = [
    {nombre: "Mi Carita Redondita", link: "https://www.youtube.com/embed/6r_qz5XnK-M?si=NBV3vkAHq9QC2WFj"},
    {nombre: "La Nube", link: "https://www.youtube.com/embed/Ea6ykVh7Y7U?si=wo7-lNa0Cylz9J3Y"},
  ]
  return (
    <>
      <div className="flex flex-col lg:w-8/12 w-full h-full gap-y-4 p-2">
        <h1>Canciones 0-1 Años</h1>
        {videosArray.map((cancion) => (
          <CancionesComponent key={cancion.nombre} nombre={cancion.nombre} link={cancion.link} />
        ))}
      </div>
    </>
  )
}
