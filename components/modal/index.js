import { useState } from 'react';
import styles from './modal.module.css';

function Modal({ show, onClose, addBookmark }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [icon, setIcon] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addBookmark(name, link, icon, color);
    setName('');
    setLink('');
    setIcon('');
    setColor('');
    onClose();
  };

  if (!show) {
    return null;
  }
  return (
    <div className={styles.modal} id="modal" onClick={onClose}>
      <div
        className={styles['modal-content']}
        onClick={(e) => e.stopPropagation()}
      >
        <p className={styles['modal-content__title']}>Add Bookmark</p>
        <form
          className={styles['modal-content__form']}
          id="add-bookmark-form"
          onSubmit={handleSubmit}
        >
          <label for="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label for="url">
            URL
            <input
              type="text"
              id="url"
              name="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </label>
          <label for="icon">
            Icon
            <input
              type="text"
              id="icon"
              name="icon"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
            />
          </label>
          <label for="color">
            Color
            <input
              type="text"
              id="color"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>

          <div className={styles['modal-content__btns']}>
            <button
              className="btn btn_cancel"
              id="btn_cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
