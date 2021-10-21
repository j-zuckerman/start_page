import { useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import styles from './bookmark.module.css';

function Bookmark({ bookmark }) {
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
    </a>
  );
}

export default Bookmark;
