import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-6 p-4 border-b-black">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart (0)</Link>
    </nav>
  );
}

export default Navbar;
