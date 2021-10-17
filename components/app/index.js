import { useState, useEffect, useRef } from 'react';
import BookmarkList from '../bookmarkList';
import SideMenu from '../sideMenu';
import styles from './layout.module.css';

function App({ categories }) {
  const bookmarkMap = new Map();
  categories.forEach((category) => {
    bookmarkMap.set(category.title, category.bookmarks);
  });

  const [category, setCategory] = useState(categories[0].title);
  const [bookmarksToDisplay, setBookmarksToDisplay] = useState(
    bookmarkMap.get(category)
  );

  const changeCategory = (category) => {
    setCategory(category);

    const theBookmarksToDisplay = bookmarkMap.get(category);
    console.log(theBookmarksToDisplay);
    setBookmarksToDisplay(theBookmarksToDisplay);
  };

  const addCategory = (title) => {
    //call api endpoint with title as body
  };

  const editCategory = (id, title) => {};

  const deleteCategory = () => {};

  const addBookmark = () => {};

  const deleteBookmark = () => {};

  return (
    <div className={styles.container}>
      <SideMenu categories={categories} changeCategory={changeCategory} />
      <BookmarkList bookmarks={bookmarksToDisplay} />
    </div>
  );
}

export default App;
