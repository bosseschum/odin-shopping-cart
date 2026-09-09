import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ProductCard from "../components/shop/ProductCard";
import { CartProvider } from "../context/CartProvider";

const mockProduct = {
  id: 1,
  title: "Fjallraven Backpack",
  description: "Just a backpack",
  price: 109.95,
  image: "https://via.placeholder.com/150",
};

const mockAddToCart = vi.fn();

vi.mock("../context/useCart", () => ({
  useCart: () => ({
    addToCart: mockAddToCart,
  }),
}));

describe("Product card", () => {
  it("render product information", () => {
    render(
      <CartProvider>
        <ProductCard product={mockProduct} />
      </CartProvider>,
    );

    expect(
      screen.getByRole("heading", {
        name: "Fjallraven Backpack",
      }),
    ).toBeInTheDocument();
  });

  it("increases quantity", async () => {
    const user = userEvent.setup();

    render(
      <CartProvider>
        <ProductCard product={mockProduct} />
      </CartProvider>,
    );

    const input = screen.getByRole("spinbutton");

    expect(input).toHaveValue(1);

    await user.click(
      screen.getByRole("button", {
        name: "Increase quantity",
      }),
    );

    expect(input).toHaveValue(2);
  });

  it("adds to cart with the correct quantity", async () => {
    const user = userEvent.setup();

    render(<ProductCard product={mockProduct} />);

    await user.click(
      screen.getByRole("button", {
        name: "Increase quantity",
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: "Add to cart",
      }),
    );

    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct, 2);
  });
});
