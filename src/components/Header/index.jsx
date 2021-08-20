import React from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <h1><Link to="/">REACT.JS—BOILERPLATE</Link></h1>
      <Navbar />
    </header>
  );
};

export default Header;