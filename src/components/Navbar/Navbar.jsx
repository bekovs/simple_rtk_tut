import React from 'react';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className='navbar'>
      <ul className='navbar__list'>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/products')}>Products</li>
        <li onClick={() => navigate('/about')}>About us</li>
      </ul>
    </div>
  );
};

export default Navbar;