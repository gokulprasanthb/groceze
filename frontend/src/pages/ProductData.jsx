import React, { useState,  useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { toast } from 'react-toastify';
import { FaIndianRupeeSign } from "react-icons/fa6";



const ProductData = ({cartItems,setCartItems}) => {
    const[product, setProduct] = useState(null)
    const[quantity, setQuantity] = useState(1)
    const {id} = useParams()

    useEffect(() => {
        fetch('http://localhost:8000/api/v1' + '/products/' + id)
        .then(res => res.json())
        .then(res => setProduct(res.product))
    },[])

                //ADD TO CART FUNCTION IMPLEMENTATAION
    function addToCart(){
        const isItemExist = cartItems.find((item) => item.product._id == product._id)
        if(!isItemExist){
            const newItem = {product, quantity}
            setCartItems((state) => [...state, newItem])
            toast.info("product added to cart!")
        }
    }

    function incrementQuantity(){
        if(product.stock == quantity){
            return;
        }
        setQuantity((state) => state + 1)
    } 
    function decrementQuantity(){
        if(quantity > 1){
            setQuantity((state) => state - 1)
        }
        
    } 

  return (
    product && <div className="flex flex-auto w-auto">
        <div className="flex justify-center items-center md:pl-28 ">
            <div id="product_image" className='p-20 pr-20'>
                <img  src={product.images[0].image} alt="sdf" className='h-80 w-80'/>
            </div>

            <div className="w-2/4 mr-40 mt-10 space-y-5 ">
                <div className='font-medium text-2xl'>
                    <h1>{product.name2}</h1>
                </div>

                {/* <hr/>
                <div className="rating-outer">
                    <div className="rating-inner"></div>
                </div> */}

                <hr/>
                <div>
                    <p>M.R.P <s className='text-red-600'>{product.oldPrice}</s></p>
                    <p className='font-medium text-3xl flex text-green-700'><FaIndianRupeeSign className='pt-1 mt-1' />{product.price}</p>
                 </div>
    
                <div className=" flex flex-row w-20 space-x-4">
                    
                    <button onClick={decrementQuantity} className='bg-cyan-500 outline-none h-10 w-20 px-2 rounded-lg text-center font-bold text-2xl'>-</button>
                    <input className='outline-none bg-slate-200 w-10 font-medium text-center' type="number" value={quantity} readOnly/>
                    <button onClick={incrementQuantity} className='bg-cyan-500 outline-none h-10 w-20 px-2 rounded-lg text-center font-bold text-xl'>+</button>
                    
                </div>

                <button type="button" onClick={addToCart} disabled={product.stock == 0} id="cart_btn" className="btn btn-warning d-inline ">Add to Cart</button>

                <hr/>

                <p>Status: <span className='font-bold'>{product.stock > 0 ?  "In Stock" : "Out of stock"}</span></p>

                <hr/>

                <h4> <strong>Description: </strong></h4>
                <p>{product.description}</p>
                <hr/>
                <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>
				
                <div className="rating w-50"></div>
						
            </div>

        </div>

    </div>
  )
}

export default ProductData