import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalBody = ({ className = '', children, ...restProps }) => {
  return (
    <div className={classNames('ui-p-6', className)} {...restProps}>
      {children}
    </div>
  );
};

ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ModalBody.displayName = 'ModalBody';

export default ModalBody;
