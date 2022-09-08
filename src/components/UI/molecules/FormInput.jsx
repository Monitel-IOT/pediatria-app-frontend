import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../atoms/Input/Input';
import Label from '../atoms/Label/Label';

const FormInput = ({ label, ...props }) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused('true');
  };
  const handleInputChange = (e) => {
    if (props.onInputChange) {
      props.onInputChange(e);
    }
  };
  return (
    <div className="flex flex-col mb-5">
      <Label htmlFor={label} className="mb-2">{label}</Label>
      <Input
        id={label}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        onChange={handleInputChange}
        value={props.value}
        pattern={props.pattern}
        required={props.r}
        focused={focused}
        onBlur={handleFocus}
        {...props}
      />
      <span className="text-red-600" data-error="true">{props.errorMessage}</span>
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onInputChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.node,
  pattern: PropTypes.string,
  errorMessage: PropTypes.string,
  r: PropTypes.bool,
};

export default FormInput;
