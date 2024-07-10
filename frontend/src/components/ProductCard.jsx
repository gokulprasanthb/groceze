import React from 'react'
import {Link} from 'react-router-dom';
import { FaIndianRupeeSign } from "react-icons/fa6";
import rupee from '../assets/rupee.svg'


const ProductCard = ({product}) => {
  return (
    
    <div id='products' className="col-sm-12 col-md-6 col-lg-3 my-3 w-auto  ">
      

        <div className="card p-3 rounded-lg border-b-2 border-gray-200 shadow-md h-80 w-72 ">
            <Link to={"/product/"+product._id}><img className="card-img-top mx-auto w-36 h-36" src={product.images[0].image}/></Link>
                
                
                <div className="card-body d-flex flex-column space-y-0 flex justify-center pt-4">
                  <h5 className="card-title flex justify-center text-black font-semibold border-t-2 border-red-500 pt-2">{product.name}</h5>
                  <p className="card-text flex justify-center font-bold text-black"><FaIndianRupeeSign className='pt-1 mt-1' /><span className='text-2xl'>{product.price}</span>
                  <s className='text-sm font-normal pt-2 pl-2 text-gray-500'>{product.oldPrice}</s></p>
                  <Link to={"/product/"+product._id} id="view_btn" className="btn btn-block bg-yellow-400 mt-4 hover:bg-yellow-500">Add</Link>
                </div>
        </div>
      </div>
  )
}

export default ProductCard