import React, { useState,  useEffect} from 'react'
import {useParams} from 'react-router-dom'

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
        }
    }

  return (
    product && <div className="flex flex-auto">
        <div className="flex justify-center items-center">
            <div id="product_image" className='p-20 pr-20'>
            <img  src={product.images[0].image} alt="sdf" className='h-80 w-80'/>
            </div>

            <div className="w-2/4 mr-40 mt-10 space-y-5 ">
                <div className='font-medium text-2xl'>
                    <h1>{product.name}</h1>
                    <p id="product_id">Product #{product._id}</p>
                </div>

                {/* <hr/>
                <div className="rating-outer">
                    <div className="rating-inner"></div>
                </div> */}

                <hr/>

                <p className='font-medium text-3xl'>${product.price}</p>
                <div className=" flex flex-row w-20 space-x-4">
                    <span className="btn btn-info minus">-</span>
                    <input className='outline-none bg-slate-200 w-10 font-medium text-center' type="number" value={quantity} readOnly/>
                    <input type="number" className="form-control count d-inline" value="3" readOnly />
                    <span className="btn btn-info plus">+</span>
                </div>

                <button type="button" onClick={addToCart} id="cart_btn" className="btn btn-warning d-inline ">Add to Cart</button>

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