import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import './App.css';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
import Profile from './Components/Profile';
import Logout from './Components/Logout';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route exact path="/" element={<Product/>}/>
              <Route exact path="/addproduct" element={<AddProduct/>}/>
              <Route exact path="/updateproduct" element={<UpdateProduct/>}/>
              <Route exact path="/signup" element={<SignUp/>}/>
              <Route exact path="/profile" element={<Profile/>}/>
              <Route exact path="/logout" element={<Logout/>}/>
            </Routes>
            {/* <Footer></Footer> */}
        </BrowserRouter>
    </div>
  );
}

export default App;
