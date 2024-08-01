import Header from '../ui/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='layout'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;