import { useState, useEffect } from "react";
import ProductCard from "../components/shop/ProductCard";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch {
        setError("Could not load products. Try again :(");
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, []);

  if (loading) return <h1>...Loading</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <h1>Welcome to the Shop Page!</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
