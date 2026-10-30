import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Cart.css";
import { placeOrder } from "../services/OrderService";

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const food = location.state?.food;

  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [success, setSuccess] = useState(false);

  const handleOrder = async () => {
    // Food select kakapothe
    if (!food) {
      alert("Please select a food item first.");
      return;
    }

    // Simple Validation
    if (customerName.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    if (phoneNumber.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      const order = {
        customerName,
        phoneNumber,
        quantity,
        totalPrice: quantity * food.price,
        status: "Pending",
        food: {
          id: food.id,
        },
      };

      console.log(order);

      await placeOrder(order);

      setSuccess(true);

      setCustomerName("");
      setPhoneNumber("");
      setQuantity(1);

      setTimeout(() => {
        navigate("/orders");
      }, 5000);
    } catch (error) {
      console.log(error);
      alert("Order Failed ❌");
    }
  };

  return (
    <>
      <Navbar />

      <div className="cart">
        {success && (
          <div className="success-overlay">
            <div className="success-popup">
              <h2>✅ Order Placed Successfully!</h2>
              <p>Redirecting to Order History...</p>
            </div>
          </div>
        )}
        <h1>🛒 Place Your Order</h1>

        {food ? (
          <>
            <img
              src={`/images/${food.image}`}
              alt={food.name}
              width="220"
              style={{ borderRadius: "10px" }}
            />

            <h2>{food.name}</h2>

            <h3>Price : ₹{food.price}</h3>

            <h3>Total : ₹{quantity * food.price}</h3>
          </>
        ) : (
          <h3>No Food Selected</h3>
        )}

        <input
          type="text"
          placeholder="Enter Your Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <button onClick={handleOrder}>Place Order</button>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
