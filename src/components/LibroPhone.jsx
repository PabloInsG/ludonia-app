import { useRef } from 'react'
import portada from "../assets/portada.png"
import primera from "../assets/primera.png"
import segunda from "../assets/segunda.png"
import tercera from "../assets/tercera.png"
import cuarta from "../assets/cuarta.png"
import quinta from "../assets/quinta.png"
import sexta from "../assets/sexta.png"
import septima from "../assets/septima.png"
import octava from "../assets/octava.png"
import novena from "../assets/novena.png"
import decima from "../assets/decima.png"
import onceava from "../assets/onceava.png"
import contraportada from "../assets/contraportada.png"
import HTMLFlipBook from 'react-pageflip'

export const LibroPhone = () => {
    const libro = useRef();
  return (
    <>
        <HTMLFlipBook ref={libro} width={170} height={250} showCover={true}>
            <div className="demoPage"><img src={portada} /></div>
            <div className="demoPage"><img src={primera} alt="" /></div>
            <div className="demoPage"><img src={segunda} /></div>
            <div className="demoPage"><img src={tercera} /></div>
            <div className="demoPage"><img src={cuarta} /></div>
            <div className="demoPage"><img src={quinta} /></div>
            <div className="demoPage"><img src={sexta} /></div>
            <div className="demoPage"><img src={septima} /></div>
            <div className="demoPage"><img src={octava} /></div>
            <div className="demoPage"><img src={novena} /></div>
            <div className="demoPage"><img src={decima} /></div>
            <div className="demoPage"><img src={onceava} /></div>
            <div className="demoPage bg-[#0091ed]"></div>
            <div className="demoPage"><img src={contraportada} /></div>
        </HTMLFlipBook>
    </>
  )
}
