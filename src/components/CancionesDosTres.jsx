import { VideosComponent } from "./VideosComponent"

export const CancionesDosTres = () => {
  const videosArray = [
    {nombre: "Las Vocales", link: "https://www.youtube.com/embed/n7SNLXbi36Q?si=rTu0ncJk1xldUtlF"},
    {nombre: "Cantando los Números", link: "https://www.youtube.com/embed/pSqnl2eSu9Y?si=i254HgK3MN7gqSsj"},
    {nombre: "Colores en Inglés y Español", link: "https://www.youtube.com/embed/c6BVOQfgMP8?si=ZJ32hUq6Z4BLLOsp"},
  ]
  return (
    <>
      <div className="flex flex-col lg:w-8/12 w-full h-full gap-y-4 p-2">
        <h1 className="text-4xl lg:text-5xl font-semibold">Canciones 2-3 Años</h1>
        {videosArray.map((cancion) => (
          <VideosComponent key={cancion.nombre} nombre={cancion.nombre} link={cancion.link} />
        ))}
      </div>
    </>
  )
}
