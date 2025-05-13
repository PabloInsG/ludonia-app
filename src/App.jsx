import './App.css';
import { FollowMouse } from './components/FollowMouse.jsx';
import { AppRouter } from './router/AppRouter.jsx';

function App() {
  return (
    <>
      <AppRouter></AppRouter>
      <FollowMouse/>
    </>
  )
}

export default App
