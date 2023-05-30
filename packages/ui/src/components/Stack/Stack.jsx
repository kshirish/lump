import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const directionMap = {
  row: 'ui-flex-row',
  'row-reverse': 'ui-flex-row-reverse',
  col: 'ui-flex-col',
  'col-reverse': 'ui-flex-col-reverse',
};

const justifyContentMap = {
  'flex-start': 'ui-justify-start',
  center: 'ui-justify-center',
  'flex-end': 'ui-justify-end',
  'space-between': 'ui-justify-between',
  'space-around': 'ui-justify-around',
  'space-evenly': 'ui-justify-evenly',
};

const alignItemsMap = {
  'flex-start': 'ui-items-start',
  center: 'ui-items-center',
  'flex-end': 'ui-items-end',
  stretch: 'ui-items-stretch',
  baseline: 'ui-items-baseline',
};

const Stack = ({
  direction = 'row',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  spacing = 0,
  wrap,
  children,
  className = '',
  ...restProps
}) => {
  const directionClass = directionMap[direction];
  const justifyContentClass = justifyContentMap[justifyContent];
  const alignItemsClass = alignItemsMap[alignItems];

  return (
    <div
      className={classNames(
        'ui-flex',
        directionClass,
        justifyContentClass,
        alignItemsClass,
        {
          'ui-flex-wrap': wrap,
        },
        className,
      )}
      style={{ gap: 8 * spacing }}
      {...restProps}
    >
      {children}
    </div>
  );
};

Stack.propTypes = {
  direction: PropTypes.oneOf(['row', 'row-reverse', 'col', 'col-reverse']),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'stretch',
    'baseline',
  ]),
  wrap: PropTypes.bool,
  spacing: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Stack.displayName = 'Stack';

export default Stack;
