import React, { useState,useEffect } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Navigation from './components/Navigation'
import Products from './Pages/Products'
import { Link } from 'react-router-dom'
import Cart from './Pages/Cart'
import ProductDetail from './Pages/ProductDetail'
import { CartContext } from './Pages/CartContext'
function App()
{
    const [cart,setCart] = useState({})

    //FETCH FROM LOCAL STORAGE

    useEffect( () =>{

       const cart =  window.localStorage.getItem('cart')
       setCart(JSON.parse(cart))//string to back to objects
    },[])

      //Note: we can only store string in our cart so always convert to string first
    useEffect( () =>{

       window.localStorage.setItem('cart',JSON.stringify(cart))
     },[cart])

    return (

        <>
         <Router>
         <CartContext.Provider value = {{cart:cart,setCart:setCart}}> 
         <Navigation/>
             <Switch>
                 <Route path="/" exact component={Home}/>
                 {/* <Route path="/about" component={About}/> */}
                 <Route path="/products" exact component={Products}/>
                 <Route path="/products/:_id" component={ProductDetail}/>
                 <Route path="/cart" component={Cart}/>
             </Switch>
             </CartContext.Provider>
         </Router>

        </>
    )
}
export default App;
