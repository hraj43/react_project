import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product, { loader as productsLoader } from "./pages/Product";
import Root from "./pages/Root";
import Login,{action as authAction} from "./pages/Login";
import SearchItems, { loader as searchLoader } from "./pages/SearchItems";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/ModalContext";
import ErrorPage from "./components/ErrorPage";
import {tokenLoader} from '../src/utils/Util'
import {action as LogoutAction} from "../src/components/Logout"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage/>,
    id:"root",
    loader:tokenLoader,
    children: [
      { index:true, element: <Product />, loader: productsLoader },
      {
        path: "search/:items",
        element: <SearchItems />,
        loader: ({ params }) => {
          return searchLoader(params.items);
        },
      },
      { path: "login",element: <Login /> ,action:authAction},
      {path:"logout",action:LogoutAction}
    
    ],
  },
]);
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <div className="bg-gray-700 text-gray-200 transition-colors duration-300  min-h-screen select-none">
          <RouterProvider router={router} />
        </div>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
