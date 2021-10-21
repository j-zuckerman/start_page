import React, { useState } from 'react';
import Modal from '../modal';
import styles from './bookmarkList.module.css';

function AddBookmark({ addBookmark }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <a
        className={`${styles.bookmark} ${styles.icon}`}
        onClick={() => setShow(true)}
      >
        <i className="ri-add-fill"></i>
      </a>
      <Modal
        show={show}
        onClose={() => setShow(false)}
        addBookmark={addBookmark}
      />
    </>
  );
}

export default AddBookmark;
