import { useState } from 'react';
import styles from './sideMenu.module.css';
import MenuItem from './menuItem';
import AddCategory from './addCategory';

function SideMenu({ categories, changeCategory, active }) {
  return (
    <ul className={styles.menu}>
      {categories.map((category) => {
        const isActive = active === category.title;
        return (
          <MenuItem
            isActive={isActive}
            changeCategory={changeCategory}
            category={category}
            key={category.id}
          />
        );
      })}
      <AddCategory />
    </ul>
  );
}

export default SideMenu;
