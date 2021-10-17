import styles from './sideMenu.module.css';

function MenuItem({
  changeActiveCategory,
  changeCategory,
  category,
  isActive,
}) {
  let className = '';

  if (isActive) className = 'active';

  const handleClick = () => {
    changeCategory(category.title);
    changeActiveCategory(category.title);
  };
  return (
    <li className={`${className}`} onClick={handleClick}>
      {category.title}
    </li>
  );
}

export default MenuItem;
