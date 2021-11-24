import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {

  return (
    <div className="wrapper__navbar">
      <nav className="container__navbar">
        <ul className="nav--items">
          <li className="nav--item">
            <Link to="/">
              <p className="small__font">HOME</p>
            </Link>
          </li>
          <li className="nav--item">
            <Link to="/works">
              <p className="small__font">WORKS</p>
            </Link>
          </li>
          <li className="nav--item">
            <Link to="/about">
              <p className="small__font">ABOUT</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
