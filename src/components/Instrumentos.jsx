
import { Logo } from "./Logo"
import { VideosComponent } from "./VideosComponent";
import tambor1 from "../assets/tambor1.jpeg"
import tambor2 from "../assets/tambor2.jpeg"
import tambor3 from "../assets/tambor3.jpeg"

export const Instrumentos = () => {

  const videosArray = [
    {nombre: "Tambor de Bolas", link: "https://www.youtube.com/embed/obaaKdMKIME?si=8E1isDto7tfYjJ6U"},
    {nombre: "Castañuelas", link: "https://www.youtube.com/embed/16Vgrj3V5wY?si=quQ47O2UTjXrHSkh"},
    {nombre: "Palo de Agua", link: "https://www.youtube.com/embed/byqe6hDVI74?si=vxKOKqEA5J9DY5Dp"},
    {nombre: "Cotidianófonos", link: "https://www.youtube.com/embed/eXic2FUKzYE?si=WhFyPhqw_0sSjwuS"},
  ]

  return (
    <>
      <div className="w-full h-full flex flex-col items-center gap-y-8 bg-[#091F92]">
        <Logo />
        <div className="flex flex-col lg:w-8/12 w-full h-full gap-y-4 p-2">
          <h1>Instrumentos Caseros</h1>
          {videosArray.map((video) => (
            <VideosComponent key={video.nombre} nombre={video.nombre} link={video.link} />
          ))}
          <div className="flex flex-col bg-white rounded-md w-full gap-x-4 p-4 text-[#091f92]">
            <div className="flex lg:flex-row justify-between gap-x-2">
              <img 
                src={tambor1} 
                className="h-[550px] w-full"
                alt="Foto de un Tambor" 
              />
              <img 
                src={tambor2} 
                className="h-[550px] w-full" 
                alt="Foto de un Tambor" 
              />
              <img 
                src={tambor3} 
                className="h-[550px] w-full" 
                alt="Foto de un Tambor" 
              />
            </div>
            <p className="text-3xl">Tambor</p>
          </div>
        </div>
      </div>
    </>
  )
}
