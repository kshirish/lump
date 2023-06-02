import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalFooter = ({
  as = 'div',
  className = '',
  children,
  ...restProps
}) => {
  const Tagname = as;

  return (
    <Tagname
      className={classNames(
        'ui-p-6 ui-border-t ui-border-light3 ui-rounded-b',
        className,
      )}
      {...restProps}
    >
      {children}
    </Tagname>
  );
};

ModalFooter.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;
