import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
          <div>
            <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/search" element={<Home/>}/>
            </Routes>
          </div>
      </Router>
      <Footer/>
    </div>
  )
}

export default App