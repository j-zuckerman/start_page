import Bookmark from '../bookmark';
import AddBookmark from './addBookmark';
import styles from './bookmarkList.module.css';

function BookmarkList({ bookmarks }) {
  return (
    <section className={styles.container}>
      {bookmarks.length
        ? bookmarks.map((bookmark) => <Bookmark bookmark={bookmark} />)
        : null}
      <AddBookmark />
    </section>
  );
}

export default BookmarkList;
