import React from 'react';
import PropTypes from 'prop-types';
import Input from '../atoms/Input/Input';
import Label from '../atoms/Label/Label';

const FormInput = ({ label, ...props }) => {
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
        placeholder={props.placeholder}
        type={props.type}
        onChange={handleInputChange}
      />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onInputChange: PropTypes.func,
  type: PropTypes.string,
};

export default FormInput;
