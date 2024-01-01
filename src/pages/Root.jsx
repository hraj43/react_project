import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import Cart from "../components/Cart";
import { useNavigation } from "react-router-dom";

function Root() {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      <SearchBox />
      <main>
        {navigation.state === "loading" ? (
          <h1 className="w-full flex justify-center items-center text-5xl mt-12">
            Loading....
          </h1>
        ) : (
          <Outlet />
        )}
      </main>
      <Cart />
    </>
  );
}

export default Root;
