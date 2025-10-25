import { useState } from "react";
import products from "../data/products";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

export default function GroceriesAppContainer() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, quantity) => {
    if (quantity <= 0) {
      alert("Please enter a quantity greater than 0.");
      return;
    }

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const handleAddCartQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemoveCartQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleEmptyCart = () => setCart([]);

  return (
    <div className="GroceriesAppContainer">
      <NavBar cartCount={cart.length} />
      <div className="main-content">
        <ProductsContainer products={products} addToCart={handleAddToCart} />
        <CartContainer
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleAddCartQuantity={handleAddCartQuantity}
          handleRemoveCartQuantity={handleRemoveCartQuantity}
          handleEmptyCart={handleEmptyCart}
        />
      </div>
    </div>
  );
}
