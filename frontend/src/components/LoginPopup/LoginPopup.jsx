import { useState, useEffect } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState('Login');

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
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
            <input type="text" placeholder="Il tuo nome" required />
          )}
          <input type="email" placeholder="La tua mail" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>
          {currentState === 'Iscriviti' ? 'Create Account' : 'Accedi'}
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
