import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar p-0 navbar-expand-lg navbar-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link mr-5" href="">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5" href="">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5" href="">
              Dental Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" href="">
              Reviews
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" href="">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" href="">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
