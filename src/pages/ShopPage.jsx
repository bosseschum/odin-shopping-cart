import { useCart } from "./context/CartContext";

function ShopPage() {
  const newItem = {
    id: 1,
    name: "shirt",
    category: "clothes",
    price: 20,
    image: "url",
    description: "some text",
  };

  return <h1>Welcome to the Shop Page!</h1>;
}

export default ShopPage;
