import { StrictMode, useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Register from "./Register.jsx";
import MobileNav from "./MobileNav";
import ProductDetails from "./ProductDetails.jsx";
import SearchResult from "./SearchResults.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drawer from "./Drawer.jsx";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./footer.jsx";
import Login from "./Login.jsx";
import Cart from "./cart.jsx";
import Account from "./Account.jsx";

function Main() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState(""); 



  useEffect(()=>{
    console.log("we worked")
  }, [isOpen])
  
  return (
    <StrictMode>
      <BrowserRouter>
        <MobileNav setSearchQuery={setSearchQuery}toggle={()=> setIsOpen(prev => !prev)}  />
        {searchQuery.trim() !== "" && <SearchResult searchQuery={searchQuery} />}
        <Drawer isOpen={isOpen} toggle={() => setIsOpen(prev => !prev)}/>

        
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
        <ToastContainer 
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={true}
          closeOnClick
          pauseOnHover
          draggable
          // theme="colored" // we’ll override this with custom styles
        />
        <Footer/>
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
