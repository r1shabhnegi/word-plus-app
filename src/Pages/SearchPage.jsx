import { useState } from 'react';
import { handleApi } from '../HandleApi';

const SearchPage = () => {
  const [word, setWord] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  async function handleSubmit() {
    try {
      setLoading(true);
      const { definition } = await handleApi(word);
      if (!definition) throw Error;
      setData(definition);
      setLoading(false);
    } catch (error) {
      setData('Wrong Command!!!');
      setLoading(false);
    }
  }

  return (
    <div className='text-white h-[calc(100vh-6.5rem)] w-full bg-black flex flex-col items-center border-t-2 border-white'>
      <form
        className='w-3/4 text-center m-10'
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
        <input
          type='text'
          onChange={(e) => setWord(e.target.value)}
          className='text-black p-2 w-3/4 focus:outline-none text-lg rounded-sm'
        />
        <button
          type='submit'
          className='w-auto p-2 text-lg bg-gray-700 font-bold rounded-sm'>
          Search
        </button>
      </form>

      <section className='w-full h-screen overflow-auto p-12'>
        <p className='tracking-wide leading-7'>
          {loading ? 'Loading...' : data}
        </p>
      </section>
    </div>
  );
};
export default SearchPage;
