import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

import { Text } from '../';
import { AccordionContext } from './context';

const AccordionItem = ({
  index,
  title,
  children,
  className = '',
  ...restProps
}) => {
  const { activeIndex, onChange } = useContext(AccordionContext);

  const active = activeIndex === index;

  return (
    <div
      className={classNames(
        'ui-border ui-border-light3 ui-border-b-0 last:ui-border-b',
        className,
      )}
      {...restProps}
    >
      <Text
        color="light"
        className={classNames(
          'ui-flex ui-items-center ui-justify-between ui-cursor-pointer ui-border-light3  ui-w-full ui-px-5 ui-py-3 ui-text-left  focus:ui-ring-4 focus:ui-ring-light3',
          {
            'ui-border-b': active,
          },
        )}
        onClick={(e) => onChange(e, index)}
      >
        {title}{' '}
        {active ? (
          <ChevronUpIcon className="ui-h-4 ui-w-4" />
        ) : (
          <ChevronDownIcon className="ui-h-4 ui-w-4" />
        )}
      </Text>
      <div
        className={classNames('ui-p-5', {
          'ui-block': active,
          'ui-hidden': !active,
        })}
      >
        {children}
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
