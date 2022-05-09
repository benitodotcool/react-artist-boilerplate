import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  const navLinks = [
    {name: "home", slug: ""},
    {name: "works", slug: "works"},
    {name: "contact", slug: "contact"}
  ]

  return (
    <div className="wrapper__navbar">
      <nav className="container__navbar">
        <ul className="nav--items">
          {navLinks.map((link, i) => 
            <li
              key={i}
              className="nav--item"
            >
              <Link to={`/${link.slug}`}>
                <p className="small__font t--CAPS">{link.name}</p>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
