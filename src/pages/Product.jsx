import React from "react";
import { useLoaderData } from "react-router-dom";
import Results from "../components/Results";


function Product() {
  const products = useLoaderData();
  return (
    <>
    <div className="bg-gray-700 text-gray-200  transition-colors duration-300  min-h-screen select-non mt-9">
      <Results products={products} />
    </div>
    </>
    
  );
}

export async function loader() {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    // ...
    console.log(1);
  } else {
    const resData = await response.json();
    return resData.products;
  }
}
export default Product;
