import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/frontend_assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore the Menu</h1>
      <p className="explore-menu-text">
        Discover a world of delicious options crafted to satisfy every craving; whether you’re in the mood for something savory, sweet, or spicy, our menu has exactly what you need to indulge in pure culinary delight.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return ( 
            <div
              onClick={() => setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))}
              key={index}
              className="explore-menu-list-item"
            >
              <img className={category===item.menu_name ? "active":""}src={item.menu_image} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
