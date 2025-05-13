/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MenuOption = (props) => {
    const { option, to } = props;
    return (
        <button className='flex items-center px-10 py-4 transition-all cursor-grab hover:scale-[1.05] hover:bg-white'>
            <Link to={to}><span className='text-2xl font-bold text-blue-950'>/ {option}</span></Link>
        </button>
    )
}

export const Menu = (props) => {
    const { menuOpened, setMenuOpened } = props;
  return (
    <>
        <button 
        onClick={() => setMenuOpened(!menuOpened)}
        className='z-20 fixed top-12  right-12 p-3 bg-black w-11 h-11 rounded-md'>
            <div className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "rotate-45 translate-y-0.5" : ""}`}></div>
            <div className={`bg-white h-0.5 rounded-md w-full transition-all my-1 ${menuOpened ? "hidden" : ""}`}></div>
            <div className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "-rotate-45" : ""}`}></div>
        </button>
        <div className={`z-10 fixed top-0 right-0 bottom-0 bg-blue-200 transition-all overflow-hidden justify-center flex flex-col ${menuOpened ? "w-96" : "w-0"}`}>
          <MenuOption option="Libros" to="/libros"  />
          <MenuOption option="Canciones" to="/canciones/0-1" />
          <MenuOption option="Instrumentos" to="/instrumentos"  />
          <MenuOption option="Actividades" to="/actividades" />
        </div>
    </>
  )
}
