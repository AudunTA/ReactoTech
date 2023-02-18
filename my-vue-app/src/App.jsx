import React, { useState } from "react";
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
function App() {
  const [render, setRender] = useState(true);
  return (
    <>
      <Header />
      <div className="App">
        <WelcomeText />
        <Searchbar />
        <FilterButtons />
        <Text />
        <Card />
        {render ? <Loader /> : ""}
        {render ? <LoaderSpecific /> : ""}
        <Cart />
      </div>
    </>
  );
}

export default App;
