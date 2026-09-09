import { useState } from "react";
import { useCart } from "../../context/useCart";

import { Plus, Minus, ShoppingCartPlus } from "lucide-react";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleInput = (e) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) {
      setQuantity(1);
    } else {
      setQuantity(value);
    }
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-stone-200 bg-white transition-colors hover:border-stone-300">
      <div className="flex aspect-square items-center justify-center overflow-hidden bg-stone-50 p-4">
        <img
          className="max-h-full max-w-full scale-110 object-contain"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="flex flex-1 flex-col gap-1 px-4 pt-4">
        <span className="text-xs uppercase tracking-wide text-stone-400">
          {product.category}
        </span>
        <h3 className="line-clamp-2 font-medium text-stone-900">
          {product.title}
        </h3>
        <p className="line-clamp-2 text-sm text-stone-500">
          {product.description}
        </p>
        <p className="mt-1 font-semibold text-stone-900">€{product.price}</p>
      </div>

      <div className="flex justify-between items-center gap-2 p-4">
        <div className="flex items-center rounded-md border border-stone-300">
          <button
            type="button"
            className="px-3 py-1.5 text-stone-600 transition-colors hover:bg-stone-100"
            onClick={decreaseQuantity}
            aria-label="Decrease quantity"
          >
            <Minus />
          </button>
          <input
            className="w-10 border-x border-stone-300 bg-transparent py-1.5 text-center text-sm text-stone-900 focus:outline-none"
            type="number"
            onChange={handleInput}
            value={quantity}
          />
          <button
            type="button"
            className="px-3 py-1.5 text-stone-600 transition-colors hover:bg-stone-100"
            onClick={increaseQuantity}
            aria-label="Increase quantity"
          >
            <Plus />
          </button>
        </div>
        <button
          type="button"
          className="flex rounded-md bg-stone-900 p-2 text-sm font-medium text-white transition-colors hover:bg-stone-700 active:animate-ping"
          onClick={() => addToCart(product, quantity)}
          aria-label="Add to cart"
        >
          <ShoppingCartPlus />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
