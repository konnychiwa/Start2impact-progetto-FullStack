import './ExploreMenu.css';
import { ingredient_list } from '../../assets/assets';

const ExploreMenus = ({ category, setCategory }) => {
  return (
    <div className="explore-menus" id="explore-menus">
      <h1>Menu</h1>
      <p className="explore-menus-text">
        Scegli tra diversi menu e trova qualcosa che fa al fatto tuo. La nostra
        missione è quella di assicurarci che ognuno abbia qualcosa che gli possa
        piacere.
      </p>
      <h2>Cerchi qualcosa in particolare?</h2>
      <div className="explore-menus-list">
        {ingredient_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? 'All' : item.menu_name
                )
              }
              key={index}
              className="explore-menus-list-item"
            >
              <img
                className={category === item.menu_name ? 'active' : ''}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenus;
