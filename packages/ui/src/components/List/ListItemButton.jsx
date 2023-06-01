import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ListItemButton = ({
  name,
  className = '',
  selected = false,
  disabled = false,
  children,
  onClick = () => {},
  ...restProps
}) => {
  const handleClick = (e) => {
    const name = e.currentTarget.attributes.name.value;
    onClick(e, name);
  };

  return (
    <div
      name={name}
      className={classNames(
        'ui-listitem-button ui-flex ui-px-4 ui-py-2 ui-cursor-pointer hover:ui-bg-light3',
        { 'ui-bg-selected': selected, 'ui-pointer-events-none': disabled },
        className,
      )}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </div>
  );
};

ListItemButton.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
};

ListItemButton.displayName = 'ListItemButton';

export default ListItemButton;
