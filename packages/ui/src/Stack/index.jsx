import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const justifyContentMap = {
  'flex-start': 'justify-start',
  center: 'justify-center',
  'flex-end': 'justify-end',
  'space-between': 'justify-between',
  'space-around': 'justify-around',
  'space-evenly': 'justify-evenly',
};

const alignItemsMap = {
  'flex-start': 'items-start',
  center: 'items-center',
  'flex-end': 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const Stack = (props) => {
  const directionClass = `flex-${props.direction || 'row'}`;
  const justifyContentClass =
    justifyContentMap[props.justifyContent || 'flex-start'];
  const alignItemsClass = alignItemsMap[props.alignItems || 'flex-start'];

  return (
    <div
      className={classNames(
        'flex',
        directionClass,
        justifyContentClass,
        alignItemsClass,
        {
          'flex-wrap': props.wrap,
        },
      )}
      style={{ gap: 8 * (props.spacing || 0) }}
    >
      {props.children}
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Stack;
