import { BrowserRouter,Route,Routes } from "react-router-dom";
import React from 'react';
import "./App.css";
//import CartHeader from "./components/CartHeader";

import 'bootstrap/dist/css/bootstrap.min.css';
// import ProductList from "./pages/ProductList";
// import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";

// import Cart from "./pages/Cart";
// import CartHeader from "./components/CartHeader"

function App() {
  return (
 <BrowserRouter>
     <div>
     <Routes>
     <Route path='/' exact  element={<Home/>} />
     {/*<Route path='/productlist' exact  element={<ProductList/>} />
     <Route path='/cart' exact  element={<Cart/>} />*/}
     </Routes>
     </div>
 </BrowserRouter>

  );
}

export default App;