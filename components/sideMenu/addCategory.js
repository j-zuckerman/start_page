import { useState } from 'react';
import CategoryInput from './categoryInput';
import styles from './sideMenu.module.css';

function AddCategory({ addCategory }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <CategoryInput
        show={show}
        addCategory={addCategory}
        onClose={() => setShow(false)}
      />
      <div className={styles['add-category']}>
        <i className="ri-add-fill" onClick={() => setShow(true)}></i>
      </div>
    </>
  );
}

export default AddCategory;
