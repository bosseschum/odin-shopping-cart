import { useState } from "react";
import { useCart } from "../../context/useCart";

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
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full mb-2" src={product.image} alt="" />
      <div className="px-6 py-4">
        <h3 class="font-bold text-xl mb-2">{product.title}</h3>
        <p className="text-gray-500 text-base">{product.description}</p>
        <p className="text-sm text-green-400 border-solid rounded-4xl">
          {product.category}
        </p>
        <p className="font-bold">€{product.price}</p>
      </div>
      <div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          onChange={handleInput}
          value={quantity}
        />
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={increaseQuantity}
        >
          +
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => addToCart(product, quantity)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
