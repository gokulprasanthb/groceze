import React, { useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductData from './pages/ProductData'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart'

const App = () => {
  const[cartItems, setCartItems] = useState([])

  return (
    <div>
      <Router>
          <div>
            <ToastContainer theme='dark' position='top-center'/>
            <Header cartItems={cartItems}/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/search" element={<Home/>}/>
              <Route path="/product/:id" element={<ProductData cartItems={cartItems} setCartItems={setCartItems}/>}/>
              <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
            </Routes>
          </div>
      </Router>
      <Footer/>
    </div>
  )
}

export default App