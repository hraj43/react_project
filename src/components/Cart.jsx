import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContexts from "../store/CartContext";
import UserProgressContext from "../store/ModalContext";
import CartItem from "./CartItem";

function Cart() {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContexts);
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }
  return (
    <Modal className="Cart" open={userProgressCtx.progress === "cart"}>
      <h2 className="text-2xl mb-2">Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.title}
              quantity={item.quantity}
              price={item.price}
              onIncrease={() => cartCtx.addItem(item)}
              onDecrease={() => cartCtx.removeItem(item.id)}
            />
          );
        })}
      </ul>
      <p className="cart-total select-none">Total-amount -{cartTotal}</p>
      <p className="modal-actions">
        <button onClick={handleCloseCart}>Close</button>
      </p>
    </Modal>
  );
}

export default Cart;
