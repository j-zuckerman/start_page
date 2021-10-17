import styles from './modal.module.css';

function Modal({ show, onClose }) {
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
        <form className={styles['modal-content__form']} id="add-bookmark-form">
          <label for="name">Name</label>
          <br />
          <input type="text" id="name" name="name" value="" />
          <br />
          <label for="url">URL</label>
          <br />
          <input type="text" id="url" name="url" value="" />
          <br />
          <label for="url">Icon</label>
          <br />
          <input type="text" id="icon" name="icon" value="" />
          <br />
          <label for="url">Color</label>
          <br />
          <input type="text" id="color" name="color" value="" />
          <br />
        </form>

        <div className={styles['modal-content__btns']}>
          <button className="btn btn_cancel" id="btn_cancel" onClick={onClose}>
            Cancel
          </button>
          <button
            class="btn btn_add"
            id="btn_add"
            type="submit"
            form="add-bookmark-form"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
