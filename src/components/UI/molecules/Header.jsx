import React from 'react';
import PropTypes from 'prop-types';
import Title from '../atoms/Title/Title';
import Subtitle from '../atoms/Subtitle/Subtitle';

const Header = (obj) => {
  const { title, subtitle } = obj;
  return (
    <div>
      <Title
        text={title.text}
        size={title.size}
        color={title.color}
      />
      <Subtitle
        text={subtitle.text}
        size={subtitle.size}
        color={subtitle.color}
      />
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.shape({
    text: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['xl', '2xl', '3xl']).isRequired,
    color: PropTypes.string.isRequired,
  }),
  subtitle: PropTypes.shape({
    text: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['base', 'lg']).isRequired,
    color: PropTypes.string.isRequired,
  }),
};

export default Header;
