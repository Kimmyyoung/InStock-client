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

export default function App() {

  
  return (

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Warehouses />} />
        {/* <Route path="/warehouse/:warehouseId" element={<Warehouses />} /> */}
        <Route path="/warehouseDetails" element={<WarehouseDetails/>} /> 
        <Route path="/editWarehouse" element={<EditWarehouse />} /> 
        {/* <Route path="/addWarehouse/:addWarehouseId" element={<EditWarehouses />} /> */}
        <Route path="/inventory" element={<Inventory />} />
        {/* <Route path="/deleteInventory/:deleteInventoryId" element={<Inventory />} /> */}   
        <Route path="/inventoryItemDetails" element={<InventoryItemDetails />} />
        <Route path="/editInventoryOutOfStock" element={<EditInventoryOutOfStock />} />
        {/* <Route path="/inStock/:inStockId" element={<EditInventoryOutOfStock  />} /> */}
        <Route path="/addNewInventoryOutOfStock" element={<AddNewInventoryItemOutOfStock />} /> 
        {/* <Route path="/inStock/:inStockId" element={<AddNewInventoryItemOutOfStock  />} /> */}

        {/* Add New Warehouse */}
        <Route path= "/addNewWarehouse" element={<AddNewWarehouse />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
