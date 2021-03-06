import Bookmark from '../bookmark';
import AddBookmark from './addBookmark';
import styles from './bookmarkList.module.css';

function BookmarkList({
  bookmarks,
  addBookmark,
  deleteBookmark,
  editBookmark,
}) {
  let bookmarksToRender;
  if (bookmarks) {
    bookmarksToRender = bookmarks.map((bookmark) => (
      <Bookmark
        bookmark={bookmark}
        deleteBookmark={deleteBookmark}
        editBookmark={editBookmark}
        key={bookmark.id}
      />
    ));
  }
  return (
    <section>
      <div className={styles.container}>
        {bookmarksToRender}
        <AddBookmark addBookmark={addBookmark} />
      </div>
    </section>
  );
}

export default BookmarkList;
