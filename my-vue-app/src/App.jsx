import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { create } from "zustand";
import { shallow } from "zustand/shallow";
import { cartStatus } from "./components/header/Header";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Cart = lazy(() => import("./components/cart/Cart"));
const ProductPage = lazy(() => import("./components/pages/ProductPage"));
const url = "https://api.noroff.dev/api/v1/online-shop";

function App() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(cartStatus.getState().open);

  useEffect(() => {
    // Function that gets our posts
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      if (json.statusCode !== 404) {
        setLoader(false);
      }
      // Setting our `posts` state to the API data we received
      setPosts(json);
    }
    getData();
  }, []);
  const addToCart = (ele) => {
    cartItems.push(ele);
  };
  console.log("test");
  return (
    <>
      <Header />

      <div className="marin-top">
        <button onClick={() => console.log(cartItems)}>
          log the cartitems
        </button>
        <Suspense fallback={<div className="container">Loading...</div>}>
          <Routes>
            <Route path="/cart" element={<Cart cart={cartItems} />} />
            <Route
              path="/"
              element={<ProductPage products={posts} toCart={addToCart} />}
            />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
