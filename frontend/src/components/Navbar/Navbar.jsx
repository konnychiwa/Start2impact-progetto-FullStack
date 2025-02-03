import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { StoreContext } from '../../context/StoreContext';
import { useMenu } from '../../context/MenuContext';
import { useContext } from 'react';

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const { menu, setMenu } = useMenu();

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu('home')}
          className={menu === 'home' ? 'active' : ''}
        >
          Home
        </Link>

        <Link
          to="/menu"
          onClick={() => setMenu('menu')}
          className={menu === 'menu' ? 'active' : ''}
        >
          Menu
        </Link>
        <a href="#footer">Chi siamo</a>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/cart" onClick={() => setMenu('')}>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Accedi</button>
      </div>
    </div>
  );
};

export default Navbar;
