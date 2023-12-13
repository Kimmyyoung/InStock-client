import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import AddEdit from "./pages/Add-Edit/Add-Edit";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Warehouses />} />
        {/* <Route path="/warehouses:warehouseId" element={<Warehouses />} /> */}
        <Route path="/inventory" element={<Inventory />} />
        {/* <Route path="inventory/:inventoruId" element={<Inventory />} /> */}
        <Route path="add-edit" element={<AddEdit />} />
        {/* <Route path="/addEdit/:addEditId" element={<AddEdit />} /> */}
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  );
}
