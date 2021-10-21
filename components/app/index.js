import { useState } from 'react';
import BookmarkList from '../bookmarkList';
import Header from '../header';
import SideMenu from '../sideMenu';
import { API_URL } from '../../config';
import styles from './app.module.css';

function App({ categories }) {
  const [category, setCategory] = useState(categories[0].title);
  const [bookmarksToDisplay, setBookmarksToDisplay] = useState(
    categories[0].bookmarks
  );
  const [active, setActive] = useState(categories[0].title);

  const changeCategory = (category) => {
    setActive(category);
    setCategory(category);

    const currCategory = categories.filter((item) => item.title === category);
    setBookmarksToDisplay(currCategory[0].bookmarks);
  };

  const addCategory = async (title) => {
    //call api endpoint with title as body
  };

  const editCategory = async (id, title) => {};

  const deleteCategory = async (id) => {};

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
    const bookmarkToAdd = await response.json();
    console.log(bookmarkToAdd);

    //Update UI to reflect changes
    setBookmarksToDisplay((bookmarksToDisplay) => [
      ...bookmarksToDisplay,
      bookmarkToAdd,
    ]);
  };

  const deleteBookmark = async (id) => {
    const response = await fetch(API_URL + '/bookmark/' + id, {
      method: 'DELETE',
    });

    const bookmarkThatWasDeleted = await response.json();
    console.log(bookmarkThatWasDeleted);

    //Update UI to reflect changes
    setBookmarksToDisplay(bookmarksToDisplay.filter((item) => item.id !== id));
  };

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
