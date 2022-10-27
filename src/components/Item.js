import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Assets/Item.css";

function item(props) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.brand}</Card.Title>
        <br />
        <Card.Text>
          Café {props.category}
          <br />
          <br />
          Origen {props.origin}{" "}
        </Card.Text>
        <NavLink to={`/item/${props.id}`}>
          <Button variant="dark">Ver Más!</Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
}

export default item;
