import React from 'react'
import logo from '../assets/grocelogo.png'
import Search from './Search'

const Header = ({cartItems}) => {
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

          <div className="mt-4 p-3 rounded-xl text-center font-semibold text-xl bg-amber-400">
            {/* <span id="cart" className="ml-3">Cart</span> */}
            <span className="ml-1" id="cart_count">cart {cartItems.length}</span>
          </div>
      </nav>
    </div>
  )
}

export default Header