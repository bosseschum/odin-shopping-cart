import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-start justify-center gap-4">
      <h1 className="max-w-xl text-4xl font-semibold text-stone-900 sm:text-5xl">
        Welcome to the shop.
      </h1>
      <p className="max-w-md text-stone-500">
        Take a look through what we have in stock, and add your favorites to the
        cart.
      </p>
      <Link
        to="/shop"
        className="mt-2 rounded-md bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700"
      >
        Browse products
      </Link>
    </div>
  );
}

export default HomePage;
