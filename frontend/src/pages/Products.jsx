import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import product from "../product";
import { useLocation } from "react-router-dom";

function Products() {
  const [category, setCategory] = useState("mobiles");
  const { addToCart } = useContext(CartContext);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search")?.toLowerCase() || "";

  let filteredProducts = product.filter(
    (item) => item.category === category
  );

  if (search) {
    filteredProducts = product.filter((item) =>
      item.name.toLowerCase().includes(search)
    );
  }

  return (
    <div className="shop-container">
      <div className="sidebar">
        <button onClick={() => setCategory("mobiles")}>Mobiles</button>
        <button onClick={() => setCategory("laptops")}>Laptops</button>
        <button onClick={() => setCategory("headphones")}>Headphones</button>
        <button onClick={() => setCategory("smartwatches")}>Smart Watches</button>
        <button onClick={() => setCategory("tablets")}>Tablets</button>
        <button onClick={() => setCategory("cameras")}>Cameras</button>
        <button onClick={() => setCategory("gaming consoles")}>Gaming Consoles</button>
        <button onClick={() => setCategory("monitors")}>Monitors</button>
        <button onClick={() => setCategory("gaming accessories")}>Gaming Accessories</button>
      </div>

      <div className="products">
        <h1>{search ? `SEARCH RESULTS FOR "${search}"` : category.toUpperCase()}</h1>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <button onClick={() => addToCart(item)}>Add To Cart</button>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;