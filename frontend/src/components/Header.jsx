import React from 'react'
import logo from '../assets/grocezeLogo.png'
import Search from './Search'
import { Link } from 'react-router-dom'
import trolley from '../assets/cart.svg'
import login from '../assets/profile.svg'


const Header = ({cartItems}) => {
  return (
    <div className='w-auto'>
        <nav className="flex flex-row md:bg-stone-50 shadow-md p-2 w-auto">
          <div className="flex flex-row">
            <Link to="/"><img className='w-56 h-20 m-3 ml-5 p-0' src={logo} alt="logo"/></Link>
          </div>

                              {/* search bar */}
          <div className="col-12 col-md-6 mt-2 ml-20 flex flex-col"> 
            <Search/> 

                {/* PRODUCT CATEGORY NAVIGATION */}
            <ul className='flex font-medium gap-7 pt-3 text-lg max-md:hidden text-black'>
              <li><a className='hover:text-red-500 hover:no-underline duration-200' href="/">New Products</a></li>
              <li><a className='hover:text-red-500 hover:no-underline duration-200' href="/">Vegetables</a></li>
              <li><a className='hover:text-red-500 hover:no-underline duration-200' href="/">Diaries</a></li>
              <li><a className='hover:text-red-500 hover:no-underline duration-200' href="/">bakery & Beverages</a></li>
              <li><a className='hover:text-red-500 hover:no-underline duration-200' href="/">Household & Cleaning</a></li>
            </ul>
          </div>

            {/* CART COUNT */}
          <div className='flex md:px-32 md:py-6 py-4 text-black'>
            <Link id="cart_count" className='pt-2 pl-1 text-lg font-bold flex hover:no-underline hover:text-black' to={"/cart"} ><img className='w-10 h-10' src={trolley} alt="" /><span className='p-2'>{cartItems.length}</span></Link>
          </div>

          <a href="/"><img className='w-10 h-10 mt-[30px]  max-md:hidden' src={login} alt="" /></a>
          
      </nav>
    </div>
  )
}

export default Header