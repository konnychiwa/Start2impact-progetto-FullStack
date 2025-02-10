import { useState, useEffect, useContext } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState('Login');
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setShowLogin(false);
        if (response.status === 200) {
          toast.success('Accesso eseguito');
        } else if (response.status === 201) {
          toast.success('Account creato');
        }
      } else {
        toast.error(response.data.message || 'Errore sconosciuto');
      }
    } catch (error) {
      if (error.status === 404) {
        toast.error("L'utente non esiste");
      } else if (error.status === 401) {
        toast.error('Credenziali invalide');
      } else if (error.status === 409) {
        toast.error("L'utente non esiste");
      } else if (error.status === 406) {
        toast.error('Immettere una mail valida');
      } else if (error.status === 411) {
        toast.error('Immettere una password più forte');
      } else {
        toast.error('Errore');
      }
    } finally {
      setLoading(false);
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
      <form onSubmit={onLogin} className="login-popup-container">
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
          {currentState === 'Login' ? (
            <input
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              type="password"
              placeholder="Password"
              required
            />
          ) : (
            <input
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              type="password"
              placeholder="min 8 caratteri"
              required
            />
          )}
        </div>
        <button type="submit" disabled={loading}>
          {loading
            ? 'Caricamento...'
            : currentState === 'Login'
            ? 'Accedi'
            : 'Crea Account'}
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
