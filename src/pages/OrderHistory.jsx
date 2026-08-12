import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getAllOrders } from "../services/OrderService";
import "../styles/OrderHistory.css";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const response = await getAllOrders();
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="order-history">
        <h1>Order History</h1>

        <table className="order-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Food</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.customerName}</td>
                  <td>{order.food?.name}</td>
                  <td>{order.quantity}</td>
                  <td>₹ {order.totalPrice}</td>

                  <td
                    className={
                      order.status === "Completed"
                        ? "completed"
                        : order.status === "Cancelled"
                          ? "cancelled"
                          : "pending"
                    }
                  >
                    {order.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No Orders Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}

export default OrderHistory;
