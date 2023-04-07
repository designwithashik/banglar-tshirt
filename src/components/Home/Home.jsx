import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
import Cart from '../Cart/Cart';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt => {
        const exist = cart.find(ts => ts._id == tshirt._id);
        if(exist){
            toast('You Can only select one from each T-shirt!',
                {
                    icon: '👏',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    }
                })
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart)
        }
       
    }

    const handleRemoveCart = id => {
        // console.log(id)
    
            const remaining = cart.filter(ts => ts._id != id);
            setCart(remaining)
        
    }
    const data = useLoaderData();
    // console.log(data);
    return (
        <div className='home-container'>
            <div className="tshirt-container">
            {
                data.map(tshirt => {
                    return (
                        <Tshirt key={tshirt._id}
                        tshirt ={tshirt} handleAddToCart={handleAddToCart} ></Tshirt>
                    )
                })
            }
            </div>
            <div className="cart-container">
            <Cart handleRemoveCart={handleRemoveCart} cart={cart}/>
            </div>
        </div>
    );
};

export default Home;