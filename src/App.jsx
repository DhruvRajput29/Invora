import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/NavbarComponents/Navbar";
import Sidebar from "./Components/SidebarComponents/Sidebar";
import DashboardPage from "./Pages/DashboardPage";
import Dashboardpage from "./Components/DashboardComponents/Dashboard";
import ProductPage from "./Pages/ProductPage";
import Addproduct from "./Components/ProductComponents/AddProduct/Addproduct";
import InventoryPage from "./Pages/InventoryPage";
import InvoicePage from "./Pages/InvoicesPage";
import CreateInvoides from "./Components/InvoicesComponents/Create/CreateInvoices";
import ManageruserPage from "./Pages/ManageuserPage";
import LoginPage from "./Pages/LoginPage";
import NotificationPage from "./Pages/NotificationPage";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const location = useLocation();

  const hideLayout =
    location.pathname === "/login";
  return (
    <>
      {!hideLayout && (
        <>
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

          <div className="flex h-[calc(100vh-64px)] overflow-hidden">
            <Sidebar isOpen={isOpen} />

            <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
              <Routes>
                <Route path="/" element={<Dashboardpage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/products/addproduct" element={<Addproduct />} />
                <Route path="/inventory" element={<InventoryPage />} />
                <Route path="/invoice" element={<InvoicePage />} />
                <Route path="/invoice/create" element={<CreateInvoides />} />
                <Route path="/manageusers" element={<ManageruserPage />} />
                <Route path="/notifications" element={<NotificationPage />} />
              </Routes>
            </main>
          </div>
        </>
      )}

      {hideLayout && (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
