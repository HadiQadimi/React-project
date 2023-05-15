import React from "react";
import Menu from "./Menu";
import {Routes,Route 
       } from "react-router-dom";
import About from "./About";
import Product from "./Product";
import Home from "./Home";
import Order from "./Order";
import Tellus from "./Tellus";
import Contact from "./Contact";
const Body=()=>{
    return(
        <div>
            <Routes>
            <Route path="/"         element={<Home/>}/>
            <Route path="/Menu"     element={<Menu/>}/>
            <Route path="/About"    element={<About/>}/>
            <Route path="/Product"  element={<Product/>}/>
            <Route path="/Order"    element={<Order/>}/>
            <Route path="/Tellus"   element={<Tellus/>}/>
            <Route path="/Contact"   element={<Contact/>}/>

           </Routes>
        </div>
    )
}
export default Body;