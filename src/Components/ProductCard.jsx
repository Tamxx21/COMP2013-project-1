import { useState } from "react";
import QuantityCounter from "./QuantityCounter";

export default function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const { image, productName, brand, price } = product;

  return (
    <div className="ProductCard">
      <img src={image} alt={productName} height="100px" />
      <h3>{productName}</h3>
      <p>{brand}</p>
      <p>{price}</p>

      <QuantityCounter quantity={quantity} setQuantity={setQuantity} />

      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
}
