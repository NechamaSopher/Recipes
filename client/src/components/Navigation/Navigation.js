import React, { useEffect, useState } from 'react';
import path from 'path';
import { Link, useLocation } from 'react-router-dom';

import './Navigation.css'

const Navigation = () => {
  const [lastPart, setLastPart] = useState('');
  const location = useLocation();

  useEffect(() => {
    const currentPath = window.location.pathname;
    setLastPart(path.basename(currentPath));
  }, [location.pathname])

  return (
    <nav className='nav-ber'>
      <ul className='nav-bar-content'>
        <li className='nav-bar-item'>
          <Link className={lastPart === 'recipes' ? 'selected' : ''} to="/recipes">Recipes</Link>
        </li>
        <li className='nav-bar-item'>
          <Link className={lastPart === 'about' ? 'selected' : ''} to="/about">About</Link>
        </li>
        <li className='nav-bar-item'>
          <Link className={lastPart === 'dashboard' ? 'selected' : ''} to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;




