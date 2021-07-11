import React from 'react'
import '../Pages/products.css'
import { Link } from 'react-router-dom'
import { useContext,useState } from 'react'
import { CartContext } from '../Pages/CartContext'
const Product = (props) => {
    const [isAdding,setIsAdding] = useState(false)
    const {cart,setCart} = useContext(CartContext)
    

    const addToCart = (event,product) =>{
        event.preventDefault(); //to prevent it to redirect to the product detail page
        let _cart = {...cart}

        if(!_cart.items)
        {
            _cart.items = {}
        }
        if(_cart.items[product._id])
        {
            _cart.items[product._id] = _cart.items[product._id]+1

        }
        else{
            _cart.items[product._id]=1 //first time setting product
        }
        if(!_cart.totalItems)
        {
            _cart.totalItems = 0
        }
        _cart.totalItems  =  _cart.totalItems + 1
        setCart(_cart)
        setIsAdding(true)
        //after one sec again false
        setInterval( () =>{
            setIsAdding(false)
        },1000)

    }
    return (
        <Link to={`/products/${props.product._id}`}>
            <div style={{textAlign:'center',padding:'1em',backgroundColor:'whitesmoke'}} className="Card">
             <img style={{borderRadius:'1.2em'}} src={props.product.image} alt="peproni"></img>
             <h2  className="name text-lg font-bold py-2">{props.product.name}</h2>
             <span className="bg-gray-200 py-1 rounded-full text-sm px-4 size">{props.product.size}</span>
             <div className="flex justify-between items-center mt-4">
                 <span className="py-1 px-1 rounded-full font-bold price mx-1">₹{props.product.price}</span>
                 <button disabled = {isAdding} onClick={(e) => {addToCart(e,props.product)}} className={`${ isAdding ? 'bg-green-500' : 'bg-yellow-500'} py-1 px-4 rounded-full font-bold`}>Add{`${isAdding ? 'ed':''}`}</button>
             </div>
         </div>
         </Link>
        
    )
}

export default Product
