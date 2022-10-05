import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../atoms/Label/Label';
import Radio from '../../atoms/Radio/Radio';
import Typography from '../../atoms/Typography/Typography';

const GenderRadio = ({ onChange, error, value }) => (
  <div className="flex">
    <Label className="mr-5">Sexo</Label>
    <Radio className="mr-3" name="gender" label="F" value="Femenino" onChange={onChange} checked={value === 'Femenino'} />
    <Radio className="mr-3" name="gender" label="M" value="Masculino" onChange={onChange} checked={value === 'Masculino'} />
    {error && <div><Typography component="small" className="text-rose-500">{error}</Typography></div>}
  </div>
);

GenderRadio.propTypes = {
  onChange: PropTypes.func,
  error: PropTypes.string,
  value: PropTypes.string,
};

export default GenderRadio;
