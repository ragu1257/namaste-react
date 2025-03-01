import { resList } from "../utils/mockData";
import RestaurantCard, { withPromoted } from "./RestaurantCard";
import { Link } from "react-router-dom";

const RestaurantCardWithPromoted = withPromoted(RestaurantCard);
function Body() {
  console.log(resList[0].data);

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList[0].data.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.id} key={restaurant.id}>
            {restaurant.is_open ? (
              <RestaurantCardWithPromoted
                resData={restaurant}
                names="testingggg"
              />
            ) : (
              <RestaurantCard resData={restaurant} names="testingggg" />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
