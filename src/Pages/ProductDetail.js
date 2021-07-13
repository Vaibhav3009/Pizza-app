import React,{useState} from 'react'

import { useParams } from 'react-router'
import { useEffect,useContext } from 'react'
import axios from 'axios'
import { CartContext } from './CartContext'
import { Link , useHistory} from 'react-router-dom'
const ProductDetial = () => {
      const [products,setProducts] = useState({})
      const params =useParams();
      const {cart,setCart} = useContext(CartContext)

      const history = useHistory()
      console.log(params)
     
      useEffect(() => {
          
        const getProduct = () =>{
            axios.get(`https://ecom-rest-apis.herokuapp.com/api/products/${params._id}`)
            .then ((Response)=>{
               const product = Response.data
              setProducts(product)
            })
        }
        getProduct()
         
      }, [])

      const addToCart = (id) =>{
        let _cart = {...cart}

        if(!_cart.items)
        {
            _cart.items = {}
        }
        if(_cart.items[id])
        {
            _cart.items[id] = _cart.items[id]+1

        }
        else{
            _cart.items[id]=1 //first time setting product
        }
        if(!_cart.totalItems)
        {
            _cart.totalItems = 0
        }
        _cart.totalItems  =  _cart.totalItems + 1
        setCart(_cart)

      }
    return (
        <div style={{textAlign:'center'}} className="container mx-auto my-12">
            <div style={{textAlign:'center'}}  >
                
                <button style={{backgroundColor:'blue',color:'white',borderRadius:'10px'}} className="px-4 py-2 mb-12 mx-4 font-bold" onClick={ () => {history.goBack()}}>Back</button>
               
                    <div style={{textAlign:'center',alignItems:'center',justifyContent:'center',padding:'1em',maxWidth:'37%',margin:'auto',backgroundColor:'#505050',borderRadius:'2rem'}} className="flex flex-col md:flex-row">
                        <img style ={{borderRadius:'2rem'}} src={products.image} />
                        <div style={{color:'white'}} className="mx-4">
                            <h1 className="text-xl font-bold">{products.name}</h1>
                            <div className="text-md">{products.size}</div>
                            <div className="font-bold mt-2">₹{products.price}</div>
                            <button onClick={() => {addToCart(products._id)}} className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to Cart</button>
                        </div>
                    </div>
            </div>
         
        </div>
    )
}

export default ProductDetial
