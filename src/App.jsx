import { Routes, Route } from "react-router-dom";
import OrderHistory from "./pages/OrderHistory";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import FoodDetails from "./pages/FoodDetails";
import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/food/:id" element={<FoodDetails />} />
      <Route path="/orders" element={<OrderHistory />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
