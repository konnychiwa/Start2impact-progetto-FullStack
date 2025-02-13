import './Header.css';
import { useMenu } from '../../context/MenuContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { setMenu } = useMenu();

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Cosa ordiniamo oggi?</h2>
        <p>
          Scegli tra tanti piatti, ti piace qualcosa? Ordinalo e aspetta che un
          rider te lo porti a casa!
        </p>
        <Link to="/menu">
          <button onClick={() => setMenu('menu')}>Vedi il Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
