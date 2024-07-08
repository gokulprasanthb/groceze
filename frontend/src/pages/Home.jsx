import React, { Fragment, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom'



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
        <h1 id="products_heading" className='flex justify-center font-semibold text-2xl p-4 mt-5 w-auto'>Latest Products</h1>

        <section id="products" className="container mt-5 text-xl w-auto">
            <div className="row">
                {products.map(product => <ProductCard product={product}/>)}
            </div>
        </section>              
    </Fragment>
  )
}

export default Home