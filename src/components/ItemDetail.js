import ItemCount from "./ItemCount";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Assets/ItemDetail.css";
import { useContext, useState } from "react";
import CartContext from "../Context/CartContext";
import { NavLink } from "react-router-dom";

function ItemDetail(props) {
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [qty, setQty] = useState(0);

  function onAdd(qty) {
    setQty(qty);
  }

  function addCart(product) {
    addToCart(product, qty);
    setLoading(true);
  }

  return (
    <Card className="cardDetail" style={{ width: "24rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.brand}</Card.Title>
        <Card.Text>
          Café: {props.category}
          <br />
          Origen: {props.origin}
          <br />
          Descripción: {props.description}
        </Card.Text>
        <span> Precio: ${props.price} </span>
        {!loading ? (
          <ItemCount stock={props.stock} initial={1} add={onAdd} />
        ) : (
          <div className="">
            <NavLink to={`/cart`}>
              <button type="button" className=""></button>
            </NavLink>
          </div>
        )}

        <Button variant="dark" onClick={() => addCart(props)}>
          Comprar!
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
