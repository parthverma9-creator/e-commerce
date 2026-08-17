import phone from "../assets/phone.jpeg";
import laptop from "../assets/laptop.jpeg";
import headphone from "../assets/headphone.jpeg";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import product from "../product";
import { CartContext } from "../context/CartContext";

const HomePage = () => {
  const { addToCart } = useContext(CartContext);

  const featuredProducts = product.filter((item) =>
    [1, 13, 25, 37].includes(item.id),
  );

  return (
    <>
      <section className="hero">
        <h1>Welcome To TechCart</h1>
        <p>Best Electronics At Affordable Prices</p>

        <Link to="/products">
          <button>Shop Now</button>
        </Link>
      </section>

      <section className="banner-slider">
        <img src={phone} alt="iphone sale" />
        <img src={laptop} alt="laptop sale" />
        <img src={headphone} alt="headphone sale" />
      </section>

      <section className="categories">
        <h2>Categories</h2>

        <div className="category-container">
          <div className="category-card">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/023/504/171/small_2x/computers-digital-electronics-and-appliances-vector.jpg"
              alt="Electronics"
            />
            <h3>Electronics</h3>
          </div>

          <div className="category-card">
            <img
              src="https://thumbs.dreamstime.com/b/four-laptops-isolated-white-background-image-features-displayed-against-transparent-shown-different-angles-428926193.jpg"
              alt="Laptops"
            />
            <h3>Laptops</h3>
          </div>

          <div className="category-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.o9ppCoRYh28FqAfZz3GUTAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Watches"
            />
            <h3>Watches</h3>
          </div>

          <div className="category-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.Rmh4a7vhdScb89XnJK536wHaEx?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Headphones"
            />
            <h3>Headphones</h3>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <h2>🔥 Featured Products</h2>

        <div className="product-container">
          {featuredProducts.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>₹{item.price}</p>

              <button onClick={() => addToCart(item)}>Add To Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="offers">
        <h2>🔥 Special Offers</h2>

        <div className="offer-card">
          <h3>Summer Sale</h3>
          <p>Get Up To 50% off on selected products!!</p>

          <Link to="/products">
            <button>Shop Now</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
