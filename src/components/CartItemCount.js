import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function ItemCount({ stock, initial, add, product }) {
  const [value, setValue] = useState(initial);

  function onAdd() {
    stock > value ? setValue(value + 1) : setValue(value + 0);
  }

  function onSubstract() {
    value > 1 ? setValue(value - 1) : setValue(value + 0);
  }

  useEffect(() => {
    add(value, product);
  }, [value]);

  return (
    <div>
      <div className="divCounterCart">
        <Button variant="outline-danger" onClick={onSubstract}>
          -
        </Button>{" "}
        <h2 className="valueCart">{value}</h2>
        <Button variant="outline-success" onClick={onAdd}>
          +
        </Button>{" "}
      </div>
    </div>
  );
}
