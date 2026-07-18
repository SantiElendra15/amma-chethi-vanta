import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Cart.css";
function Cart() {
  return (
    <>
      <Navbar />

      <div className="cart">
        <h1>🛒 My Cart</h1>

        <h2>Your Cart is Empty 🛒</h2>

        <p>Add your favorite snacks from the menu.</p>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
