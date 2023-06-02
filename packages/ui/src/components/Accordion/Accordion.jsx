import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { AccordionContext } from './context';

const Accordion = ({
  activeIndex,
  children,
  className = '',
  onChange,
  ...restProps
}) => {
  const handleChange = (e, index) => {
    if (activeIndex === index) {
      onChange(e, -1);
    } else {
      onChange(e, index);
    }
  };

  return (
    <AccordionContext.Provider value={{ activeIndex, onChange: handleChange }}>
      <div className={classNames('', className)} {...restProps}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            index,
          });
        })}
      </div>
    </AccordionContext.Provider>
  );
};

Accordion.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onChange: PropTypes.func,
};

Accordion.displayName = 'Accordion';

export default Accordion;
