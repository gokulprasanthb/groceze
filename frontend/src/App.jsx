import React, { useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductData from './pages/ProductData'

const App = () => {
  const[cartItems, setCartItems] = useState([])

  return (
    <div>
      <Router>
          <div>
            <Header cartItems={cartItems}/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/search" element={<Home/>}/>
              <Route path="/product/:id" element={<ProductData cartItems={cartItems} setCartItems={setCartItems}/>}/>
            </Routes>
          </div>
      </Router>
      <Footer/>
    </div>
  )
}

export default App