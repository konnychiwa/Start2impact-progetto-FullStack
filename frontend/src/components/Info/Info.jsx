import { assets } from '../../assets/assets';
import './Info.css';

const Info = () => {
  return (
    <div className="info" id="info">
      <p>Come funziona?</p>
      <h2>Chi cerca trova</h2>
      <div className="how-to-use">
        <div>
          <img src={assets.ricette} alt="" />
          <h3>Sfoglia il Menu</h3>
          <p>Cerca quello che vuoi mangiare oggi</p>
        </div>
        <div className="info-middle">
          <img src={assets.search_icon} alt="" />
          <h3>Trovato?</h3>
          <p>Ordinalo e paga qua sul sito</p>
        </div>
        <div>
          <img src={assets.pentola} alt="" />
          <h3>Aspetta!</h3>
          <p>
            Bene, aspetta che il ristorante abbia finito di cucinare e che un
            rider ti porti il cibo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
