import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

function ItemDetailContainer() {
  const { productID } = useParams();
  const [cards, setcards] = useState(<Spinner />);
  const [loading, isLoading] = useState(true);

  const getItem = () => {
    let items = require("../Backend/products.json");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
        isLoading(false);
      }, 1000);
    });
  };

  useEffect(() => {
    async function fetchedItems() {
      const items = await getItem();
      setcards(items);
    }

    fetchedItems();
  }, []);

  return (
    <div>
      {loading
        ? cards
        : cards
            .filter((product) => product.id.includes(productID))
            .map((p) => (
              <ItemDetail
                key={p.id}
                brand={p.brand}
                origin={p.origin}
                img={p.img}
                category={p.category}
                description={p.description}
                id={p.id}
                price={p.price}
                stock={p.stock}
              />
            ))}
    </div>
  );
}

export default ItemDetailContainer;
