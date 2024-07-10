import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'
import { FaIndianRupeeSign } from "react-icons/fa6";
import emptyImg from '../assets/empty.png'


const Cart = ({cartItems, setCartItems}) => {
    const[done, setDone] = useState(false)

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

    function placeOrderHandler() {
        fetch('http://localhost:8000/api/v1'+'/order', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cartItems)
        })
        .then(() => { 
            setCartItems([]); 
            setDone(true);
            toast.success("Order Done Successfully!")
        })
    }

  return (
    cartItems.length > 0 ?
    <Fragment>
        <div className="flex flex-col space-y-5 text-xl w-auto">
            <h2 className="mt-20 ml-96">Your Cart having: <b>{cartItems.length} items</b></h2>
            
            <div className="flex flex-auto space-x-10 ml-5">
                <div className="m-5 w-3/5 space-y-5">
                    {cartItems.map((item) => 
                        (<Fragment>
                            
                            <div className="flex space-x-8 py-2 my-2 h-40 border-t-2 border-green-500 ">
                                        <div className="pr-4 mt-2">
                                            <img src={item.product.images[0].image} alt={item.product.name} className='h-360 w-40'/>
                                        </div>

                                        <div className="w-72 mt-16 flex justify-center">
                                        <Link to={"/product/"+item.product._id}>{item.product.name}</Link>
                                        </div>


                                        <div className="mt-16 font-bold">
                                            <p className='flex'><FaIndianRupeeSign className='pt-1 mt-1' />{item.product.price}</p>
                                        </div>

                                        <div className="mt-16 px-10 w-80">
                                            <div className="flex flex-row space-x-5">
                                                <span className="btn btn-info" onClick={() => decrementQuantity(item)}>-</span>
                                                <input type="number" value={item.quantity} className='w-14 bg-slate-200 text-center rounded-lg' readOnly/>
                                                <span className="btn btn-info" onClick={() => incrementQuantity(item)}>+</span>
                                            </div>
                                        </div>

                                        <div className="mt-16">
                                            <button className='text-gray-700 bg-gray-300 p-2 rounded hover:text-white hover:bg-gray-700 duration-300' onClick={() => removeCartItem(item)}>Remove</button>
                                        </div>
                            </div>
                        </Fragment>)
                    )}
                    
                </div>

                
                <div className='space-y-3 w-1/5 mt-10 pl-20'>
                    <h4><strong>Order Summary</strong></h4>
                    <hr />
                    <p className='text-red-500'>No Of products:<span className='font-bold text-black pl-2'>{cartItems.reduce((acc,item) => (acc + item.quantity),0)} </span></p>
                    <p className='text-red-500 flex'>Est. total:<span className='font-bold text-black flex pl-2'><FaIndianRupeeSign className='pt-1 mt-1' />{cartItems.reduce((acc,item) => (acc + item.product.price*item.quantity),0)}</span></p>
                    <hr />

                    <button onClick={placeOrderHandler} id="checkout_btn" className="btn btn-success px-5 mt-4">Place Order</button>
                </div>
                
                
            </div>
        </div>
    </Fragment>
    : (!done ? 
            <div className='flex flex-col text-center justify-center md:w-3/4 md:ml-44 md:my-20 md:mt-30'>
                <img className='flex w-96 h-96 mx-96' src={emptyImg} alt="" />
                <h2 className='text-center pt-10 text-red-600 font-medium text-2xl'>Oh! your cart is Empty.. grab something</h2>
            </div>
                : 
            <div className='text-green-600 text-center space-y-5 text-xl'>
                <h1 className='text-center pt-40 font-medium text-2xl'><strong>Order done!</strong></h1>
                <p>your order had completed successfully...</p>
            </div> )
  )
}

export default Cart