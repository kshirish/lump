import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const List = ({
  className = '',
  children,
  onItemClick = () => {},
  ...restProps
}) => {
  const handleClick = (e) => {
    const name = e.target.closest('.ui-listitem-button').attributes.name.value;
    onItemClick(e, name);
  };

  return (
    <div
      className={classNames('ui-bg-white ui-py-2', className)}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </div>
  );
};

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onItemClick: PropTypes.func,
};

List.displayName = 'List';

export default List;
