import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import { useNavigation } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Login from "./Login";
import { useLoaderData } from "react-router-dom";

function Root() {
  const token = useLoaderData("root");
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      {token ? (
        <div>
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
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Root;
