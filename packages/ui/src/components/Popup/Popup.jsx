import React, {
  cloneElement,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';

import { Paper } from '../';

const Popup = ({
  as = Paper,
  trigger,
  children,
  className = '',
  onOpen = () => {},
  onClose = () => {},
  ...restProps
}) => {
  const parentRef = useRef(null);

  const [show, setShow] = useState(false);
  const [styles, setStyles] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    show ? onOpen() : onClose();
  }, [show]);

  const handleTriggerClick = useCallback((e) => {
    const { top: parentTop } = parentRef.current.getBoundingClientRect();
    const { top: currentTargetTop, height: clientHeight } =
      e.currentTarget.getBoundingClientRect();

    const top = currentTargetTop - parentTop + clientHeight + 8;

    setStyles((prev) => ({ ...prev, top }));
    setShow((prev) => !prev);
  }, []);

  const Tagname = as;

  return (
    <div ref={parentRef} style={{ position: 'relative' }}>
      {cloneElement(trigger, {
        onClick: handleTriggerClick,
      })}
      {show && (
        <Tagname
          className={className}
          style={{ position: 'absolute', width: 'max-content', ...styles }}
          {...restProps}
        >
          {children}
        </Tagname>
      )}
    </div>
  );
};

Popup.propTypes = {
  trigger: PropTypes.node,
  className: PropTypes.string,
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};

Popup.displayName = 'Popup';

export default Popup;
