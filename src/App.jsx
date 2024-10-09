import './App.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Header } from './components/Header.jsx';
import { FollowMouse } from './components/FollowMouse.jsx';
import dentadura from './assets/dentadura.jpg';

function App() {
  return (
    <>
      <Header />
      <div>
        <div className="flex flex-row-reverse">
          <img src={dentadura} className="w-2/3 -z-10 h-screen" alt="" />
        </div>
      </div>
      <FollowMouse/>
    </>
  )
}

export default App
