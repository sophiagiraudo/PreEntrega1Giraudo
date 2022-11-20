import "../Assets/CartWidget.css";
import { NavLink } from "react-router-dom";
import CartContext from "../Context/CartContext";
import { useContext, useState, useEffect } from "react";

function CartWidget() {
  const { cartList, cartUpdate } = useContext(CartContext);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    setCartLength(cartList.length);
  }, [cartUpdate]);

  return (
    <NavLink to={`/cart`}>
      {" "}
      <button type="button" className="btnCart">
        <div className="cart">
          <i className="bi bi-cart3"></i>
        </div>
        {cartLength > 0 ? <div className="">{cartLength}</div> : <></>}
      </button>
    </NavLink>
  );
}

export default CartWidget;
