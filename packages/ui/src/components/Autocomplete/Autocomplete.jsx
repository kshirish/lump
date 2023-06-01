import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Popup, List, ListItemButton, ListItemText } from '../';

const Autocomplete = ({
  multiple = false,
  options,
  renderInput = () => {},
  className = '',
  ...restProps
}) => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  const handleSelect = (e, name) => {
    setSelected((prev) => prev.concat(name));
  };

  return (
    <Popup
      as="div"
      trigger={renderInput({ open, query, selected, onChange: handleChange })}
      className={className}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <List onItemClick={handleSelect} {...restProps}>
        {options
          .filter(
            (option) =>
              option.value.toLowerCase().includes(query.toLowerCase()) &&
              !selected.includes(option.value),
          )
          .map((option) => (
            <ListItemButton
              key={option.value}
              name={option.value}
              disabled={option.disabled}
            >
              <ListItemText primary={option.text} />
            </ListItemButton>
          ))}
      </List>
    </Popup>
  );
};

Autocomplete.propTypes = {
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.any,
      disabled: PropTypes.bool,
    }),
  ),
  renderInput: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Autocomplete.displayName = 'Autocomplete';

export default Autocomplete;
