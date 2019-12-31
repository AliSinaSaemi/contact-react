import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { branding } = props;
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">{ branding }</a>
    </nav>
  )
}

Header.propTypes = {
  branding: PropTypes.string.isRequired,
}

export default Header;
