import { assets } from '../../assets/assets';
import './AppDownload.css';

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        Coming soon - Download the Mobile App <br />
        Cookio App
      </p>
      <div className="app-download-platforms">
        <img src={assets.app_store} alt="" />
        <img src={assets.play_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
