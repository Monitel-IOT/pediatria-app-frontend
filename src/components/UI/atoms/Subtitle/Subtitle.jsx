import React from 'react';
import PropTypes from 'prop-types';

const SubtitleAtom = ({ text, size, color }) => (
  <h4
    className={`uppercase text-center font-bold text-${size} text-${color}-500`}
  >
    {text}
  </h4>
);

SubtitleAtom.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['base', 'lg']),
  color: PropTypes.string,
};

export default SubtitleAtom;
