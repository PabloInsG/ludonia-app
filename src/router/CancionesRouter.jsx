import { Route, Routes } from "react-router-dom"
import { NotFound } from "../components/NotFound"
import { Canciones } from "../components/Canciones"
import { CancionesDosTres } from "../components/CancionesDosTres"
import { CancionesUnoDos } from "../components/CancionesUnoDos"
import { CancionesZeroUno } from "../components/CancionesZeroUno"

export const CancionesRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Canciones />} />
        <Route path="/0-1" element={<CancionesZeroUno />} />
        <Route path="/1-2" element={<CancionesUnoDos />} />
        <Route path="/2-3" element={<CancionesDosTres />} />
        <Route path="*" element={<NotFound />} /> 
    </Routes>
  )
}