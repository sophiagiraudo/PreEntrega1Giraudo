import { useContext, useEffect, useState } from "react";
import CartContext from "../Context/CartContext";
import CartItemCount from "../components/CartItemCount";
import Checkout from "../components/Checkout";
import Table from "react-bootstrap/Table";

function Cart() {
  const { addToCart, deleteItem, removeList, cartList } =
    useContext(CartContext);
  const [total, setTotal] = useState(0);

  function agregarACarrito(qty, product) {
    addToCart(product, qty);
    resumenPrecio();
  }

  function resumenPrecio() {
    const subtotal = cartList.reduce(
      (previus, current) => previus + current.price * current.qty,
      0
    );
    const iva = (subtotal * 0.21).toFixed(0);
    const total = Number(subtotal * 1.21).toFixed(0);
    const valores = [subtotal, iva, total];
    setTotal(valores);
  }

  useEffect(() => {
    resumenPrecio();
  }, [deleteItem, removeList]);

  return (
    <div className="">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Precio</th>
            <th>Marca</th>
            <th>Cafe</th>
            <th>Origen</th>
            <th>Cantidad</th>
            <th>Stock</th>
            <th>Agregar/Restar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>$ {product.price}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>{product.origin}</td>
              <td>{product.qty}</td>
              <td>{product.stock}</td>
              <td>
                <CartItemCount
                  stock={product.stock}
                  product={product}
                  add={agregarACarrito}
                  initial={product.qty}
                />
              </td>
              <td>
                <i
                  className="bi bi-trash3"
                  onClick={() => deleteItem(product)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Table striped>
        <thead>
          <tr>
            <th>Subtotal</th>
            <th>IVA</th>
            <th>Total</th>
            <th>Vaciar Carrito</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$ {total[0]}</td>
            <td>$ {total[1]}</td>
            <td>$ {total[2]}</td>
            <td>
              <button onClick={removeList}>
                <i className="bi bi-trash3"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </Table>

      <div className="">
        <Checkout cart={cartList} valorTotal={total[2]} />
      </div>
    </div>
  );
}

export default Cart;
