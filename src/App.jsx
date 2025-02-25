import './App.css';
import { Header } from './components/Header.jsx';
import { FollowMouse } from './components/FollowMouse.jsx';
import { WorksGrid } from './components/WorksGrid.jsx';

function App() {
  return (
    <>
      <Header />
      <div className='flex items-center justify-center'>
        <WorksGrid></WorksGrid>
      </div>
      <FollowMouse/>
    </>
  )
}

export default App
