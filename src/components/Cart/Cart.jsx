import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please Add Some Products</p>
    }
    else {
        message = <h1>Boroloks
            <p>Why waste so money</p>
        </h1>
    }
    return (
        <div>
            {message}
            <p className={`border ${cart.length>= 5? 'red': 'purple'}`}>Backslash</p>
            <h2 className={cart.length >=5?'blue' : 'red'}>Order Summary : {cart.length}</h2>
            {cart.length > 2 ? <p>Aro kino</p> : <p>Gorib</p>}
            {cart.length === 3 && <p>Triple Tri</p>}
            {cart.length >= 5 || <h3>5 ta to hoilo nah</h3>}
        {cart.map(tshirt =>{
            return (
            <p key={tshirt._id}>{tshirt.name}<button onClick={()=>handleRemoveCart(tshirt._id)}>X</button></p>

            )})}
        </div>
    );
};

export default Cart;