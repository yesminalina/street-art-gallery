import PictureProvider from './context/PictureContext'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Favorites from './views/Favorites'
import Home from './views/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <PictureProvider>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favoritos' element={<Favorites />} />
        </Routes>
      </PictureProvider>
    </div>
  )
}
export default App
