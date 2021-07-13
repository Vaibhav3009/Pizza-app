import React, {useState,useEffect} from 'react'


import Product from '../components/Product'
const Products = () => {

    const [products,setProducts] = useState([])

    useEffect ( () => {

        fetch ('https://ecom-rest-apis.herokuapp.com/api/products/')
        .then ((Response)=>Response.json())
        .then (products => {
            setProducts(products)
        })

    },[])
    return (
        <>
         <h1 style={{padding:'1em',textAlign:'center',backgroundColor:'#202020',color:'white'}} className="text-lg font-bold">Products</h1>
        <div style={{backgroundColor:'#D8D8D8'}} className="container mx-auto px-2">
       
         <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 py-2 gap-4">
         
         {
             products.map( (product)=> <Product key={product._id} product={product}/>  )
         }
         


         </div>
        </div>
        </>
    )
}

export default Products
