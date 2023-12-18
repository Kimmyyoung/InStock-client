import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import InventoryItemDetails from "./pages/InventoryItemDetails/InventoryItemDetails";
import EditInventoryOutOfStock from "./pages/EditIventoryOutOfStock/EditIventoryOutOfStock";
import AddNewInventoryItemOutOfStock from "./pages/AddNewInventoryItemOutOfStock/AddNewInventoryItemOutOfStock";
import "./App.scss";
import AddNewWarehouse from "./pages/AddNewWarehouse/AddNewWarehouse";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {

  
  return (

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/warehouse/:warehouseId" element={<WarehouseDetails />} />
        <Route path="/editWarehouse/:id" element={<EditWarehouse />} /> 
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:id" element={<InventoryItemDetails />} />
        <Route path="/editInventory/:id" element={<EditInventoryOutOfStock />} />
        <Route path="/addNewInventoryOutOfStock" element={<AddNewInventoryItemOutOfStock />} /> 
        <Route path= "/addNewWarehouse" element={<AddNewWarehouse />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
