import React from 'react';
import PropTypes from 'prop-types';

const TitleAtom = ({ text, size, color }) => (
  <h2
    className={`uppercase text-center font-bold text-${size} text-${color}-500`}
  >
    {text}
  </h2>
);

TitleAtom.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['xl', '2xl', '3xl']),
  color: PropTypes.string,
};

export default TitleAtom;
