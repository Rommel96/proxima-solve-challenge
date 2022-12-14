import { Outlet } from 'react-router-dom';
import NavBar from '../Navbar';

import './layout.css';

const Layout = () => {
  return (
    <div className='layout'>
      <NavBar />
      <Outlet />
    </div>
  );
};
export default Layout;
