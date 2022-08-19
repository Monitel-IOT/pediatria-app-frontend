import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Label from '../Label/Label';

const CheckBox = ({ label, disabled, ...props }) => (
  <div {...props} className="flex items-center mb-4">
    <Input id={label} type="checkbox" disabled={disabled} onChange={props.onChange} checked={props.checked} />
    <Label htmlFor={label} className={`ml-2 !font-normal ${disabled && '!text-gray-400'}`}>{label}</Label>
  </div>
);

CheckBox.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CheckBox;
