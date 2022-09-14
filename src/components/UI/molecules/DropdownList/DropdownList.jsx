import React from 'react';
import PropTypes from 'prop-types';
import LiLink from '../../atoms/LiLink/LiLink';

const DropdownList = ({ data }) => (
  <ul className="absolute z-40">
    {data.map((el) => <LiLink linkTo={el.linkTo} iconLeft={el.iconLeft}>{el.text}</LiLink>)}
  </ul>
);

DropdownList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      linkTo: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      iconLeft: PropTypes.FontAwesomeIcon,
    }),
  ).isRequired,
};

export default DropdownList;
