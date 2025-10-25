import ProductCard from "./ProductCard";

export default function ProductsContainer({ products, addToCart }) {
  return (
    <div className="ProductsContainer">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}
