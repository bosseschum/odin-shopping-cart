import { useState } from "react";

function ShopPage() {
  const [cartItems, setCartItems] = useState([]);

  const newItem = {
    id: 1,
    name: "shirt",
    category: "clothes",
    price: 20,
    image: "url",
    description: "some text",
  };

  const addToCart = (product, quantityToAdd) => {
    setCartItems((prevItems) => {
      const exists = prevItems.some((item) => item.id === product.id);

      if (!exists) {
        return [...prevItems, { ...product, quantity: quantityToAdd }];
      } else {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item,
        );
      }
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id),
    );
  };

  const increaseQuantity = (product) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decreaseQuantity = (product) => {
    setCartItems((prevItems) => {
      const current = prevItems.find((item) => item.id === product.id);
      if (!current) return prevItems;

      if (current.quantity <= 1) {
        return prevItems.filter((item) => item.id !== product.id);
      }

      return prevItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    });
  };

  return <h1>Welcome to the Shop Page!</h1>;
}

export default ShopPage;
