import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FormField = ({ className = '', children, ...restProps }) => {
  return (
    <div className={classNames('ui-mb-4', className)} {...restProps}>
      {children}
    </div>
  );
};

FormField.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

FormField.displayName = 'FormField';

export default FormField;
