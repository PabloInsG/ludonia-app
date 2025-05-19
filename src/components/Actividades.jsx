import { Link, Outlet, useNavigate } from "react-router-dom"
import { Logo } from "./Logo";
import { useEffect } from "react";

export const Actividades = () => {
  const navegar = useNavigate();

  const regExp = new RegExp(/actividades\/(?:(?!0-1|1-2|2-3).)*/g)

  useEffect(() => {
      if (window.location.href.matchAll(regExp)) {
        navegar("0-1")
      }
    }, [])


  return (
    <>
      <div className="bg-[#091F92] h-full items-center flex flex-col">
        <Logo />
        <div className="flex gap-x-4 text-white text-xl font-bold w-full justify-center ">
          <Link to="0-1" className="underline text-2xl">0-1</Link>
          <Link to="1-2" className="underline text-2xl" >1-2</Link>
          <Link to="2-3" className="underline text-2xl" >2-3</Link>
        </div>
          <Outlet/>
      </div>
    </>
  )
}