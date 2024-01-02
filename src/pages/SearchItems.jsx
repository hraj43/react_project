import React from "react";
import { useLoaderData } from "react-router-dom";
import Results from "../components/Results";
function SearchItems() {
  const products = useLoaderData();
  let renderVarible = (
    <h1 className="w-full flex justify-center mt-8 font-bold text-4xl">
      No any data availabe for your search
    </h1>
  );
  console.log(products.length);
  if (products.length !== 0) {
    renderVarible = <Results products={products} />;
  }
  return <div className="text-gray-100">{renderVarible}</div>;
}
export async function loader(params) {
  console.log(params);
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${params}`
  );

  if (!response.ok) {
    //
    throw newError({messgae:"unable to fetch"});
  } else {
    const resData = await response.json();
    return resData.products;
  }
}
export default SearchItems;
