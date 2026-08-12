import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFoodById } from "../services/FoodService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/FoodDetails.css";

function FoodDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [food, setFood] = useState(null);

  useEffect(() => {
    loadFood();
  }, []);

  const loadFood = async () => {
    try {
      const response = await getFoodById(id);
      setFood(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!food) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="food-details">
        <img src={`/images/${food.image}`} alt={food.name} width="300" />

        <h2>{food.name}</h2>

        <h3>₹ {food.price}</h3>

        <p>
          <b>Category:</b> {food.category}
        </p>

        <p>
          <b>Status:</b> {food.available ? "Available ✅" : "Not Available ❌"}
        </p>

        <button
          onClick={() =>
            navigate("/cart", {
              state: { food },
            })
          }
        >
          Proceed to Order
        </button>
      </div>

      <Footer />
    </>
  );
}

export default FoodDetails;
