import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { CartContext } from '../Pages/CartContext'
import image from "./pizzaLogo.jpeg"
const Navigation = () => {
const {cart} = useContext(CartContext)

    return (
        <>
         
         <nav style={{padding:'1em',backgroundColor:'black',width:'100%',padding:'0.3em',color:'white',fontWeight:'bolder',maxWidth:'100%'}} className="container mx-auto flex items-center justify-between py-4 ">
             
                 <Link to="/">

                 <div className="flex items-center">
                     <img style={{ height:'50px'}} src= {image} alt="logo" />
                     <span>Pizza</span>
                     </div>
                 </Link>
                
             <ul className="flex items-center ">
                 <li><Link to="/">Home</Link></li>
                 <li className="ml-6"><Link to="/products">Products</Link></li>
                 <li className="ml-6">
                 <Link to="/cart">

                    <div style={{background:'#F59E0D',display:'flex',padding:'6px 12px',borderRadius:'25px'}}>
                        <span>{cart.totalItems ? cart.totalItems:0}</span>
                        <img className="ml-2" src="../images/cart.png" alt="cart" />
                    </div>

                 </Link>
                 </li>
             </ul>
         </nav>
        </>
    )
}

export default Navigation
