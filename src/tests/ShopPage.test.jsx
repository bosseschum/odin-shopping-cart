import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ShopPage from "../pages/ShopPage";
import { CartProvider } from "../context/CartProvider";

const mockProducts = [
  {
    id: 1,
    title: "Backpack",
    price: 50,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Sneakers",
    price: 80,
    image: "https://via.placeholder.com/150",
  },
];

beforeEach(() => {
  vi.stubGlobal(
    "fetch",
    vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProducts),
      }),
    ),
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Shop page", () => {
  it("shows the loading screen", () => {
    render(
      <CartProvider>
        <ShopPage />
      </CartProvider>,
    );
    expect(screen.getByText("Loading products…")).toBeInTheDocument();
  });

  it("renders products when data arrives", async () => {
    render(
      <CartProvider>
        <ShopPage />
      </CartProvider>,
    );
    await screen.findByRole("heading", { name: "Backpack" });

    expect(screen.queryByText("Loading products...")).not.toBeInTheDocument();
    expect(screen.queryByText("Backpack")).toBeInTheDocument();
  });
});
