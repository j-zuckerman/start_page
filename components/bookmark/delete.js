import styles from './bookmark.module.css';

function DeleteButton({ deleteBookmark, id }) {
  const handleDelete = (e, id) => {
    //prevent clicking on bookmark to navigate to url
    e.preventDefault();
    deleteBookmark(id);
  };
  return (
    <i
      className={`${styles.delete} ri-close-circle-line`}
      onClick={(e) => handleDelete(e, id)}
    ></i>
  );
}

export default DeleteButton;
