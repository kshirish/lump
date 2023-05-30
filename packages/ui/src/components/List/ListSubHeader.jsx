import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Text } from '../../';

const ListSubHeader = ({ className = '', children, ...restProps }) => {
  return (
    <Text
      className={classNames('ui-px-4 ui-leading-10', className)}
      color="light"
      variant="body2"
      {...restProps}
    >
      {children}
    </Text>
  );
};

ListSubHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ListSubHeader.displayName = 'ListSubHeader';

export default ListSubHeader;
