import { useState, useEffect } from 'react';
import BookmarkList from '../bookmarkList';
import Header from '../header';
import SideMenu from '../sideMenu';
import { API_URL } from '../../config';
import styles from './app.module.css';

function App({ categories }) {
  const bookmarkMap = new Map();
  categories.forEach((category) => {
    bookmarkMap.set(category.title, category.bookmarks);
  });

  const [category, setCategory] = useState(categories[0].title);
  const [bookmarksToDisplay, setBookmarksToDisplay] = useState(
    bookmarkMap.get(category)
  );
  const [active, setActive] = useState(categories[0].title);

  const changeCategory = (category) => {
    setActive(category);
    setCategory(category);

    const theBookmarksToDisplay = bookmarkMap.get(category);
    console.log(theBookmarksToDisplay);
    setBookmarksToDisplay(theBookmarksToDisplay);
  };

  const addCategory = (title) => {
    //call api endpoint with title as body
  };

  const editCategory = (id, title) => {};

  const deleteCategory = (id) => {};

  const addBookmark = async (name, link, icon, color) => {
    const response = await fetch(API_URL + '/bookmark', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        link: link,
        icon: icon,
        color: color,
        categoryName: active,
      }),
    });
    const data = await response.json();

    console.log(data);
  };

  const deleteBookmark = (id) => {};

  const editBookmark = (name, link, icon, color, id) => {};

  return (
    <>
      <Header />
      <div className={styles.container}>
        <SideMenu
          categories={categories}
          active={active}
          changeCategory={changeCategory}
          addCategory={addCategory}
          deleteCategory={deleteCategory}
          editCategory={editCategory}
        />
        <BookmarkList
          bookmarks={bookmarksToDisplay}
          addBookmark={addBookmark}
          deleteBookmark={deleteBookmark}
          editBookmark={editBookmark}
        />
      </div>
    </>
  );
}

export default App;
