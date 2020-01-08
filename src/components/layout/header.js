import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link, withRouter } from 'react-router-dom';

const Header = (props) => {
  const { subject } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" exact to="/"><p>Contacts</p></Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to='/' activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact/add">Add Contacts</NavLink>
        </li>
      </ul>
    </nav>
  )
}

Header.defaultProps = {
  subject: 'My app' 
}

Header.propTypes = {
  subject: PropTypes.string.isRequired
}


export default Header;