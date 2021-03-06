import 'remixicon/fonts/remixicon.css';
import styles from './bookmark.module.css';
import DeleteButton from './delete';

function Bookmark({ bookmark, deleteBookmark, editBookmark }) {
  let containsData = true;

  for (let key in bookmark) {
    if (bookmark[key] === '') containsData = false;
  }

  if (!containsData) return false;

  return (
    <a
      href={bookmark.link}
      className={styles.bookmark}
      style={{ '--bookmark-color': bookmark.color }}
    >
      <i className={`${styles.icon} ${bookmark.icon}`}></i>
      <label>
        <span>{bookmark.name}</span>
      </label>

      <DeleteButton deleteBookmark={deleteBookmark} id={bookmark.id} />
    </a>
  );
}

export default Bookmark;
