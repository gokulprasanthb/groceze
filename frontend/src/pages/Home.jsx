import React, { Fragment, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom'
import heroImg from '../assets/heroImage.png'


const Home = () => {
    const [products, setproducts] = useState([])
    const [searchParams ,setSearchParams] = useSearchParams()

    useEffect(() => {
        fetch('http://localhost:8000/api/v1' + '/products?' + searchParams)
        .then(res => res.json())
        .then(res => setproducts(res.products))
    },[searchParams])

  return (
    <Fragment>
        <div className='flex flex-row px-20 pl-48  py-24 w-full pb-10'>
            <div className='pt-10 w-1/2  mt-2 text-5xl space-y-5 text-green-700 max-md:w-full max-md:text-3xl max-md:text-center max-md:mt-16'>
                <h1 className='text-green-600'>Your One-Stop Shop <br />for<span className='text-red-500'> Daily Essentials</span></h1>
                <h3 className='text-3xl text-stone-600 font-normal'>Order fresh fruits, vegetables, and pantry staples with same-day delivery.</h3>
                <div className='text-xl md:space-x-6 pt-8 max-md:flex max-md:flex-col max-md:items-center max-md:space-y-8'>
                    <a href="#products" className='max-md:hidden px-7 py-3 duration-300 border-2 text-white bg-green-700 w-36 h-14 hover:bg-green-950 hover:text-white hover:green-800 rounded-sm max-md:ml-1 hover:no-underline'>Buy Now</a>
                </div>
            </div>
            <div className='w-5/6 max-md:pl-2 md:pl-0 max-md:w-full'>
                <img src={heroImg} alt="" className='h-full w-full rounded-lg max-md:pl-6 max-md:pt-10 max-md:rounded-lg' />
            </div>
        </div>

        <div id="products" className="container mt-1 pt-0 text-xl w-auto">
            <h1 id="products" className='flex justify-center font-semibold text-3xl p-4 mt-12 w-auto text-black text-start border-b-2 border-green-300'>Latest Products</h1>
            <div className="pt-10 flex flex-row px-20 w-auto flex-wrap ">
                {products.map(product => <ProductCard product={product}/>)}
            </div>
        </div>              
    </Fragment>
  )
}

export default Home