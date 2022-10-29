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
        func={x.func}
      >
        {x.text}
      </DropdownItem>
    ))}
  </ul>
);

DropdownList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.node,
      func: PropTypes.func,
      link: PropTypes.string,
    }),
  ).isRequired,
  size: PropTypes.oneOf(['small', 'medium']),
  side: PropTypes.oneOf(['left', 'rigth']),
};

export default DropdownList;
