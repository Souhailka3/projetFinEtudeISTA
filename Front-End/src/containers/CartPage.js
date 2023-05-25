import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/actions/ProductAction";
import "./css/CartPage.css";

const CartPage = () => {
  const cartproducts = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const totalPrice = cartproducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const renderList = cartproducts
    .reduce((rows, product, index) => {
      if (index % 4 === 0) rows.push([]);
      rows[rows.length - 1].push(product);
      return rows;
    }, [])
    .map((row) => (
      <div className="ui grid container">
        {row.map((product) => {
          const { id, title, image, price, categorie, quantity } = product;
          return (
            <div className="four wide column" key={id}>
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <img src={image} alt={title} />
                  </div>
                  <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="meta">
                      {categorie.nom_categorie_categorie}
                    </div>
                  </div>
                  <div className="incr-decr">
                    <button onClick={() => dispatch(decreaseQuantity(id))}>
                      -
                    </button>
                    <span>Quantity: {quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(id))}>
                      +
                    </button>
                  </div>
                  <button
                    className="remove"
                    onClick={() => dispatch(removeFromCart(id))}
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    ));
  return (
    <>
      <Header />

      {cartproducts.length === 0 ? (
        <div className="cart-c">
          <h2 className="cart-h">Your cart is empty</h2>
        </div>
      ) : (
        <>
          {renderList}
          <h3 className="cart-h">Total Price: ${totalPrice}</h3>
        </>
      )}
    </>
  );
};

export default CartPage;
