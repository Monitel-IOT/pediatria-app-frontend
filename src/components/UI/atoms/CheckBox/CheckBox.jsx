import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Label from '../Label/Label';

const CheckBox = ({
  label, name, disabled, checked, onChange, ...props
}) => (
  <div {...props} className="flex items-center mb-4">
    <Input id={label} name={name} type="checkbox" disabled={disabled} onChange={onChange} checked={checked} />
    <Label htmlFor={label} className={`ml-2 !font-normal ${disabled && '!text-gray-400'}`}>{label}</Label>
  </div>
);

CheckBox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CheckBox;
