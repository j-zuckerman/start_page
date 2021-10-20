import styles from './sideMenu.module.css';

function MenuItem({ changeCategory, category, isActive }) {
  let className = '';

  if (isActive) className = 'active';

  const handleClick = () => {
    changeCategory(category.title);
  };
  return (
    <li className={`${className}`} onClick={handleClick}>
      {category.title}
    </li>
  );
}

export default MenuItem;
