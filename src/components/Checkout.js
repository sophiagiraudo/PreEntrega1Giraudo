import React, { useContext } from "react";
import { useState } from "react";
import Notiflix from "notiflix";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import CartContext from "../Context/CartContext";
import "../Assets/Checkout.css";
import Button from "react-bootstrap/Button";

export default function Checkout({ cart, valorTotal }) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [mailConfirmacion, setMailConfirmacion] = useState("");
  const { removeList } = useContext(CartContext);

  function handleSubmit(event) {
    event.preventDefault();
    const date = new Date();
    const order = {
      buyer: {
        nombre: name,
        telefono: phone,
        mail: mail,
      },
      items: cart,
      "Valor Total": valorTotal,
      Fecha: date,
    };
    console.log(order);
    const db = getFirestore();

    const ordersCollection = collection(db, "orders");
    mailConfirmacion === mail
      ? addDoc(ordersCollection, order).then(
          ({ id }) =>
            Notiflix.Report.success(
              "¡Compra Realizada!",
              `Orden de compra numero: ${id}`,
              "Entendido!",
              {
                width: "360px",
                svgSize: "120px",
              }
            ),
          setShowModal(false),
          removeList()
        )
      : Notiflix.Report.failure(
          "Ups!",
          "Debe ingresar correctamente el mail de confirmación"
        );
  }

  return (
    <>
      <div className="btnCheckout">
        <Button
          type="button"
          onClick={() =>
            cart.length > 0
              ? setShowModal(true)
              : Notiflix.Report.failure("Ups!", "Carrito vacio!", "Entendido!")
          }
        >
          Comprar
        </Button>
      </div>
      {showModal ? (
        <>
          <div className="">
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className=""
              data-modal-toggle="authentication-modal-2"
            ></button>
            <div className="formContainer">
              <h3 className="headingForm">Datos para finalizar la compra</h3>
              <form onSubmit={handleSubmit} className="contactForm " action="#">
                <div>
                  <label htmlFor="usuario">Nombre y Apellido</label>
                  <br />
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="name"
                    name="name"
                    id="name"
                    className=""
                    placeholder="Juan Lopez"
                    required
                  ></input>
                </div>
                <div>
                  <label htmlFor="usuario">Telefono</label>
                  <br />
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    name="phone"
                    id="phone"
                    pattern="[0-9]{8}"
                    className=""
                    placeholder="12345678"
                    required
                  ></input>
                </div>
                <div>
                  <label htmlFor="usuario">Email</label>
                  <br />
                  <input
                    onChange={(e) => setMail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className=""
                    placeholder="juan@gmail.com"
                    required
                  ></input>
                </div>
                <div>
                  <label htmlFor="usuario" className="">
                    Confirmar Email
                  </label>
                  <br />
                  <input
                    onChange={(e) => setMailConfirmacion(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className=""
                    placeholder="juan@gmail.com"
                    required
                  ></input>
                </div>

                <div className="btnCheckout">
                  <Button type="submit">Finalizar Compra</Button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
