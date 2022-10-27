import React, { Fragment } from "react";
import ItemList from "./ItemList";

function ItemListContainer(greeting) {
  return (
    <Fragment>
      <span>
        <ItemList />
      </span>
    </Fragment>
  );
}

export default ItemListContainer;
