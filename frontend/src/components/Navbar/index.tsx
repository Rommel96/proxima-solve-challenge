import { NavLink, useNavigate } from 'react-router-dom';

import './navbar.css';

const NavBar = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };
  return (
    <div className='top-bar'>
      <div onClick={handleHome} className='logo-container'>
        <img src='./assets/Proxima_Logo.png' alt='proxima-logo' height='100%' />
        <div>Proxima</div>
      </div>
      <div className='menu-mobile discover-button'>More</div>
      <nav className='navbar'>
        <NavLink className='item' to='/about'>
          About Us
        </NavLink>
        <NavLink className='item' to='/nearshoring'>
          Nearshoring &nbsp;
          <i className='arrow down'></i>
        </NavLink>
        <NavLink className='item' to='/#'>
          Insurtech &nbsp;
          <i className='arrow down'></i>
        </NavLink>
        <NavLink className='item' to='/#'>
          Careers
        </NavLink>
        <NavLink className='discover-button contact-button' to='/#'>
          Contact Us
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
