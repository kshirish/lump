import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Stack, Text } from '../../';

const ListItemText = ({
  className,
  children,
  primary,
  secondary,
  ...restProps
}) => {
  return (
    <Stack direction="col" spacing={1}>
      <Text className={className} {...restProps}>
        {primary || children}
      </Text>
      {secondary && (
        <Text className={className} color="light" variant="body2">
          {secondary}
        </Text>
      )}
    </Stack>
  );
};

ListItemText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  primary: PropTypes.string,
  secondary: PropTypes.string,
};

ListItemText.displayName = 'ListItemText';

export default ListItemText;
