import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    zipcode: '',
    phone: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo['quantity'] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(url + '/api/order/place', orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert('Errore');
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/cart');
      toast.error('Devi accedere per fare un ordine');
    } else if (getTotalCartAmount() === 0) {
      navigate('/cart');
      toast.error('Metti qualcosa nel carrello per proseguire');
    }
  }, [token]);

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Informazioni sulla Consegna</p>
        <div className="multi-fields">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="Nome"
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Cognome"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email"
        />
        <input
          required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Via"
        />
        <div className="multi-fields">
          <input
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="Città"
          />
          <input
            required
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="Codice Postale"
          />
        </div>
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Telefono"
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Totale del Carrello</h2>
          <div>
            <div className="cart-total-details">
              <p>Totale senza tassa</p>
              <p>{getTotalCartAmount()}€</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Tassa sulla spedizione</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}€</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Totale</b>
              <b>
                {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}€
              </b>
            </div>
          </div>
          <button type="submit">Procedi al Pagamento</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
