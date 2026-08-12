import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FoodCard from "../components/FoodCard";
import { useEffect, useState } from "react";
import { getAllFoods } from "../services/FoodService";
import Footer from "../components/Footer";

function Home() {
  const [foods, setFoods] = useState([]);
  const loadFoods = async () => {
    try {
      const response = await getAllFoods();

      console.log("API Response:", response);
      console.log("Data:", response.data);
      console.log(response.data);
      setFoods(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadFoods();
  }, []);
  console.log("Foods State:", foods);
  return (
    <>
      <Navbar />
      <Hero />
      <h2 className="menu-title">Popular Snacks</h2>
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

export default Home;
