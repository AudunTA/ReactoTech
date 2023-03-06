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
  let setNumPosts = props.setNumPosts;
  let numberPosts = props.numPosts;
  let setPosts = props.setPosts;
  let filter = props.filter;
  let setFilter = props.setFilter;
  const [shouldRender, setShouldRender] = useState(true);
  const [reviews, setReviews] = useState([]);

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
        <FilterButtons setFilter={setFilter} setNumPosts={setNumPosts} />
        <Text setNumPosts={setPosts} filter={filter} />

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
              for (let i = 0; i < ele.tags.length; i++) {
                if (ele.tags[i].includes(filter)) {
                  return <Card key={ele.id} fullitem={ele} toCart={toCart} />;
                }
              }
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
