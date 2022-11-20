import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../src/components/ItemDetailContainer";
import Cart from "./components/Cart";
import { CartContextProvider } from "./Context/CartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route
              path="/:category/:productID"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
