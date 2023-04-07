import React from 'react';

const Cart = ({ cart, handleRemoveCart}) => {
    return (
        <div>
            <h2>Order Summary : {cart.length}</h2>
        {cart.map(tshirt =>{
            return (
            <p key={tshirt._id}>{tshirt.name}<button onClick={()=>handleRemoveCart(tshirt._id)}>X</button></p>

            )})}
        </div>
    );
};

export default Cart;