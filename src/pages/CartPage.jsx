import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

import { Trash } from "lucide-react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { CreditCardCheck } from "lucide-react";

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
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-2 text-center">
        <h1 className="text-xl font-medium text-stone-900">
          There is nothing here yet...
        </h1>
        <Link
          to="/shop"
          className="text-sm text-stone-500 underline underline-offset-4 transition-colors hover:text-stone-900"
        >
          Take a look around our shop :)
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-6 border-b border-stone-200 pb-6 text-3xl font-semibold text-stone-900">
        Your Cart
      </h1>

      <div className="flex flex-col divide-y divide-stone-200">
        {cartItems.map((product) => (
          <div key={product.id} className="flex items-center gap-4 py-5">
            <img
              className="h-20 w-20 shrink-0 rounded-md border border-stone-200 bg-stone-50 object-contain p-2"
              src={product.image}
              alt={product.title}
            />

            <div className="flex-1">
              <p className="font-medium text-stone-900">{product.title}</p>
              <p className="text-sm text-stone-500">
                {product.quantity} x {product.price}€
              </p>
            </div>

            <div className="flex items-center rounded-md border border-stone-300">
              <button
                className="px-3 py-1.5 text-stone-600 transition-colors hover:bg-stone-100"
                type="button"
                onClick={() => decreaseQuantity(product)}
              >
                <Minus />
              </button>
              <span className="w-8 text-center text-sm text-stone-900">
                {product.quantity}
              </span>
              <button
                className="px-3 py-1.5 text-stone-600 transition-colors hover:bg-stone-100"
                type="button"
                onClick={() => increaseQuantity(product)}
              >
                <Plus />
              </button>
            </div>

            <p className="w-20 text-right font-medium text-stone-900">
              €{(product.price * product.quantity).toFixed(2)}
            </p>

            <button
              type="button"
              className="text-sm text-stone-400 underline underline-offset-4 transition-colors hover:text-stone-900"
              onClick={() => removeFromCart(product)}
            >
              <Trash />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-stone-200 pt-6">
        <span className="text-lg font-semibold text-stone-900">
          Total: €{totalPrice.toFixed(2)}
        </span>
        <button
          type="button"
          className="rounded-md bg-stone-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700"
        >
          <CreditCardCheck />
        </button>
      </div>
    </div>
  );
}

export default CartPage;
