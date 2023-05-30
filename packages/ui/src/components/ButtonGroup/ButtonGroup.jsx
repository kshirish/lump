import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { StyledButtonGroup } from './styled';

const ButtonGroup = ({ children, className = '', ...restProps }) => {
  return (
    <StyledButtonGroup
      className={classNames('ui-flex', className)}
      {...restProps}
    >
      {children}
    </StyledButtonGroup>
  );
};

ButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
