import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Informazioni sulla Consegna</p>
        <div className="multi-fields">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Cognome" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Via" />
        <div className="multi-fields">
          <input type="text" placeholder="Città" />
          <input type="text" placeholder="Codice Postale" />
        </div>
        <input type="text" placeholder="Telefono" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Totale del Carrello</h2>
          <div>
            <div className="cart-total-details">
              <p>Totale senza tassa</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Tassa sulla spedizione</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Totale</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button>Procedi al Pagamento</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
