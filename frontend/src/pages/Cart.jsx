import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        <>
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <img src={product.image} alt={product.name} />

              <div className="cart-details">
                <h3>{product.name}</h3>

                <p>₹{product.price}</p>

                <div className="quantity">
                  <button
                    onClick={() =>
                      decreaseQuantity(product.id)
                    }
                  >
                    -
                  </button>

                  <span>{product.quantity}</span>

                  <button
                    onClick={() =>
                      increaseQuantity(product.id)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(product.id)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;