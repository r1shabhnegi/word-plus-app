import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className='h-screen w-full'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
