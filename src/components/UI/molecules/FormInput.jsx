import PropTypes from 'prop-types';
import Input from '../atoms/Input/Input';
import Label from '../atoms/Label/Label';
import Typography from '../atoms/Typography/Typography';

const FormInput = ({ label, ...props }) => {
  const handleInputChange = (e) => {
    if (props.onInputChange) {
      props.onInputChange(e);
    }
  };
  return (
    <div className="flex flex-col mb-3">
      <Label htmlFor={label} className="mb-1">{label}</Label>
      <Input
        id={label}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        onChange={handleInputChange}
        value={props.value}
        pattern={props.pattern}
        required={props.r}
        {...props}
      />
      {props.error && <Typography component="small" className="text-rose-500">{props.error}</Typography>}
      <span className="text-red-600" data-error="true">{props.errorMessage}</span>
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onInputChange: PropTypes.func,
  type: PropTypes.string,
  addon: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.node,
  pattern: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  errorMessage: PropTypes.string,
  r: PropTypes.bool,
};

export default FormInput;
