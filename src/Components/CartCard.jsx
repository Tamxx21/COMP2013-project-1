import QuantityCounter from "./QuantityCounter";

export default function CartCard({
  id,
  productName,
  brand,
  image,
  price,
  quantity,
  handleRemoveFromCart,
  handleAddCartQuantity,
  handleRemoveCartQuantity,
}) {
  const cleanPrice = parseFloat(price.replace("$", ""));
  const totalPrice = (cleanPrice * quantity).toFixed(2);

  return (
    <div className="CartCard">
      <div className="cart-item-left">
        <img src={image} className="cart-item-img" alt={productName} />
      </div>

      <div className="cart-item-details">
        <h4>{productName}</h4>
        <p>{brand}</p>
        <p>Qty: {quantity}</p>
        <p>Total: ${totalPrice}</p>

        <QuantityCounter
          quantity={quantity}
          setQuantity={(newQty) =>
            newQty > quantity
              ? handleAddCartQuantity(id)
              : handleRemoveCartQuantity(id)
          }
        />

        <button className="remove-btn" onClick={() => handleRemoveFromCart(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}
