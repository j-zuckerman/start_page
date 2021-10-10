function HomePage() {
    return <div>Welcome to Next.js!</div>
  }
  
  export async function getStaticProps() {

    const res = await fetch('http://localhost:3000/api/bookmarkCategory')
    const bookmarkCategories = await res.json()

    return {
      props: {
        bookmarkCategories,
      },
    }
  }
  
  export default HomePage