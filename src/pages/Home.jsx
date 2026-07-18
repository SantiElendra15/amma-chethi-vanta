import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FoodCard from "../components/FoodCard";
import foods from "../data/foods";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <h2 className="menu-title">Popular Snacks</h2>
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

export default Home;
