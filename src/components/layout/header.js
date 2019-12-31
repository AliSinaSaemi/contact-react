import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { subject } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a href="/" className="navbar-brand">{ subject }</a>
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