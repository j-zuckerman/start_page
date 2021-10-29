import styles from './sideMenu.module.css';

function MenuItem({ changeCategory, category, isActive, deleteCategory }) {
  let className = '';

  if (isActive) className = 'active';

  const handleClick = () => {
    changeCategory(category.title);
  };
  return (
    <li className={`${styles['menu-item']} ${styles[className]} `}>
      <span contentEditable={true} onClick={handleClick}>
        {category.title}
      </span>

      <span className={`${styles['menu-item-options']}`}>
        <i className={`${styles.edit} ri-edit-box-line`}></i>
        <i
          className={`${styles.delete} ri-delete-bin-7-line`}
          onClick={() => deleteCategory(category.id)}
        ></i>
      </span>
    </li>
  );
}

export default MenuItem;
