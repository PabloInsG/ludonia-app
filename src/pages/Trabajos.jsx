import '../App.css'
//import gsap from 'gsap';
//import { useGSAP } from '@gsap/react';
//import * as HomePage from './pages/Home.jsx';
import { Header } from '../components/Header.jsx';
import { FollowMouse } from '../components/FollowMouse.jsx';

function App() {
  return (
    <>
      <Header />
      <div>
        <div className="flex flex-row-reverse">
            <h1>Trabajos</h1>
        </div>
      </div>
      <FollowMouse/>
    </>
  )
}

export default App