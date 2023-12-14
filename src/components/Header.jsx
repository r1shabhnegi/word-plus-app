import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <header className='h-20 w-full px-10 bg-black flex justify-between'>
        <Link to={'/'}>
          <img
            className='h-full'
            src='../assets/images/logo.png'
            alt='Logo'
          />
        </Link>
        <Link to={'/profile'}>
          <button className='h-full pr-3'>
            <img
              className='h-12'
              src='../assets/images/user.png'
              alt=''
            />
          </button>
        </Link>
      </header>
    </>
  );
};
export default Header;
