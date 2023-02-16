import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import Text from "./components/Text";
import FilterButtons from "./components/FilterButtons";
import WelcomeText from "./components/welcomeMsg/WelcomeText";
function App() {
  return (
    <div className="App">
      <WelcomeText />
      <FilterButtons />
      <Text />
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
