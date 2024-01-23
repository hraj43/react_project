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
        <div>
          <SearchBox />
          <main>
              <Outlet />
          </main>
          <Cart />
        </div>
    
    </>
  );
}

export default Root;
