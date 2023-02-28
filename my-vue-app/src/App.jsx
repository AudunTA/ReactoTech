import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { create } from "zustand";
import { shallow } from "zustand/shallow";
import { cartStatus } from "./components/header/Header";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Specific from "./components/pages/Specific";
import NotFound from "./components/pages/NotFound";
const Cart = lazy(() => import("./components/cart/Cart"));
const ProductPage = lazy(() => import("./components/pages/ProductPage"));
const url = "https://api.noroff.dev/api/v1/online-shop";

function App() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [filter, setFilter] = useState([]);
  const [numPosts, setNumPosts] = useState(4);
  useEffect(() => {
    // Function that gets our posts
    async function getData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (json.statusCode !== 404) {
          setLoader(false);
        }
        // Setting our `posts` state to the API data we received
        console.log(json);
        setPosts(json);
        console.log("REEEEEEEEEEEEEEEEEEEEEEE");
      } catch (e) {
        console.log(e);
      }
    }

    getData();
  }, []);
  const addToCart = (ele) => {
    setCartItems([...cartItems, ele]);
  };
  const handleSeeAll = () => {
    console.log(numPosts);
    if (numPosts < 10) {
      setNumPosts(100);
    } else {
      setNumPosts(4);
    }
  };

  return (
    <>
      <Header numCartItem={cartItems.length} />
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/cart" element={<Cart cart={cartItems} />} />
          <Route
            path="/"
            element={
              <ProductPage
                products={posts}
                setNumPosts={setNumPosts}
                numPosts={numPosts}
                setPosts={handleSeeAll}
                loader={loader}
                filter={filter}
                setFilter={setFilter}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/product/:id?"
            element={<Specific products={posts} toCart={addToCart} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
