import { useState, useEffect, useContext } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState('Login');

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    let newUrl = url;
    if (currentState === 'Login') {
      newUrl += '/api/user/login';
    } else {
      newUrl += '/api/user/register';
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === 'Login' ? null : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Il tuo nome"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="La tua mail"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">
          {currentState === 'Login' ? 'Accedi' : 'Crea Account'}
        </button>
        <div className="login-popup-condition">
          {currentState === 'Login' ? null : <input type="checkbox" required />}
          {currentState === 'Login' ? null : (
            <p>
              Se continui accetti i termini di utilizzo e la polizza sulla
              privacy
            </p>
          )}
        </div>
        {currentState === 'Login' ? (
          <p>
            Vuoi creare un account?{' '}
            <span onClick={() => setCurrentState('Sign Up')}>Clicca qui</span>
          </p>
        ) : (
          <p>
            Hai già un account?{' '}
            <span onClick={() => setCurrentState('Login')}>Accedi qui</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
