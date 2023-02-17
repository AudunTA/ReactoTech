import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import Text from "./components/Text";
import FilterButtons from "./components/FilterButtons";
import WelcomeText from "./components/welcomeMsg/WelcomeText";
import Header from "./components/header/Header";
function App() {
  return (
    <>
      <Header />
      <div className="App">
        <WelcomeText />
        <FilterButtons />
        <Text />
        <div className="card-container">
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
