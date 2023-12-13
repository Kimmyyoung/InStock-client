
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Warehouses from './pages/Warehouses';

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
