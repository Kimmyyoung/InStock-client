
<<<<<<< HEAD
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Warehouses from './pages/Warehouses';
=======
import './App.scss'
>>>>>>> develop

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Warehouses />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
