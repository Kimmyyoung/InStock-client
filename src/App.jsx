
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Warehouses from './pages/Warehouses/Warehouses';
import './App.scss'

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
