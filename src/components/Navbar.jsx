import React, { useContext } from "react";
import { Link,Form } from "react-router-dom";
import CartContexts from "../store/CartContext";
import UserProgressContext from "../store/ModalContext";
import { getAuthToken } from "../utils/Util";
import { checkTokenLoader } from "../utils/Util";
import { useLoaderData } from "react-router-dom";

function Navbar() {
  const token=useLoaderData();
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContexts);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }
  
  return (
    <header>
      <nav className="flex justify-between p-3 text-xl font-semibold">
        <ul className="flex justify-start ml-7 space-x-10 font-semibold text-xl">
          <li className=" hover:text-amber-500">
            {token?<Link to="/">HomePage</Link>:null}
          </li>
          <li className=" hover:text-amber-500">
            <Form method='POST' action='/logout'>
              <button>{token?"Logout":null}</button>
            </Form>
          </li>
        </ul>
        {token?<button onClick={handleShowCart} className="mr-6  hover:text-amber-500">
        Cart({totalCartItems})
        </button>:null}
      </nav>
    </header>
  );
}

export default Navbar;
