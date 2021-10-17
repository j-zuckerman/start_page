import App from '../components/app';

function HomePage({ categories }) {
  return <App categories={categories} />;
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/bookmarkCategory');
  const categories = await res.json();

  return {
    props: {
      categories,
    },
  };
}

export default HomePage;
