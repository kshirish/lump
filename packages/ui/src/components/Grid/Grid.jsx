import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Grid = ({
  container = false,
  col = 0,
  children,
  className = '',
  ...restProps
}) => {
  const width = col ? `${(col * 100) / 12}%` : '';

  return (
    <div
      className={classNames(
        '',
        {
          'ui-flex ui-flex-wrap ui--mx-1': container,
          'ui-px-1': !container,
        },
        className,
      )}
      style={{
        flex: '0 0 auto',
        flexBasis: width,
        maxWidth: width,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  container: PropTypes.bool,
  col: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Grid.displayName = 'Grid';

export default Grid;
