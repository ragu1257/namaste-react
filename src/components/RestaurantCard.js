const RestaurantCard = (props) => {
  const { name, rating } = props.resData;

  return (
    <div className="retaurant-container">
      <div>
        {props.names}
        <h4> Welcome to {name}</h4>
        <h5> Rating : {rating}</h5>
      </div>
    </div>
  );
};

export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <h1>Promoted</h1>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
