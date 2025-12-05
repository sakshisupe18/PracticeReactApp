import React, { createContext, useReducer, useContext } from "react";
import ReactDOM from "react-dom/client";

/* ---------------------- 1. Create CartContext ---------------------- */
const CartContext = createContext({
  items: [],
  totalQuantity: 0,
  dispatch: () => {},
});

/* ---------------------- 2. Define initial state and reducer ---------------------- */
const initialCartState = {
  items: [],
  totalQuantity: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { item } = action;
      const existingIndex = state.items.findIndex((i) => i.id === item.id);

      let updatedItems;
      if (existingIndex > -1) {
        updatedItems = state.items.map((i, idx) =>
          idx === existingIndex ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        updatedItems = [...state.items, item];
      }

      const totalQuantity = updatedItems.reduce((sum, i) => sum + i.quantity, 0);
      return { ...state, items: updatedItems, totalQuantity };
    }

    case "REMOVE_ITEM": {
      const { id } = action;
      const updatedItems = state.items.filter((i) => i.id !== id);
      const totalQuantity = updatedItems.reduce((sum, i) => sum + i.quantity, 0);
      return { ...state, items: updatedItems, totalQuantity };
    }

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action;
      if (quantity <= 0) {
        const filtered = state.items.filter((i) => i.id !== id);
        const totalQuantity = filtered.reduce((sum, i) => sum + i.quantity, 0);
        return { ...state, items: filtered, totalQuantity };
      }

      const updatedItems = state.items.map((i) =>
        i.id === id ? { ...i, quantity } : i
      );
      const totalQuantity = updatedItems.reduce((sum, i) => sum + i.quantity, 0);
      return { ...state, items: updatedItems, totalQuantity };
    }

    default:
      return state;
  }
}

/* ---------------------- 3. CartProvider ---------------------- */
function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);
  const value = { ...state, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/* ---------------------- 4. Components using the cart ---------------------- */
function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      item: { ...product, quantity: 1 },
    });
  };

  return (
    <div style={{ border: "1px solid gray", margin: "5px", padding: "5px" }}>
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

function CartSummary() {
  const { items, totalQuantity, dispatch } = useContext(CartContext);

  const remove = (id) => dispatch({ type: "REMOVE_ITEM", id });
  const updateQty = (id, qty) => dispatch({ type: "UPDATE_QUANTITY", id, quantity: qty });

  return (
    <div style={{ border: "1px solid black", marginTop: "10px", padding: "10px" }}>
      <h3>Cart ({totalQuantity})</h3>
      <ul>
        {items.map(({ id, name, price, quantity }) => (
          <li key={id}>
            {name} - ${price.toFixed(2)} × {quantity}{" "}
            <button onClick={() => remove(id)}>Remove</button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => updateQty(id, parseInt(e.target.value, 10))}
              style={{ width: "40px", marginLeft: "5px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------------- 5. Main App ---------------------- */
function Ecom() {
  const products = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Headphones", price: 199.99 },
    { id: 3, name: "Mouse", price: 49.99 },
  ];

  return (
    <CartProvider>
      <h1>My E-Commerce Store</h1>
      <div style={{ display: "flex" }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <CartSummary />
    </CartProvider>
  );
}

/* ---------------------- 6. Render ---------------------- */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Ecom />);
