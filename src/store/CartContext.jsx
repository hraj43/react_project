import { createContext, useReducer } from "react";
const CartContexts = createContext({
  items: [],
  addItem: function () {},
  removeItem: function () {},
});
function CartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];
    const existingItem = state.items[existingCartItemIndex];

    if (existingCartItemIndex > -1) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    const updatedItems = [...state.items];
    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }
  return state;
}
export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(CartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  const cartContexts = {
    items: cart.items,
    addItem,
    removeItem,
  };
  console.log(cartContexts);

  return (
    <CartContexts.Provider value={cartContexts}>
      {children}
    </CartContexts.Provider>
  );
}
export default CartContexts;
