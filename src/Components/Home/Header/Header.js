import React from 'react';
import Banner from '../Banner/Banner';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <Navbar></Navbar>
      <Banner></Banner>
      <BusinessInfo></BusinessInfo>
    </div>
  );
};

export default Header;
