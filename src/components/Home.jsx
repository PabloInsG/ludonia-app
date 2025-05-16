import ReactLenis from 'lenis/react'
import { Link } from 'react-router-dom'
import canciones from "../assets/canciones.webp"
import actividades from "../assets/actividades.webp"
import libros from "../assets/libros.webp"
import instrumentos from "../assets/instrumentos.webp"
import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

export const Home = () => {

    const targetRef = useRef(null)

    const [bgImage, setBgImage] = useState(libros)
    const [num, setNum] = useState(1)
    const [propIn, setPropIn] = useState(false)

    const imgData = [
        { id: 1, src: `${libros}`, text: "Libros", link: "/libros" },
        { id: 2, src: `${canciones}`, text: "Canciones", link: "/canciones/0-1" },
        { id: 3, src: `${instrumentos}`, text: "Instrumentos", link: "/instrumentos" },
        { id: 4, src: `${actividades}`, text: "Actividades", link: "/actividades/0-1" },
    ]
  return (
    <>
        <div className="fixed -z-10 flex w-full lg:h-[100vh] h-screen">
                    <div className="lg:w-1/3 w-0 flex flex-col justify-between lg:bg-[#091F92]">
                        <div className="!w-70 h-1/2 flex flex-col justify-center gap-y-2">
                            <h1 className='xl:text-8xl text-center text-white opacity-100'>LUDONÍA</h1>
                            <p className='text-center text-xl '>Donde el juego y la música crean magia.</p>
                        </div>
                        <div className="flex items-center ml-12 mb-10">
                            <div className="w-8">
                            <h1 className='text-sm p-2'>0{num}</h1>
                            </div>
                            <div className="">
                                <hr className='w-16 h-px border-0 bg-yellow-900'></ hr>
                            </div>
                            <div className="w-8">
                                <h1 className='text-sm p-2'>0{imgData.length}</h1>
                            </div>
                        </div>
                    </div>
                    <CSSTransition nodeRef={targetRef} in={propIn} timeout={500} classNames={"my-node"}>
                        <div ref={targetRef} className="lg:w-2/3 w-full opacity-50" style={{backgroundImage: `url(${bgImage}) `, backgroundSize: "cover", backgroundPosition: "center"}}>
                        </div>
                    </CSSTransition>
        </div>
        <div className="z-20 lg:h-[100vh] flex lg:flex-row flex-col h-screen items-center" id="example">
            <ReactLenis root="true" id="lenis" options={{ smooth: true, orientation: "horizontal",  }} >
                {imgData.map((image) => (
                    <Link className="link xl:text-3xl text-xl" key={image.id} to={image.link} >
                        <h1 className={bgImage === image.src ? 'textHover hover:scale-105 transition duration-700' : 'textNormal hover:scale-105 transition duration-700'} onTouchStart={() => {
                            bgImage === image.src ? '' : setBgImage(image.src) 
                            bgImage === image.src ? setPropIn(false) : setPropIn(true)
                            setNum(image.id)
                        }} onMouseEnter={() => {
                            bgImage === image.src ? '' : setBgImage(image.src) 
                            bgImage === image.src ? setPropIn(false) : setPropIn(true)
                            setNum(image.id)
                        }}
                        onMouseOut={() => setPropIn(false)}>0{image.id}. {image.text}</h1>
                    </Link>
                ))}
                <StyleSheet />
            </ReactLenis>
        </div>
    </>
  )
}


function StyleSheet() {
    return (
        <style>{`
        html {
            scroll-snap-type: y mandatory;
        }

        ::-webkit-scrollbar {
            display: none;
        }
        
        #example {
            display: flex;
            width: max-content;
        }

        .my-node-enter {
            opacity: 0.15;
        }
        .my-node-enter-active {
            opacity: 0.5;
            transition: opacity 500ms;
        }
        .my-node-exit {
            opacity: 0.5;
        }

        .link {
            display: flex;
            margin-left: 70px;
            align-items: center;
            text-decoration: none;
            font-weight: 600;
            letter-spacing: -3px;
            line-height: 1.2;
            scroll-snap-align: start;
            width: 50vw;
        }

        .textHover {
            -webkit-text-fill-color: #FFF;
            -webkit-text-stroke: 0px #FFF;
        }

        .textNormal {
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 1.2px #FFF;
        }

        .img-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            position: relative;
        }

        .img-container > div {
            width: 90%;
            height: 100%;
            background: #f5f5f5;
            overflow: hidden;
        }

        .img-container img {
            width: 100%;
            height: 100%;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 100%;
                height: 100%;
            }
        }

        .img-container h2 {
            color: #FFFFFF;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #FFF;
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
    )
}



