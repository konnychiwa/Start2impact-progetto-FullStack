import './Menu.css';
import { useState } from 'react';
import ExploreMenus from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Menu = () => {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <ExploreMenus category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Menu;
