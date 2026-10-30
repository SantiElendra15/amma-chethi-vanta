import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  getAllFoods,
  deleteFood,
  addFood,
  updateFood,
} from "../services/FoodService";
import "../styles/Admin.css";

function Admin() {
  const [foods, setFoods] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Snacks");
  const [available, setAvailable] = useState(true);

  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadFoods();
  }, []);

  const loadFoods = async () => {
    try {
      const response = await getAllFoods();
      setFoods(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Add Food
  const handleAddFood = async () => {
    try {
      const food = {
        name,
        price,
        image,
        category,
        available,
      };

      await addFood(food);

      alert("Food Added Successfully ✅");

      clearForm();
      loadFoods();
    } catch (error) {
      console.log(error);
      alert("Failed to Add Food ❌");
    }
  };

  // Edit Button Click
  const handleEdit = (food) => {
    setEditMode(true);
    setEditId(food.id);

    setName(food.name);
    setPrice(food.price);
    setImage(food.image);
    setCategory(food.category);
    setAvailable(food.available);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Update Food
  const handleUpdateFood = async () => {
    try {
      const food = {
        name,
        price,
        image,
        category,
        available,
      };

      await updateFood(editId, food);

      alert("Food Updated Successfully ✅");

      setEditMode(false);
      setEditId(null);

      clearForm();
      loadFoods();
    } catch (error) {
      console.log(error);
      alert("Update Failed ❌");
    }
  };

  // Delete Food
  const handleDelete = async (id) => {
    if (window.confirm("Delete this food item?")) {
      await deleteFood(id);
      loadFoods();
    }
  };

  // Clear Form
  const clearForm = () => {
    setName("");
    setPrice("");
    setImage("");
    setCategory("Snacks");
    setAvailable(true);
  };

  return (
    <>
      <Navbar />

      <div className="admin-container">
        <h1 className="admin-title">🍽 Food Management Panel</h1>

        <div className="admin-form">
          <input
            type="text"
            placeholder="Food Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="text"
            placeholder="Image Name (Example: Tea)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Snacks">Snacks</option>
            <option value="Beverages">Beverages</option>
          </select>

          <label className="available-label">
            <input
              type="checkbox"
              checked={available}
              onChange={(e) => setAvailable(e.target.checked)}
            />
            Available
          </label>

          <button
            className="add-btn"
            onClick={editMode ? handleUpdateFood : handleAddFood}
          >
            {editMode ? "💾 Update Food" : "➕ Add Food"}
          </button>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Food</th>
              <th>Price</th>
              <th>Category</th>
              <th>Available</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {foods.length > 0 ? (
              foods.map((food) => (
                <tr key={food.id}>
                  <td>{food.id}</td>
                  <td>{food.name}</td>
                  <td>₹ {food.price}</td>
                  <td>{food.category}</td>
                  <td>{food.available ? "✅" : "❌"}</td>

                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(food)}
                    >
                      ✏ Edit
                    </button>
                  </td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(food.id)}
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No Foods Available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}

export default Admin;
