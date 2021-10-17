import { useState } from 'react';
import styles from './sideMenu.module.css';
import MenuItem from './menuItem';
import AddCategory from './addCategory';

function SideMenu({ categories, changeCategory }) {
  const [active, setActive] = useState(categories[0].title);

  const changeActiveCategory = (title) => {
    setActive(title);
  };
  return (
    <ul className={styles.menu}>
      {categories.map((category) => {
        const isActive = active === category.title;
        return (
          <MenuItem
            isActive={isActive}
            changeCategory={changeCategory}
            category={category}
            changeActiveCategory={changeActiveCategory}
          />
        );
      })}
      <AddCategory />
    </ul>
  );
}

export default SideMenu;
