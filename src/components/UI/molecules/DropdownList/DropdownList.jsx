import React from 'react';
import PropTypes from 'prop-types';
import DropdownItem from '../../atoms/DropdownItem/DropdownItem';

const DropdownList = ({ data, size, side }) => (
  <ul className={`${side === 'left' ? 'z-40 absolute right-0' : 'z-40 absolute'}`}>
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
  side: PropTypes.oneOf(['left', 'rigth']),
};

export default DropdownList;
