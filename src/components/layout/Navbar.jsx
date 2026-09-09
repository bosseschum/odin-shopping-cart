import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";

import { ShoppingCart } from "lucide-react";

function Navbar() {
  const { totalItems } = useCart();
  return (
    <nav className="sticky top-0 z-10 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-4">
        <Link to="/" className="text-lg font-semibold text-stone-900">
          Shop.
        </Link>
        <div className="flex flex-1 items-center gap-6 text-sm text-stone-600">
          <Link to="/" className="transition-colors hover:text-stone-900">
            Home
          </Link>
          <Link to="/shop" className="transition-colors hover:text-stone-900">
            Shop
          </Link>
        </div>
        <Link
          to="/cart"
          className={
            totalItems === 0
              ? "flex items-center gap-1.5 rounded-md border border-stone-300 px-3 py-1.5 text-sm text-stone-700 transition-colors hover:border-stone-400 hover:text-stone-900"
              : "flex items-center gap-1.5 rounded-md border border-black px-3 py-1.5 text-sm text-stone-700 transition-colors hover:border-stone-400 hover:text-stone-900"
          }
        >
          <ShoppingCart className="h-4 w-4" />
          <p>{totalItems}</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
