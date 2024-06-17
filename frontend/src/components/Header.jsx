import React from 'react'
import logo from '../assets/grocelogo.png'
import Search from './Search'

const Header = () => {
  return (
    <div>
        <nav className="flex flex-row bg-green-500 p-2">
        <div className="flex flex-row">
          <a href="/"><img className='w-40 m-3 ml-5' src={logo} alt="" /></a>
            
  
        </div>

                             {/* search bar */}
        <div className="col-12 col-md-6 mt-2 mt-md-0"> 
          <Search/>
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <span id="cart" className="ml-3">Cart</span>
          <span className="ml-1" id="cart_count">2</span>
        </div>
      </nav>
    </div>
  )
}

export default Header