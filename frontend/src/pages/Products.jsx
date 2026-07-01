import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import product from "../product";

function Products(){
   const[ category , setCategory] = useState("mobiles");
   const { addToCart } = useContext(CartContext);

   const filteredProducts= product.filter(
    (product) => product.category === category
   );
  return(
     <div className="shop-container">

    <div className="sidebar">

      <button onClick={() => setCategory("mobiles")}>
        Mobiles
      </button>

      <button onClick={() => setCategory("laptops")}>
        Laptops
      </button>

      <button onClick={() => setCategory("headphones")}>
        Headphones
      </button>

      <button onClick={() => setCategory("smartwatches")}>
        Smart Watches
      </button>

      <button onClick={() => setCategory("tablets")}>
        Tablets
      </button>

      <button onClick={() => setCategory("cameras")}>
        Cameras
      </button>

      <button onClick={() => setCategory("gaming consoles")}>
        Gaming Consoles
      </button>

    </div>

    <div className="products">

      <h1>{category.toUpperCase()}</h1>

      <div className="product-grid">

        {filteredProducts.map((product) => (

          <div className="card" key={product.id}>

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add To Cart
            </button>

          </div>

        ))}

      </div>

    </div>

  </div>

    
  );
}

export default Products;
