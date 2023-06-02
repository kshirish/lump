import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalHeader = ({
  as = 'div',
  className = '',
  children,
  ...restProps
}) => {
  const Tagname = as;

  return (
    <Tagname
      className={classNames(
        'ui-p-4 ui-border-b ui-border-light3 ui-rounded-t',
        className,
      )}
      {...restProps}
    >
      {children}
    </Tagname>
  );
};

ModalHeader.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ModalHeader.displayName = 'ModalHeader';

export default ModalHeader;
