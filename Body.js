import  restaurantList from "../Utils/constants";
import RestaurantCard from "./ResturantCard";



const Body = () => {
    return (
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
    );
  };
  export default Body;