export default function QuantityCounter({ quantity, setQuantity }) {
  return (
    <div className="QuantityCounter">
      <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
}
