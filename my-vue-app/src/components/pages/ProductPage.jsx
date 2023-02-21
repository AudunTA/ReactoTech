import React from "react";
import Loader from "../loader/Loader";
import WelcomeText from "../welcomeMsg/WelcomeText";
import Searchbar from "../searchbar/Searchbar";
import FilterButtons from "../FilterButtons";
import Text from "../Text";
import Card from "../Card";
function ProductPage(props) {
  let posts = props.products;
  let toCart = props.toCart;
  return (
    <div className="wrapper-App">
      <div className="App">
        <WelcomeText />
        <Searchbar />
        <FilterButtons />
        <Text />

        <div className="flex-div">
          {posts.map((ele) => {
            return (
              <Card
                key={ele.id}
                fullitem={ele}
                title={ele.title}
                imgurl={ele.imageUrl}
                description={ele.description}
                toCart={toCart}
              />
            );
          })}
        </div>
        <Loader />
      </div>
    </div>
  );
}

export default ProductPage;
