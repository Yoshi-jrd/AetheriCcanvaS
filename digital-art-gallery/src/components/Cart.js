import React from 'react';

function Cart({ cartItems, onCheckout }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart bg-white p-4 shadow rounded">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.title} - ${item.price}</p>
        </div>
      ))}
      <p className="total-price font-bold">Total: ${totalPrice}</p>
      <button onClick={onCheckout} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Checkout
      </button>
    </div>
  );
}

export default Cart;
