import { useState } from 'react';
import styles from './sideMenu.module.css';
import Clock from '../clock';
import DateDisplay from '../date';
import Search from '../search';
import Weather from '../weather';
import MenuItem from './menuItem';
import AddCategory from './addCategory';

function SideMenu({
  categories,
  changeCategory,
  activeCategory,
  addCategory,
  deleteCategory,
  editCategory,
}) {
  return (
    <div className={styles.menu}>
      <div className={styles['date-container']}>
        <Clock />
        <DateDisplay />
      </div>
      <div className={styles['search-container']}>
        <Search />
      </div>

      <ul className={styles.categories}>
        {categories.map((category) => {
          const isActive = activeCategory === category.title;
          return (
            <MenuItem
              isActive={isActive}
              changeCategory={changeCategory}
              deleteCategory={deleteCategory}
              category={category}
              key={category.id}
            />
          );
        })}
        <AddCategory addCategory={addCategory} />
      </ul>

      <div className={styles['weather-container']}>
        <Weather />
      </div>
    </div>
  );
}

export default SideMenu;
