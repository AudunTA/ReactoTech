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
import { Outlet } from "react-router-dom";
import { createContext } from "react";

const url = "https://api.noroff.dev/api/v1/online-shop";
function App() {
  const [posts, setPosts] = useState([]);
  //displays loader untill api gets result.
  const [loader, setLoader] = useState(true);
  const [cartitems, setCartitems] = useState([]);
  useEffect(() => {
    // Function that gets our posts
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json.statusCode);
      if (json.statusCode !== 404) {
        setLoader(false);
      }
      // Setting our `posts` state to the API data we received
      setPosts(json);
    }
    getData();
  }, []);
  console.log(posts);
  const addToCart = (ele) => {
    setCartitems([...cartitems, ele]);
  };
  return (
    <>
      <Header />
      <div className="wrapper-App">
        <div className="App">
          <div>cartitems: {cartitems}</div>
          <WelcomeText />
          <Searchbar />
          <FilterButtons />
          <Text />
          <Outlet title={cartitems} />
          <div className="flex-div">
            {!loader ? (
              posts.map((ele) => {
                console.log(ele);
                return (
                  <Card
                    fullitem={ele}
                    title={ele.title}
                    imgurl={ele.imageUrl}
                    description={ele.description}
                    addToCart={addToCart}
                  />
                );
              })
            ) : (
              <Loader />
            )}
          </div>
          <Loader />
          <LoaderSpecific />
        </div>
      </div>
    </>
  );
}

export default App;
