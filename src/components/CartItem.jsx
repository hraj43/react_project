import React from "react";

function CartItem({ name, quantity, price, onIncrease, onDecrease }) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} * ₹{price}
      </p>
      <p className="cart-item-actions select-none ">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}

export default CartItem;
