import React from 'react'
import {Route,Routes} from "react-router-dom";
import Products from './components/Products';
import Login from './components/Login';
import Signup from './components/Signup';
import AddProduct from './components/AddProduct';
const AllRouting = () => {
  return (
    <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/addproducts' element={<AddProduct/>}/>
    </Routes>
  )
}

export default AllRouting
// Compare this snippet from Ecommerce-follow-along/frontend/src/components/signup.jsx;
// import React, { useState,useEffect}
// import styles from "./signup.module.css";
// import axios from 'axios';
// const Signup = () => {
  //const[signupData,setSignupData] = useState({
  //     name:"",})}
  //email:"",
  //   password:"",
  //  phone:"",
