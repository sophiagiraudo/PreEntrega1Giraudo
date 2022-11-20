import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinners from "./Spinners";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import "../Assets/ItemDetailContainer.css";

function ItemDetailContainer() {
  const { productID } = useParams();
  const [cards, setCards] = useState(<Spinners />);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const docRef = query(collection(db, "items"), where("id", "==", productID));

    getDocs(docRef).then((snapshot) => {
      setCards(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      isLoading(false);
    });
  }, []);

  return (
    <div className="ItemDetailContainer">
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
