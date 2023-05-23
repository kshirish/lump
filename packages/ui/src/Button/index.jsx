import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children }) => {
  return (
    <button type="button" className="p-2 bg-blue-400">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Button;
