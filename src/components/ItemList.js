import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import Item from "./Item";
import { useParams } from "react-router-dom";
import "../Assets/ItemList.css";

export default function ItemList() {
  const [cards, setcards] = useState(<Spinner />);
  const [loading, isLoading] = useState(false);
  const { category } = useParams();

  //SIMULACION API
  const listado = () => {
    let items = require("../Backend/products.json");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
        isLoading(true);
      }, 2000);
    });
  };

  useEffect(() => {
    async function fetchedItems() {
      const items = await listado();
      setcards(items);
    }

    fetchedItems();
  }, []);

  return (
    <div className="cardsContainer">
      {!loading
        ? cards
        : category
        ? cards
            .filter((product) => product.category === category)
            .map((p) => (
              <Item
                key={p.id}
                brand={p.brand}
                origin={p.origin}
                img={p.img}
                category={p.category}
                description={p.description}
                id={p.id}
              />
            ))
        : cards.map((p) => (
            <Item
              key={p.id}
              brand={p.brand}
              origin={p.origin}
              img={p.img}
              category={p.category}
              description={p.description}
              id={p.id}
            />
          ))}
    </div>
  );
}
