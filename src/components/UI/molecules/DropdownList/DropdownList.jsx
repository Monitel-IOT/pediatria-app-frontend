import React from 'react';
import PropTypes from 'prop-types';
import DropdownItem from '../../atoms/DropdownItem/DropdownItem';

const DropdownList = ({ data, size }) => (
  <ul className="absolute z-40">
    {data.map((x) => (
      <DropdownItem
        key={x.text}
        size={size}
        link={x.link}
        icon={x.icon}
      >
        {x.text}
      </DropdownItem>
    ))}
  </ul>
);

DropdownList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.node,
    }),
  ).isRequired,
  size: PropTypes.oneOf(['small', 'medium']),
};

export default DropdownList;
