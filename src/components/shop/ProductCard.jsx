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
    <div>
      <div>
        <img src={product.image} alt="" />
      </div>
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
      </div>
      <div>
        <button onClick={increaseQuantity}>+</button>
        <input type="number" onChange={handleInput} value={quantity} />
        <button onClick={decreaseQuantity}>-</button>
        <button onClick={() => addToCart(product, quantity)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
