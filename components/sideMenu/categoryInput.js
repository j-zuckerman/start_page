import { useState } from 'react';
import styles from './sideMenu.module.css';

function CategoryInput({ addCategory, show, onClose }) {
  const [title, setTitle] = useState('');

  const add = (e) => {
    if (e.code === 'Enter') {
      addCategory(title);
      setTitle('');
      onClose();
    }
  };

  if (!show) return null;
  return (
    <div>
      <input
        className={styles['category-input']}
        type="text"
        placeholder="Category Title"
        name="category"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={add}
      ></input>
    </div>
  );
}

export default CategoryInput;
