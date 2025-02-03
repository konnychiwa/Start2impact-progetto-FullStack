import Header from '../../components/Header/Header';
import './Home.css';
import AppDownload from '../../components/AppDownload/AppDownload';
import Info from '../../components/Info/Info';

const Home = () => {
  return (
    <div>
      <Header />
      <Info />
      <AppDownload />
    </div>
  );
};

export default Home;
