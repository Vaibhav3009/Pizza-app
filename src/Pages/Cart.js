import React , {useContext,useEffect} from 'react'
import { CartContext } from './CartContext'
import image from './empty-cart.png'
import { useState } from 'react'
const Cart = () => {
    const {cart,setCart} = useContext(CartContext)
    const [products,setProducts] = useState([])
    var total =0
    const [priceGot , togglePriceGot] = useState(false)
    const getQty = (id) =>{
        return cart.items[id]
    }

    const increment = (id) =>{
        const curr = cart.items[id]
        const _cart = {...cart}
        _cart.items[id] = curr+1
        _cart.totalItems +=1
        setCart(_cart)
    }

    const decrement = (id) =>{
        const curr = cart.items[id]
        if(curr===1)
        return 
        const _cart = {...cart}
        _cart.items[id] = curr-1
        _cart.totalItems -=1
        setCart(_cart)
    }

    const getSum = (id,price) => {
        total = total + cart.items[id]*price
        return cart.items[id]*price
    }

    const handleDelete = (id) =>{

        const _cart = {...cart}
        const qty = _cart.items[id]
        delete _cart.items[id]
        _cart.totalItems -=qty
        setCart(_cart)
        setProducts(products.filter ( (product) =>{ return (
            product._id!==id
        )

        }))
    }

    const handleOrdernow = () => {

        window.alert('ORDER PLACED SUCCESSFULLY')
        setProducts([])
        setCart({})
    }
    useEffect(() => {
        if(!cart.items)
        return;

        if(priceGot)
        return  
        fetch('https://ecom-rest-apis.herokuapp.com/api/products/cart-items',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({ids:Object.keys(cart.items)})
        }).then( res =>res.json())
        .then(products =>{
            setProducts(products)
            togglePriceGot(true)
        })
        
    }, [cart])
    return (
         products.length ? 
        <div className ="container mx-auto lg:w-1/2 w-full pb-24">
            <h1 className='my-12 font-bold'>Your Cart</h1>
            <ul>
            {products.map ( (product)=> {
                return (
                    <li className='mb-12' key={product._id}>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <img className="h-16" src={product.image}></img>
                            <span className="font-bold ml-4 w-48">{product.name}</span>
                        </div>
                        <div>
                            <button onClick={()=> {decrement(product._id)}} className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>-</button>
                            <b className='px-4'>{getQty(product._id)}</b>
                            <button onClick={()=> {increment(product._id)}} className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>+</button>
                        </div>
                        <span>₹{getSum(product._id,product.price)}</span>
                        <button onClick={ () => {handleDelete(product._id)}} className='bg-red-500 px-4 py-2 rounded-full leading-none text-white'>Delete</button>
                    </div>
                </li>
                )
            })}
               
            </ul>
            <hr className='my-6'></hr>
            <div className='text-right'>
                <b>Grand Total</b> : ₹ {total}
            </div>
            <div  className='text-right mt-6'>
                <button onClick={ () => handleOrdernow()} className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>Order Now</button>
            </div>
        </div>
        :
        <img className='mx-auto w-1/2 mt-12' src={image}></img>
        
    )
}

export default Cart
