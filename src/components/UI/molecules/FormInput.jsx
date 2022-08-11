import React from 'react';
import PropTypes from 'prop-types';
import Input from '../atoms/Input/Input';
import Label from '../atoms/Label/Label';

const FormInput = ({
  label, placeholder, type, ...props
}) => (
  <div {...props} className="flex flex-col mb-5">
    <Label htmlFor={label}>{label}</Label>
    <Input id={label} placeholder={placeholder} type={type} />
  </div>
);

FormInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default FormInput;
