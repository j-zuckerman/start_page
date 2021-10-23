import App from '../components/app';
import { API_URL } from '../config';

function HomePage({ allCategories }) {
  return <App allCategories={allCategories} />;
}

export async function getStaticProps() {
  const res = await fetch(API_URL + '/bookmarkCategory');
  const allCategories = await res.json();
  console.log(allCategories);
  return {
    props: {
      allCategories,
    },
  };
}

export default HomePage;
