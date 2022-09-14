import React from 'react';
import PropTypes from 'prop-types';
import LiLink from '../../atoms/LiLink/LiLink';

const DropdownList = ({ data, size }) => (
  <ul className="absolute z-40">
    {data.map((x) => <LiLink size={size} linkTo={x.linkTo} iconLeft={x.iconLeft}>{x.text}</LiLink>)}
  </ul>
);

DropdownList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      linkTo: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      iconLeft: PropTypes.node,
    }),
  ).isRequired,
  size: PropTypes.oneOf(['small', 'medium']),
};

export default DropdownList;
