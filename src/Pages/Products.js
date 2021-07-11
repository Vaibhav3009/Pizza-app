import React, {useState,useEffect} from 'react'


import Product from '../components/Product'
const Products = () => {

    const [products,setProducts] = useState([])

    useEffect ( () => {

        fetch ('/api/products/')
        .then ((Response)=>Response.json())
        .then (products => {
            setProducts(products)
        })

    },[])
    return (
        <>
         <h1 style={{padding:'1em',textAlign:'center',backgroundColor:'#202020',color:'white'}} className="text-lg font-bold">Products</h1>
        <div style={{backgroundColor:'white'}} className="container mx-auto px-8 py-7 pb-24">
       
         <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 my-8 gap-24">
         
         {
             products.map( (product)=> <Product key={product._id} product={product}/>  )
         }
         


         </div>
        </div>
        </>
    )
}

export default Products
