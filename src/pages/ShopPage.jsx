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

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex items-center gap-3 text-stone-500">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-stone-300 border-t-stone-600" />
          <span className="text-sm tracking-wide">Loading products…</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-2 text-center">
        <p className="text-lg font-medium text-stone-800">{error}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-2 rounded-md border border-stone-300 px-4 py-2 text-sm text-stone-600 transition-colors hover:border-stone-400 hover:text-stone-900"
        >
          Reload
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 border-b border-stone-200 pb-6">
        <h1 className="text-3xl font-semibold text-stone-900">Shop</h1>
        <p className="mt-1 text-stone-500">
          {products.length} products available
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
