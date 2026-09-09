import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

function CartPage() {
  const {
    cartItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div>
        <h1>There is nothing here yet...</h1>
        <Link to="/shop">Take a look around our shop :)</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Cart: </h1>
      {cartItems.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt="" />
          <p>{product.title}</p>
          <div>
            <p>
              {product.price} x {product.quantity}
            </p>
            <p>
              Subtotal: {(product.price * product.quantity).toFixed(2)}{" "}
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                type="button"
                onClick={() => decreaseQuantity(product)}
              >
                -
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                type="button"
                onClick={() => increaseQuantity(product)}
              >
                +
              </button>
              <button type="button" onClick={() => removeFromCart(product)}>
                Remove
              </button>
            </p>
          </div>
        </div>
      ))}
      <span>Your Total: {totalPrice.toFixed(2)}</span>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
      >
        Buy Now
      </button>
    </div>
  );
}

export default CartPage;
