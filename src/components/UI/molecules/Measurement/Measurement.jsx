import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../../atoms/Typography/Typography';

const Measurement = ({
  icon, text, value, ...props
}) => (
  <div className={`flex flex-col justify-center items-center px-4 py-8 bg-white rounded-lg shadow-lg hover:scale-110 hover:shadow-lg transition-transform duration-200 ${props.className}`}>
    {icon && <span className="text-2xl sm:text-[2rem] text-blue-main-500">{icon}</span>}
    {text && <Typography component="h6" className="mt-2">{text}</Typography>}
    {value && <Typography component="h1" className="!text-blue-main-500 mt-5">{value}</Typography>}
  </div>
);

Measurement.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  text: PropTypes.string,
  value: PropTypes.string,
};

export default Measurement;
