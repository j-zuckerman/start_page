function SideMenu({ categoryTitles, handleClick }) {
  return (
    <ul>
      {categoryTitles.map((categoryTitle) => (
        <li onClick={handleClick}>{categoryTitle}</li>
      ))}
    </ul>
  );
}

export default SideMenu;
