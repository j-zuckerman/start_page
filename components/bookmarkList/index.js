import Bookmark from '../bookmark';
import AddBookmark from './addBookmark';
import styles from './bookmarkList.module.css';

function BookmarkList({ bookmarks, addBookmark }) {
  return (
    <section className={styles.container}>
      {bookmarks.length
        ? bookmarks.map((bookmark) => <Bookmark bookmark={bookmark} />)
        : null}
      <AddBookmark addBookmark={addBookmark} />
    </section>
  );
}

export default BookmarkList;
