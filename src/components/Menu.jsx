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
        className={`z-20 ${menuOpened ? "fixed" : "absolute"} top-12 right-12 lg:right-72 p-3 bg-white w-11 h-11 rounded-md `}>
            <div className={`bg-[#091f92] h-1 mb-1 w-full transition-all ${menuOpened ? "rotate-45 translate-y-1 rounded-md" : ""}`}></div>
            <div className={`bg-[#091f92] h-1 w-full transition-all ${menuOpened ? "-rotate-45 -translate-y-1 rounded-md" : ""}`}></div>
        </button>
        <div className={`z-10 fixed top-0 right-0 bottom-0 bg-blue-200 transition-all overflow-hidden justify-center flex flex-col ${menuOpened ? "lg:w-96 w-full" : "w-0"}`}>
          <MenuOption option="Libros" to="/libros"  />
          <MenuOption option="Canciones" to="/canciones/0-1" />
          <MenuOption option="Instrumentos" to="/instrumentos"  />
          <MenuOption option="Actividades" to="/actividades" />
        </div>
    </>
  )
}
