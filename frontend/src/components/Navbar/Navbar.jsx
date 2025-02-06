import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { StoreContext } from '../../context/StoreContext';
import { useMenu } from '../../context/MenuContext';
import { useContext } from 'react';

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const { menu, setMenu } = useMenu();

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

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
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Accedi</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={assets.bag_icon} alt="" />
                <p>Ordini</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
