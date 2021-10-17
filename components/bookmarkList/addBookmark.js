import { useState } from 'react';
import styles from './bookmarkList.module.css';

function AddBookmark() {
  const [show, setShow] = useState(false);
  return (
    <a className={`${styles.bookmark} ${styles.icon}`}>
      <i class="ri-add-fill"></i>
    </a>
  );
}

export default AddBookmark;
