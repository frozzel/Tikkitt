import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import logo from './logo.svg'

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faHome,faUser,faHandsHelping,faIdCard, faGrinStars} from '@fortawesome/free-solid-svg-icons';
import { NavLink} from 'react-router-dom'


const Header = () => {
  const [showNav, setShowNav] = useState(false);
  
  return (
    <div className="nav-bar " >
    <Link className="logo"to="/">
      <img src={logo} alt="Logo" />
     
    </Link>
    <nav className={showNav ? 'mobile-show' : ''}>
    
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#655C56" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/login"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#655C56" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/signup"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faIdCard} color="#655C56" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/allprojects"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHandsHelping} color="#655C56" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-me"
          to="/me"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faGrinStars} color="#655C56" />
        </NavLink>
          
      </nav>
      
    </div>
  );
};

export default Header;
