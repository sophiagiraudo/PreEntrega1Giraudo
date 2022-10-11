import "./ItemListContainer.css";

import Card from "react-bootstrap/Card";

function ItemListContainer(greeting) {
  return (
    <Card className="greeting">
      <Card.Body>
        <h1 className="card-tit">{greeting.msg}</h1>
        <Card.Text>Worry Less & Drink More Coffee</Card.Text>
        <button className="btn-tit">
          <i class="bi bi-cup-hot-fill"></i>
        </button>
      </Card.Body>
    </Card>
  );
}

export default ItemListContainer;
