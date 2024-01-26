import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
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
    <Routes>
      <Route path="/" element={<LoginLayout />} />
      <Route path="/signup" element={<SignupLayout />} />

      <Route
        path="/*"
        element={
          <>
            <Header />
            <Routes>
              <Route index element={<NotFoundPage />} />
              <Route path="/warehouses" element={<Warehouses />} />
              <Route path="/warehouse/:warehouseId" element={<WarehouseDetails />} />
              <Route path="/editWarehouse/:id" element={<EditWarehouse />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/inventory/:id" element={<InventoryItemDetails />} />
              <Route path="/editInventory/:id" element={<EditInventoryOutOfStock />} />
              <Route path="/addInventory" element={<AddNewInventoryItemOutOfStock />} />
              <Route path="/addNewWarehouse" element={<AddNewWarehouse />} />
            </Routes>
            <Footer />
          </>
        }
      />
    </Routes>
  </BrowserRouter>
  );
}
function LoginLayout() {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>

        <Login />
    </div>
  );
}

// Layout for Signup page
function SignupLayout() {
  return (
    <div style={{ backgroundColor: 'white !important' }}>
      <Signup />
    </div>
  );
}