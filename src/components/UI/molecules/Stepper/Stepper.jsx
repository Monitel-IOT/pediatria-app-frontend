/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import Step from '../../atoms/Step/Step';

const Stepper = ({ activeStep, steps, ...props }) => (
  <div className="mb-4 flex border-b-2 justify-between">
    {steps.map((item, index) => (
      <Step
        index={index}
        activeStep={activeStep}
        item={item}
        onClick={() => props.onChange(index)}
      />
    ))}
  </div>
);

Stepper.propTypes = {
  activeStep: PropTypes.number,
  steps: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default Stepper;
