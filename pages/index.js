import Layout from '../components/layout';

function HomePage({ categories }) {
  return <Layout categories={categories} />;
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
