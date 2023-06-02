import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Modal = ({
  open = false,
  closeable = false,
  className = '',
  children,
  onClose = () => {},
  ...restProps
}) => {
  useEffect(() => {
    if (!closeable) {
      return;
    }

    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  return (
    <div
      className={classNames(
        'ui-flex ui-justify-center ui-items-center ui-bg-light2 ui-bg-opacity-30 ui-fixed ui-top-0 ui-left-0 ui-right-0 ui-z-50 ui-w-full ui-overflow-x-hidden ui-overflow-y-auto ui-md:inset-0 ui-h-[calc(100%-1rem)] ui-max-h-full',
        {
          'ui-hidden': !open,
        },
        className,
      )}
      {...restProps}
    >
      <div className="ui-relative ui-bg-white ui-rounded ui-shadow-xl ui-w-full ui-max-w-2xl ui-max-h-full">
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  closeable: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClose: PropTypes.func,
};

Modal.displayName = 'Modal';

export default Modal;
