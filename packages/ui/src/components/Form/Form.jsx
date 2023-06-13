import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Form = ({
  children,
  className = '',
  onSubmit = () => {},
  ...restProps
}) => {
  return (
    <form
      className={classNames('', className)}
      onSubmit={onSubmit}
      {...restProps}
    >
      {children}
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSubmit: PropTypes.func,
};

Form.displayName = 'Form';

export default Form;
