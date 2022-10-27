import ItemCount from "./ItemCount";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Assets/ItemDetail.css";

function ItemDetail(props) {
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
        <span> Precio: {props.price} </span>
        <ItemCount stock={props.stock} initial={0} />
        <Button variant="dark">Comprar!</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
