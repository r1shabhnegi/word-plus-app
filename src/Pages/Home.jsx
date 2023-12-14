import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main
      style={{
        background:
          'linear-gradient(rgba(0,0,0,1), rgba(0,0,0,.55)), url("../assets/images/hero.jpg") no-repeat 0',
      }}
      className=' h-[calc(100vh-6.5rem)] w-full flex flex-col items-center justify-around'>
      <div className='w-4/5 mt-5'>
        <h2 className='text-white text-4xl leading-normal font-serif'>
          Unlock the power of words with Word Plus From definitions to synonyms,
          explore a universe of linguistic possibilities. Whether you&apos;re a
          wordsmith or a learner, discover the perfect expression for any
          situation. Dive into a world where words reveal, inspire, and connect
          us all.
        </h2>
      </div>

      <Link to={'search-page'}>
        <button className='text-white text-2xl tracking-normal bg-gray-800 rounded-lg px-7 py-6 m-16 font-sans hover:bg-gray-700 ease-in-out duration-200 hover:text-3xl hover:px-8 hover:py-7 hover:m-14'>
          Find words
        </button>
      </Link>
    </main>
  );
};
export default Home;
