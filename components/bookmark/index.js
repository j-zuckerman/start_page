import 'remixicon/fonts/remixicon.css';

function Bookmark({ bookmark }) {
  return <a href={bookmark.link}>{bookmark.name}</a>;
}

export default Bookmark;
