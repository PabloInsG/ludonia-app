import { VideosComponent } from "./VideosComponent"

export const ActividadesDosTres = () => {
  const videosArray = [
    {nombre: "Éste es el ritmo", link: "https://www.youtube.com/embed/cnGeP7WVRRc?si=KYJ97QELZD7RWzA4"},
  ]
  return (
    <>
      <div className="flex flex-col lg:w-8/12 w-full h-full gap-y-4 p-2">
        <h1>Actividades 2-3 Años</h1>
        {videosArray.map((cancion) => (
          <VideosComponent key={cancion.nombre} nombre={cancion.nombre} link={cancion.link} />
        ))}
        <div className="flex justify-between lg:flex-row flex-col w-full gap-x-4 content-center gap-y-4">
          <div className="flex flex-col lg:w-1/2 w-full bg-white rounded-md gap-x-4 p-4 text-[#091f92] h-32 lg:h-full">
            <p className="lg:text-3xl text-2xl text-center text-pretty font-medium h-2/3">Aprender la Orquesta con Música y Movimiento</p>
            <a href="https://www.tiktok.com/@musikland_/video/7354263436462738720?_r=1&_t=ZN-8wKRX6XsZPS" target="_blank"><button className="bg-[#091f92] text-white p-2 rounded-md w-full hover:scale-[1.01] hover:bg-[#091f92]/95 transition">Ver vídeo</button></a>
          </div>
          <div className="flex flex-col bg-white rounded-md lg:w-1/2 w-full gap-x-4 p-4 text-[#091f92] h-32 lg:h-full">
            <p className="h-2/3 lg:text-3xl text-2xl font-medium text-center text-pretty">Fuerte y Suave</p>
            <a href="https://www.tiktok.com/@musikland_/video/7354263436462738720?_r=1&_t=ZN-8wKRX6XsZPS" target="_blank"><button className="bg-[#091f92] text-white p-2 rounded-md w-full hover:scale-[1.01] hover:bg-[#091f92]/95 transition">Ver vídeo</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
