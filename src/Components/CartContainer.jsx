import CartCard from "./CartCard";

export default function CartContainer({
  cart,
  handleRemoveFromCart,
  handleAddCartQuantity,
  handleRemoveCartQuantity,
  handleEmptyCart,
}) {
  const total = cart.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div className="CartContainer">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <CartCard
              key={product.id}
              id={product.id}
              productName={product.productName}
              brand={product.brand}
              image={product.image}
              price={product.price}
              quantity={product.quantity}
              handleRemoveFromCart={handleRemoveFromCart}
              handleAddCartQuantity={handleAddCartQuantity}
              handleRemoveCartQuantity={handleRemoveCartQuantity}
            />
          ))}

          <div className="cart-summary">
            <p>Total: ${total.toFixed(2)}</p>
            <div className="cart-actions">
              <button onClick={handleEmptyCart}>Empty Cart</button>
              <button>Buy: ${total.toFixed(2)}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
