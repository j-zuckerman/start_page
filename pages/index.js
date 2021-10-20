import App from '../components/app';
import { API_URL } from '../config';

function HomePage({ categories }) {
  return <App categories={categories} />;
}

export async function getStaticProps() {
  const res = await fetch(API_URL + '/bookmarkCategory');
  const categories = await res.json();

  return {
    props: {
      categories,
    },
  };
}

export default HomePage;
