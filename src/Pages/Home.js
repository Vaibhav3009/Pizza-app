import Products from "./Products"
import { Link } from "react-router-dom"
import image from "./pizza.png"
const Home = () =>{

return (
    <>
    <div style={{padding:'1em'}} className="hero py-16">
        <div className="container mx-auto flex items center justify-between">
            <div style={{textAlign:'center'}} className="w-1/2 mx-auto my-auto">
                <h6 className="text-lg">Feeling Hungry?</h6>
                <h1 className="text-3xl md:text-6xl font-bold">Don't Wait!</h1>
                <Link to ='/cart'>
                <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500">Order Now</button>
                </Link>
            </div>
            <div className="w-1/2 mx-auto my-auto">
            <img src={image} alt="pizza"></img>
            </div>
        </div>
    </div>
    <div>
    <Products/>
    </div>
    </>
)
}

export default Home