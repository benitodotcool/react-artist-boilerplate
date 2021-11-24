import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import './header.scss';

const Header = () => {

  return (
    <div className="wrapper__header">
      <header className="container__header">
        <Link to="/">
          <p className="small__font">REACT.JS—BOILERPLATE</p>
        </Link>
        <Navbar />
      </header>
    </div>
  );
};

export default Header;