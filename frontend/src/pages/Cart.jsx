import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cartItems, setCartItems}) => {

                    // increasing or decreasing the particular product
    function incrementQuantity(item){ 
        if(item.product.stock == item.quantity){
            return;
        }
        const upadatedItems = cartItems.map((i) =>{
            if(i.product._id == item.product._id){
                i.quantity++;
            }
            return i;
        })
        setCartItems(upadatedItems)
    } 

    function decrementQuantity(item){
        if(item.quantity > 1){
            const upadatedItems = cartItems.map((i) =>{
                if(i.product._id == item.product._id){
                    i.quantity--;
                }
                return i;
            })
            setCartItems(upadatedItems)
        }
    } 

    function removeCartItem(item) {
        

        const upadatedItems = cartItems.filter((i) =>{
            if(i.product._id !== item.product._id){
               return true;
            }
        })
        setCartItems(upadatedItems)
    }

  return (
    cartItems.length > 0 ?
    <Fragment>
        <div className="flex flex-col space-y-5 text-xl ">
            <h2 className="mt-20 ml-96">Your Cart having: <b>{cartItems.length} items</b></h2>
            
            <div className="flex flex-auto space-x-10 ml-5">
                <div className="m-5 w-3/5 space-y-5">
                    {cartItems.map((item) => 
                        (<Fragment>
                            <hr/>
                            <div className="flex space-x-8">
                                        <div className="pr-4">
                                            <img src={item.product.images[0].image} alt={item.product.name} className='h-360 w-40'/>
                                        </div>

                                        <div className="w-72 ">
                                        <Link to={"/product/"+item.product._id}>{item.product.name}</Link>
                                        </div>


                                        <div className="mt-5 font-bold">
                                            <p>${item.product.price}</p>
                                        </div>

                                        <div className="mt-10 px-10 w-80">
                                            <div className="flex flex-row space-x-5">
                                                <span className="btn btn-info" onClick={() => decrementQuantity(item)}>-</span>
                                                <input type="number" value={item.quantity} className='w-14 bg-slate-200 text-center rounded-lg' readOnly/>
                                                <span className="btn btn-info" onClick={() => incrementQuantity(item)}>+</span>
                                            </div>
                                        </div>

                                        <div className="mt-10">
                                            <button className='text-red-600 bg-red-100 p-2 rounded hover:text-white hover:bg-red-700' onClick={() => removeCartItem(item)}>Delete</button>
                                        </div>
                            </div>
                        </Fragment>)
                    )}
                    
                </div>

                
                <div className='space-y-3 w-1/5 mt-10 pl-20'>
                    <h4><strong>Order Summary</strong></h4>
                    <hr />
                    <p>Subtotal:  <span className="order-summary-values">1 (Units)</span></p>
                    <p>Est. total: <span className="order-summary-values">$245.67</span></p>
                    <hr />

                    <button id="checkout_btn" className="btn btn-warning px-5 mt-4">Place Order</button>
                </div>
                
            </div>
        </div>
    </Fragment>
    : <h2 className='text-center pt-40 text-red-500 font-medium text-2xl'>oh! your cart is Empty.. grab something</h2>
  )
}

export default Cart