import { useState } from 'react';
import BookmarkList from '../bookmarkList';
import SideMenu from '../sideMenu';
import { API_URL } from '../../config';
import styles from './app.module.css';

function App({ allCategories }) {
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState(allCategories[0].title);
  const [bookmarksToDisplay, setBookmarksToDisplay] = useState(
    allCategories[0].bookmarks
  );

  const changeCategory = (category) => {
    setActiveCategory(category);

    const currCategory = categories.filter((item) => item.title === category);

    setBookmarksToDisplay(currCategory[0].bookmarks);
  };

  const addCategory = async (title) => {
    const response = await fetch(API_URL + '/bookmarkCategory', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
      }),
    });
    const categoryToAdd = await response.json();

    //Update UI to reflect changes
    setCategories((categories) => [...categories, categoryToAdd]);
  };

  const editCategory = async (title, id) => {
    const response = await fetch(API_URL + `/bookmarkCategory/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
      }),
    });

    const result = await response.json();

    let tempCategories = [...categories];
    let index = tempCategories.findIndex((el) => el.id === id);
    tempCategories[index].title = result.title;
    setCategories(tempCategories);
  };

  const deleteCategory = async (id) => {
    const response = await fetch(API_URL + `/bookmarkCategory/${id}`, {
      method: 'DELETE',
    });

    const categoryToDelete = await response.json();
    setCategories(
      categories.filter((item) => item.title !== categoryToDelete[1].title)
    );
  };

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
      <div className={styles.container}>
        <SideMenu
          categories={categories}
          activeCategory={activeCategory}
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
