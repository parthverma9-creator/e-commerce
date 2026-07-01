import phone from "../assets/phone.jpeg";
import laptop from "../assets/laptop.jpeg";
import headphone from "../assets/headphone.jpeg";
import React, {useState, useEffect} from "react";

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <h1>Welcome To My Website</h1>
        <p>Best Electronics At Affordable Prices </p>
        <button>Shop Now</button>
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
      <img src="https://static.vecteezy.com/system/resources/thumbnails/023/504/171/small_2x/computers-digital-electronics-and-appliances-vector.jpg" alt="Electronics" />
      <h3>Electronics</h3>
    </div>

    <div className="category-card">
      <img src="https://thumbs.dreamstime.com/b/four-laptops-isolated-white-background-image-features-displayed-against-transparent-shown-different-angles-428926193.jpg" alt="Laptops" />
      <h3>Laptops</h3>
    </div>

    <div className="category-card">
      <img src="https://tse3.mm.bing.net/th/id/OIP.o9ppCoRYh28FqAfZz3GUTAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Watvhes" />
      <h3>Watches</h3>
    </div>

    <div className="category-card">
      <img src="https://tse1.mm.bing.net/th/id/OIP.Rmh4a7vhdScb89XnJK536wHaEx?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Headphones" />
      <h3>Headphones</h3>
    </div>
  </div>
</section>

<section className="featured-products">
  <h2>🔥Featured Products</h2>

  <div className="product-container">
    <div className="product-card">
      <img src="https://tse1.mm.bing.net/th/id/OIP.sX2PO1jaXBqIEFuBjaOHDwHaJj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="iphonw 17"/>
      <h3>iPhone</h3>
      <p>₹1,49,000</p>
      <button>Add To Cart</button>
    </div>

    <div className="product-card">
      <img src="https://www.playforce.com.sg/cdn/shop/products/Watermark_841cdc1f-b0ec-438a-ae23-f1da3898dff7_1024x1024.png?v=1671184987" alt="macbook"/>
      <h3>MacBook</h3>
      <p>₹1,10,000</p>
      <button>Add To Cart</button>
    </div>

    <div className="product-card">
      <img src="https://tse3.mm.bing.net/th/id/OIP.RFqyDqDK1wHhIY8abV4S3wAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Ray-Ban Glasses" />
      <h3>RayBan Glasses</h3>
      <p>₹2,999</p>
      <button>Add To Cart</button>
    </div>

    <div className="product-card">
      <img src="https://th.bing.com/th/id/R.b8fe6faeaa62410dbdd3ceee2201b424?rik=CKAvXiG3k6LfpA&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0057%2f8938%2f4802%2fproducts%2f06bd8915-8db7-4575-9558-c97bf050d8d7.png%3fv%3d1625044994&ehk=aWHo8g4YeQeqPor%2fsRAhhxLQyJairl3plJMwE8Lwsig%3d&risl=&pid=ImgRaw&r=0" alt="Boat Headphones" />
      <h3>Boat Headphones</h3>
      <p>₹2,199</p>
      <button>Add To Cart</button>
    </div>
  </div>
</section>

<section className="offers">
  <h2>🔥 Special Offers</h2>

  <div className="offer-card">
    <h3>Summer Sale</h3>
    <p> Get Up To 50% off on selected products!!</p>
    <button>Shop Now</button>
  </div>
</section>

      
      </>
  )
};

export default HomePage;
