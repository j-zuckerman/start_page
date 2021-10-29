import { useState } from 'react';
import styles from './sideMenu.module.css';

function MenuItem({
  changeCategory,
  category,
  isActive,
  deleteCategory,
  editCategory,
}) {
  const [title, setTitle] = useState(category.title);

  let className = '';

  if (isActive) className = 'active';

  const handleClick = () => {
    changeCategory(category.title);
  };

  const editTitle = (e) => {
    if (e.code === 'Enter') {
      editCategory(title, category.id);
    }
  };

  return (
    <li
      className={`${styles['menu-item']} ${styles[className]} `}
      onClick={handleClick}
    >
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={editTitle}
        className={`${styles['category-title']}`}
      />

      <span className={`${styles['menu-item-options']}`}>
        <i
          className={`${styles.delete} ri-delete-bin-7-line`}
          onClick={() => deleteCategory(category.id)}
        ></i>
      </span>
    </li>
  );
}

export default MenuItem;
