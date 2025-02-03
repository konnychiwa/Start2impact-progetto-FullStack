import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            provident eligendi nobis. Quam at distinctio in mollitia adipisci
            eius beatae ea rerum necessitatibus nam. Quaerat deleniti libero
            reiciendis quos. Tempore?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+39 1234567890</li>
            <li>example@cookio.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Made with ❤️ by Konny | Absolute 🎥</p>
    </div>
  );
};

export default Footer;
