import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <header>
        <div className="logo">logo</div>

        <nav>
          <Link className="nav-btn" to="/">
            Home
          </Link>
          <Link className="nav-btn" to="/products">
            Products
          </Link>
          <Link className="nav-btn" to="/about">
            About
          </Link>
          <Link className="nav-btn" to="/contact">
            Contacts
          </Link>
        </nav>

        <div className="auth">
          <button>Sign In</button>
          <button>Sign Up</button>

          <Link className="nav-btn" to="/cart">
            🛒 Cart ({cart.length})
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
