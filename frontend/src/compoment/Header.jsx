import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/products?search=${searchTerm}`);
    } else {
      navigate("/products");
    }
  };

  return (
    <header>
      <div className="logo">logo</div>

      <nav>
        <Link className="nav-btn" to="/">Home</Link>
        <Link className="nav-btn" to="/products">Products</Link>
        <Link className="nav-btn" to="/about">About</Link>
        <Link className="nav-btn" to="/contact">Contacts</Link>
      </nav>

      <div className="header-right">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="auth">
          <Link to="/signin">
            <button className="auth-btn-header">Sign In</button>
          </Link>

          <Link to="/signup">
            <button className="auth-btn-header">Sign Up</button>
          </Link>

          <Link className="cart-btn" to="/cart">
            🛒 Cart ({cart.length})
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;