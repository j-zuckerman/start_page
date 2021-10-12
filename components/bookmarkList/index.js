import Bookmark from '../bookmark';

function BookmarkList({ bookmarks }) {
  return (
    <section>
      {bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark} />
      ))}
    </section>
  );
}

export default BookmarkList;
