import React, { cloneElement, useState } from 'react';
import PropTypes from 'prop-types';

import { Paper } from '../';

const Popup = ({ trigger, children, className = '', ...restProps }) => {
  const [show, setShow] = useState(false);
  const [styles, setStyles] = useState({
    top: 0,
    left: 0,
  });

  const handleTriggerClick = (e) => {
    const triggerHeight = e.currentTarget.clientHeight;

    const top = triggerHeight + 8;

    setStyles((prev) => ({ ...prev, top }));
    setShow((prev) => !prev);
  };

  return (
    <div style={{ position: 'relative' }}>
      {cloneElement(trigger, {
        onClick: handleTriggerClick,
      })}
      {show && (
        <Paper
          className={className}
          elevation={3}
          style={{ position: 'absolute', width: 'max-content', ...styles }}
          {...restProps}
        >
          {children}
        </Paper>
      )}
    </div>
  );
};

Popup.propTypes = {
  trigger: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Popup.displayName = 'Popup';

export default Popup;