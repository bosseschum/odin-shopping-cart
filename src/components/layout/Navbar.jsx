import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useCart();
  return (
    <nav className="flex gap-6 p-4 border-b-black">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart ({totalItems})</Link>
    </nav>
  );
}

export default Navbar;
