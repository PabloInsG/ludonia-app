import { Route, Routes } from 'react-router-dom'
import { Libros } from '../components/Libros'
import { Home } from '../components/Home'
import { NotFound } from '../components/NotFound'
import { Canciones } from '../components/Canciones'
import { Instrumentos } from '../components/Instrumentos'
import { Actividades } from '../components/Actividades'
import { CancionesZeroUno } from '../components/CancionesZeroUno'
import { CancionesUnoDos } from '../components/CancionesUnoDos'
import { CancionesDosTres } from '../components/CancionesDosTres'
import { ActividadesZeroUno } from '../components/ActividadesZeroUno'
import { ActividadesUnoDos } from '../components/ActividadesUnoDos'
import { ActividadesDosTres } from '../components/ActividadesDosTres'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/canciones" element={<Canciones />}>
          <Route path="0-1" element={<CancionesZeroUno />} />
          <Route path="1-2" element={<CancionesUnoDos />} />
          <Route path="2-3" element={<CancionesDosTres />} />
        </Route>
        <Route path="/instrumentos" element={<Instrumentos />} />
        <Route path="/actividades" element={<Actividades />}>
          <Route path="0-1" element={<ActividadesZeroUno />} />
          <Route path="1-2" element={<ActividadesUnoDos />} />
          <Route path="2-3" element={<ActividadesDosTres />} />
        </Route>
        <Route path="*" element={<NotFound />} /> 
    </Routes>
  )
}
