---
tags:
  - project/react
  - odin-project
status: in-progress
started: 2026-09-08
repo: git@github.com:bosseschum/odin-shopping-cart.git
demo:
---

# Project: Shopping Cart

## 1. Scope & Core Requirements

- [ ] 3 distinct pages: Home (`/`), Shop (`/shop`), Cart (`/cart`)
- [ ] Persistent Navigation bar visible across all routes showing real-time cart item count badge
- [ ] Live product data fetched from FakeStore API (`https://fakestoreapi.com/products`)
- [ ] Shop page: product cards with title, price, manual numeric input, `+`/`-` buttons and `"Add to Cart"`
- [ ] Cart page: list of selected items, line totals, full order total, quantity modifiers and remove item functionaility
- [ ] Unit & integration tests via React Testing Library / Vitest (test business logic and user flows, not React Router internals)
- [ ] SPA deployment configuration handled for client-side routing

---

## 2. State & Architecture Plan

### State Strategy

> **Question:** Where does the cart state live?
> **Decision:** Context API (`CartContext`) or hoisted in a root router component, since `Navbar`, `ShopPage` and `CartPage` all require read/write access

**Cart Item Data Shape:**

```json
{
  "id": 1,
  "title": "Product Title",
  "price": 109.95,
  "image": "https://...",
  "quantity": 2
}
```

**Folder & Component Structure:**

```
src/
├── api/
│   └── fakeStore.js        # Data fetching wrapper + error handling
├── assets/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx      # Links + live badge counter
│   │   └── RootLayout.jsx  # Context Provider + Outlet
│   ├── shop/
│   │   ├── ProductCard.jsx # Quantity inputs + Add to Cart button
│   │   └── ProductGrid.jsx
│   └── cart/
│       ├── CartItem.jsx    # Quantity controls + remove action
│       └── OrderSummary.jsx
├── context/
│   └── CartContext.jsx     # cart items, addToCart, updateQuantity, removeItem
├── pages/
│   ├── HomePage.jsx
│   ├── ShopPage.jsx
│   └── CartPage.jsx
├── routes/
│   └── router.jsx          # React Router createBrowserRouter setup
├── tests/
│   ├── ShopPage.test.jsx
│   └── CartPage.test.jsx
├── App.jsx
└── main.jsx
```

## 3. Implementation Checklist

**Phase 1: Setup & Routing**

- [x] Initialize project with vite (npm create vite@latest . -- --template react)
- [x] Install dependencies: react-router-dom, testing libraries, lucide icons, tailwind
- [x] Configure `createBrowserRouter` with `RootLayout` (`Navbar` + `<Outlet />`)
- [x] Create placeholder components for `Home`, `Shop` and `Cart`

**Phase 2: State Management & API**

- [x] Create `CartContext` with actions:
  - [x] `addToCart(product, quantity`)
  - [x] `increaseQuantity(product)/decreaseQuantity(product)`
  - [x] `removeFromCart(productId)`
  - [x] `getCartCount()`
- [x] Fetch product data from `https://fakeshopapi.com/products` with loading & error states

**Phase 3: Page Logic**

- [ ] Home: Hero section, banner, call-to-action link to `/shop`
- [x] Shop:
  - [x] Map fetched products into `ProductCard`
  - [x] Implement controlled input for quantity (validate: integers >= 1)
  - [x] Implement increment/decrement buttons syncing with input
- [x] Cart:
  - [x] Render list of cart items or empty state message
  - [x] Calculate subtotal and total price
  - [x] Implement quantity modification and item removal

**Phase 4: Testing & RTL**

- [ ] Test `ProductCard`: renders title/price, updates quantity field on click
- [ ] Test `Cart`: updating quantity updates item total and cart count
- [ ] Test mocked API response rendering on `ShopPage`

**Phase 5: Deployment & Routing Fix**

- [ ] Vercel (add `vercel.json` at root)

```
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
