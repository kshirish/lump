import React from 'react';
import PropTypes from 'prop-types';

function Text(props) {
  return <div>Text</div>;
}

Text.propTypes = {
  color: PropTypes.oneOf(['sm', 'md']),
};

export default Text;
