import { VideosComponent } from "./VideosComponent"

export const ActividadesZeroUno = () => {
  const videosArray = [
    {nombre: "Actividad para desarrollar el ritmo y el equilibrio", link: "https://www.youtube.com/embed/E-fqB3rJPmY?si=7xMJuk_ELyuxq3nu"},
    {nombre: "Juegos Musicales con Telas", link: "https://www.youtube.com/embed/URGRQ2MAA8U?si=icPVaumjV01MQAAZ"},
  ]
  return (
    <>
      <div className="flex flex-col lg:w-8/12 w-full h-full gap-y-4 p-2">
        <h1>Actividades 0-1 Años</h1>
        {videosArray.map((actividad) => (
          <VideosComponent key={actividad.nombre} nombre={actividad.nombre} link={actividad.link} />
        ))}
      </div>
    </>
  )
}
