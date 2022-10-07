import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='divContainer'>
      <div className='divNavBar'><img src={Logo} id='logoHenry'/><h5 className='title'>Henry - Weather App</h5></div>
      <div className='searchBar'><SearchBar onSearch={onSearch}/></div>
    </div>
  );
};

export default Nav;
