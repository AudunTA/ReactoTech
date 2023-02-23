import React from "react";
import Loader from "../loader/Loader";
import WelcomeText from "../welcomeMsg/WelcomeText";
import Searchbar from "../searchbar/Searchbar";
import FilterButtons from "../FilterButtons";
import Text from "../Text";
import Card from "../Card";
import { useState, useEffect } from "react";
function ProductPage(props) {
  let posts = props.products;
  let toCart = props.toCart;
  let numberPosts = props.numPosts;
  let setPosts = props.setPosts;
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(props.loader);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [props.loader]);
  return (
    <div className="wrapper-App">
      <div className="App">
        <WelcomeText />
        <Searchbar prodcuts={posts} />
        <FilterButtons />
        <Text setNumPosts={setPosts} />

        <div className="flex-div">
          {shouldRender ? (
            <>
              <Loader />
              <Loader />
              <Loader />
              <Loader />
            </>
          ) : (
            posts.slice(0, numberPosts).map((ele) => {
              return <Card key={ele.id} fullitem={ele} toCart={toCart} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
