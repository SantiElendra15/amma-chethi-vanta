import "../styles/Home.css";
import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getAllFoods } from "../services/FoodService";

function Menu() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const loadFoods = async () => {
      try {
        const response = await getAllFoods();
        setFoods(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadFoods();
  }, []);

  return (
    <>
      <Navbar />

      <h1 className="menu-title">Our Menu</h1>

      <div className="food-container">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            image={food.image}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Menu;
