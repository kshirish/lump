import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ListItem = ({ className = '', children, ...restProps }) => {
  return (
    <div
      className={classNames(
        'ui-flex ui-px-4 ui-py-2 hover:ui-bg-light3',
        className,
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ListItem.displayName = 'ListItem';

export default ListItem;
