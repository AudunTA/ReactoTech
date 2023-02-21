import React, { useState, useEffect, useContext } from "react";
import Card from "./components/Card";
import "./App.css";
import Text from "./components/Text";
import FilterButtons from "./components/FilterButtons";
import WelcomeText from "./components/welcomeMsg/WelcomeText";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";
import Searchbar from "./components/searchbar/Searchbar";
import LoaderSpecific from "./components/loader-specific/LoaderSpecific";
import Cart from "./components/cart/Cart";
import { create } from "zustand";
import { shallow } from "zustand/shallow";
import { Outlet } from "react-router-dom";

const url = "https://api.noroff.dev/api/v1/online-shop";

export const useCartItems = create((set, get) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
}));

function App() {
  const [posts, setPosts] = useState([]);
  //displays loader untill api gets result.
  const [loader, setLoader] = useState(true);

  const cartItems = useCartItems();
  console.log(cartItems.products);

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
  return (
    <>
      <Header />
      <div className="wrapper-App">
        <div className="App">
          <WelcomeText />
          <h1>CART ITEMS: {cartItems.products.length}</h1>
          <Searchbar />
          <FilterButtons />
          <Text />
          <Outlet />
          <div className="flex-div">
            {!loader ? (
              posts.map((ele) => {
                return (
                  <Card
                    key={ele.id}
                    fullitem={ele}
                    title={ele.title}
                    imgurl={ele.imageUrl}
                    description={ele.description}
                    addProduct={cartItems.addProduct}
                  />
                );
              })
            ) : (
              <Loader />
            )}
          </div>
          <Loader />
        </div>
      </div>
    </>
  );
}

export default App;
