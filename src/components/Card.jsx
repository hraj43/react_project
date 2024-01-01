import { useContext } from "react";
import CartContexts from "../store/CartContext";

export default function Card({ result }) {
  const cartCtx = useContext(CartContexts);
  function handleAddProductToCart() {
    cartCtx.addItem(result);
  }
  return (
    <div className="  cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 align-center sm:m-2 transition-shadow duration-200 group ">
      {/* <Link to={`/${result.id}`}> */}
      <img
        className="bg-gray-700 w-80 h-60 overflow-hidden"
        src={result.images[0] || result.images[1] || result.images[2]}
        alt=""
      />
      <div className="p-2 flex flex-col justify-center items-center">
        <h2 className="truncate text-2xl font-bold text-wrap ">
          {result.title}
        </h2>

        <h2 className="truncate text-lg font-bold text-amber-500 bg-slate-500 p-1 px-5 rounded-md">
          ₹{result.price}
        </h2>
        <p className="line-clamp-2 text-md">{result.description}</p>
        <button
          onClick={handleAddProductToCart}
          className="font-bold bg-amber-500 p-2 mt-2 rounded-lg px-5"
        >
          {" "}
          Add to Cart
        </button>
      </div>
      {/* </Link> */}
    </div>
  );
}
