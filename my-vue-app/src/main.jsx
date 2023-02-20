import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Cart from "./components/cart/Cart";
import { useState } from "react";
//REMOVE IF ERRORS

function Main() {
  const [cartitems, setCartitems] = useState([]);

  const addToCart = (ele) => {
    setCartitems([...cartitems, ele]);
  };
  return (
    <div>
      <div className="margin-top">cartitems: {cartitems}</div>
      <App addToCart={addToCart} />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
