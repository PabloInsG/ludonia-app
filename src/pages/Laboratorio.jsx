import '../App.css'
//import { useGSAP } from '@gsap/react';
//import * as HomePage from './pages/Home.jsx';
import { Header } from '../components/Header.jsx';
import { FollowMouse } from '../components/FollowMouse.jsx';
import { MouseScroll } from '../components/MouseScroll.jsx';
import { Footer } from '../components/Footer.jsx';
import fondo from '../assets/protesic.png';

function App() {
  return (
    <>
      <Header />
      <div className='w-full h-full'>
        <div className="absolute -z-10 w-full">
            <img src={fondo} className="w-full h-screen" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center h-full">
            <h1>Laboratorio</h1>
            <h3 className='mt-10'>SOMOS UN LABORATORIO DENTAL CREATIVO QUE FUSIONAMOS TRADICIÓN E INNOVACIÓN</h3>
            <MouseScroll/>
        </div>
        <div className="w-full h-60 bg-black items-center flex flex-col">
          <div className="flex flex-col text-wrap w-1/2 space-y-6">
            <h2 className="text-3xl mt-10">Laboratorio Dental Creativo</h2>
            <p className="text-gray-400">Generamos todo tipo de prótesis dentales, desde prótesis fijas a removibles (excepto ortodoncias).</p>
            <p className="text-gray-400">Nos hemos especializado en sobredentaduras, prótesis completas personalizadas, prótesis híbridas y prótesis fijas sobre zirconio, disilicato de litio y metal cerámica.</p>
          </div>
          <div className="-z-10 w-full">
            <img src={fondo} className="w-full h-screen" alt="" />
          </div>
        <div className="w-full h-60 bg-black items-center flex flex-col">
          <div className="flex flex-col text-wrap w-1/2 space-y-6">
            <h2 className="text-3xl mt-10">Laboratorio Dental Creativo</h2>
            <p>Generamos todo tipo de prótesis dentales, desde prótesis fijas a removibles (excepto ortodoncias).</p>
            <p>Nos hemos especializado en sobredentaduras, prótesis completas personalizadas, prótesis híbridas y prótesis fijas sobre zirconio, disilicato de litio y metal cerámica.</p>
          </div>
        </div>
        <div>
          <Footer href="cuidados" texto="Cuidados"/>
        </div>
        </div>
      </div>
      <FollowMouse/>
    </>
  )
}

export default App