import { useState } from 'react';
import BookmarkList from '../bookmarkList';
import SideMenu from '../sideMenu';
import styles from './layout.module.css';

function Layout({ categories }) {
  const bookmarkMap = new Map();
  categories.forEach((category) => {
    bookmarkMap.set(category.title, category.bookmarks);
  });

  const [category, setCategory] = useState(categories[0].title);
  const [bookmarksToDisplay, setBookmarksToDisplay] = useState(
    bookmarkMap.get(category)
  );

  const categoryTitles = categories.map((category) => category.title);

  const handleClick = (category) => {
    setCategory(category);

    const theBookmarksToDisplay = bookmarkMap.get(category);
    setBookmarksToDisplay(theBookmarksToDisplay);
  };

  return (
    <div className={styles.container}>
      <SideMenu categoryTitles={categoryTitles} handleClick={handleClick} />
      <BookmarkList bookmarks={bookmarksToDisplay} />
    </div>
  );
}

export default Layout;
