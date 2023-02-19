import React, { useState, useEffect } from "react";
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

const url = "https://api.noroff.dev/api/v1/online-shop";
function App() {
  const [posts, setPosts] = useState([]);
  //displays loader untill api gets result.
  const [loader, setLoader] = useState(true);
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
  return (
    <>
      <Header />
      <div className="wrapper-App">
        <div className="App">
          <WelcomeText />
          <Searchbar />
          <FilterButtons />
          <Text />
          <div className="flex-div">
            {!loader ? (
              posts.map((ele) => {
                return (
                  <Card
                    title={ele.title}
                    imgurl={ele.imageUrl}
                    description={ele.description}
                  />
                );
              })
            ) : (
              <Loader />
            )}
          </div>
          <Loader />
          <LoaderSpecific />
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
