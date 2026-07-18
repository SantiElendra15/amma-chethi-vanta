import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import foods from "../data/foods";
import Footer from "../components/Footer";

function Menu() {
  return (
    <>
      <Navbar />

      <h1 className="menu-title">Our Menu</h1>

      <div className="food-container">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
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
