import React from 'react';
import './App.css';
import './Scss/index.css';
import NAvbar from './Scss/Componentes/NAvbar';
import Footer from './Scss/Componentes/Footer';
import SubFooter from './Scss/Componentes/SubFooter';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import SingleProduct from './Pages/SIngleProduct';
import CartItems from './Pages/CartItems';


//import CartItems from './Pages/CartItems';


function App() {
  return (
    <div className="App">
       <NAvbar/>
       <Routes>
        <Route path="/" element={<Home />} /> 
        <Route exact path="/products/:id" element={<SingleProduct />} />
        <Route exact path="/cart" element={<CartItems/>} />  
      </Routes> 
      <Footer/>
      <SubFooter/>
    </div>
  );
};


export default App
