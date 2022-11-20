import React, { useEffect } from "react";
import { useState } from "react";
import "../Assets/ItemCount.css";
import Button from "react-bootstrap/Button";

export default function ItemCount({ stock, initial, add, alt }) {
  const [value, setValue] = useState(initial);

  function onAdd() {
    stock > value ? setValue(value + 1) : setValue(value + 0);
  }

  function onSubstract() {
    value !== 0 ? setValue(value - 1) : setValue(value + 0);
  }

  useEffect(() => {
    add(value);
  }, [value]);

  return (
    <div className={alt}>
      <h4>Stock Actual: {stock}</h4>
      <div className="divCounter">
        <Button variant="danger" onClick={onSubstract}>
          -
        </Button>{" "}
        <h2 className="value">{value}</h2>
        <Button variant="success" onClick={onAdd}>
          +
        </Button>{" "}
      </div>
    </div>
  );
}
