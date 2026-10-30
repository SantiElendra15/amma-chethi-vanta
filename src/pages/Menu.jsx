import "../styles/Home.css";
import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getAllFoods } from "../services/FoodService";

function Menu() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const loadFoods = async () => {
      try {
        const response = await getAllFoods();
        setFoods(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };

    loadFoods();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="loading">
          <h2>🍽️ Loading Menu...</h2>
          <p>Please wait while we prepare your food menu.</p>
        </div>
        <Footer />
      </>
    );
  }
  if (error) {
    return (
      <>
        <Navbar />

        <div className="loading">
          <h2>⚠ Unable to Load Menu</h2>
          <p>
            Server is currently unavailable.
            <br />
            Please try again in a moment.
          </p>
        </div>

        <Footer />
      </>
    );
  }
  const filteredFoods = foods.filter(
    (food) =>
      food.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || food.category === category),
  );
  return (
    <>
      <Navbar />

      <h1 className="menu-title">Our Menu</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Search Food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />
      </div>
      <div className="filter-container">
        <button
          className={category === "All" ? "active-filter" : ""}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className={category === "Snacks" ? "active-filter" : ""}
          onClick={() => setCategory("Snacks")}
        >
          Snacks
        </button>

        <button
          className={category === "Beverages" ? "active-filter" : ""}
          onClick={() => setCategory("Beverages")}
        >
          Beverages
        </button>
      </div>

      <div className="food-container">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              image={food.image}
            />
          ))
        ) : (
          <div className="no-food">
            <h2>😔 No Food Found</h2>
            <p>Try searching for another food item.</p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Menu;
