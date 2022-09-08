/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Label from '../Label/Label';

const Radio = ({ label, value, ...props }) => (
  <div className={`flex items-center mb-4 ${props.className}`}>
    <Input id={label} type="radio" value={value} name={props.name} onChange={props.onChange} disabled={props.disabled} required={props.required} />
    <Label htmlFor={label} className={`ml-2 !font-normal ${props.disabled && '!text-gray-400'}`}>{label}</Label>
  </div>
);

Radio.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default Radio;
