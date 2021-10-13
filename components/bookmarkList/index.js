import Bookmark from '../bookmark';
import styles from './bookmarkList.module.css';

function BookmarkList({ bookmarks }) {
  return (
    <section className={styles.container}>
      {bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark} />
      ))}
    </section>
  );
}

export default BookmarkList;
