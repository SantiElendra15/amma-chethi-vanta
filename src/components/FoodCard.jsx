import "../styles/FoodCard.css";
import { Link } from "react-router-dom";

function FoodCard(props) {
  return (
    <div className="food-card">
      <img
        src={`/images/${props.image}`}
        alt={props.name}
        className="food-image"
      />
      <h2>{props.name}</h2>
      <p>₹ {props.price}</p>
      <Link to={`/food/${props.id}`}>
        <button>Order Now</button>
      </Link>
    </div>
  );
}

export default FoodCard;
