import { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [cartUpdate, setCartUpdate] = useState(true);
  const cartProvider = cartList;

  //Funcion condicion
  const isInCart = (id) => {
    return cartList.some((el) => el.id === id);
  };

  //Agregar un producto al carrito
  const addToCart = (item, qty) => {
    const product = {
      id: item.id,
      origin: item.origin,
      price: item.price,
      stock: item.stock,
      brand: item.brand,
      category: item.category,
      description: item.description,
      img: item.img,
      qty: qty,
    };
    if (!isInCart(item.id)) {
      cartProvider.push(product);
      setCartList(cartProvider);
      setCartUpdate((prev) => !prev);
    } else if (isInCart) {
      const posItem = cartProvider.findIndex(
        (product) => product.id === item.id
      );
      cartProvider[posItem].qty = qty;
      setCartList(cartProvider);
    }
  };

  //Dejar el carrito vacío
  const removeList = () => {
    setCartList([]);
    setCartUpdate((prev) => !prev);
  };

  //Borrar un producto del carrito
  const deleteItem = (item) => {
    const Items = cartList.filter((i) => i.id !== item.id);
    setCartList(Items);
  };

  return (
    <CartContext.Provider
      value={{ cartList, cartUpdate, addToCart, removeList, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };
export default CartContext;
