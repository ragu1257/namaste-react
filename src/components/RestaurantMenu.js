import { useContext } from "react";
import { useParams } from "react-router";
import UserContext from "../utils/UserContext";

function RestaurantMenu() {
  const { id } = useParams();
  const { loggedInUSer } = useContext(UserContext);
  return (
    <div>
      <h2>This id of the restaurant is: {id}</h2>
      <ul>
        <li>Biriyani</li>
        <li>Matar paneer</li>
        <li>Gobhi</li>
      </ul>
      <p>Order for user: {loggedInUSer}</p>
    </div>
  );
}

export default RestaurantMenu;
