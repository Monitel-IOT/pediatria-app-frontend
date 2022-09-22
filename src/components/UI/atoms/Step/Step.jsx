import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Step = ({
  index, activeStep, item, ...props
}) => (
  <button
    {...props}
    type="button"
    className={classNames('flex flex-col items-center pb-4 hover:text-blue-main-500 font-bold', {
      'ml-4': index !== 0,
      'border-b-4 border-blue-500 text-blue-main-500': index === activeStep,
      'text-gray-600': index !== activeStep,
    })}
  >
    Paso
    {' '}
    {index + 1}
    <small className="text-xs mt-2 font-normal text-gray-500 hover:text-gray-500">{item}</small>
  </button>
);

Step.propTypes = {
  index: PropTypes.number,
  activeStep: PropTypes.number,
  item: PropTypes.string,
};

export default Step;
