import { VideosComponent } from "./VideosComponent"

export const ActividadesUnoDos = () => {
  const videosArray = [
    {nombre: "Juegos Musicales con Telas", link: "https://www.youtube.com/embed/URGRQ2MAA8U?si=icPVaumjV01MQAAZ"},
    {nombre: "Juego de Manos", link: "https://www.youtube.com/embed/yGL7vBz78FI?si=jIXyYD_TR35yJDgT"},
    {nombre: "Éste es el ritmo", link: "https://www.youtube.com/embed/cnGeP7WVRRc?si=KYJ97QELZD7RWzA4"},
  ]

  return (
    <>
      <div className="flex flex-col lg:w-8/12 w-full h-full gap-y-4 p-2">
        <h1>Actividades 1-2 Años</h1>
        {videosArray.map((video) => (
          <VideosComponent key={video.nombre} nombre={video.nombre} link={video.link} />
        ))}
      </div>
    </>
  )
}
