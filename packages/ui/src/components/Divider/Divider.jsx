import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Divider = ({ className = '', ...restProps }) => {
  return (
    <hr className={classNames('ui-border-light3', className)} {...restProps} />
  );
};

Divider.propTypes = {
  className: PropTypes.string,
};

Divider.displayName = 'Divider';

export default Divider;
