import { useState, useEffect } from "react";
import Spinners from "./Spinners";
import Item from "./Item";
import { useParams } from "react-router-dom";
import "../Assets/ItemList.css";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default function ItemList() {
  const [cards, setCards] = useState(<Spinners />);
  const [loading, isLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const docRef = category
      ? query(collection(db, "items"), where("category", "==", category))
      : collection(db, "items");

    getDocs(docRef).then((snapshot) => {
      setCards(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      isLoading(false);
    });
  }, [category]);

  return (
    <div className="cardsContainer">
      {loading
        ? cards
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
