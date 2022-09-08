import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../atoms/Label/Label';
import Radio from '../../atoms/Radio/Radio';

const GenderRadio = ({ onChange }) => (
  <div className="flex">
    <Label className="mr-5">Sexo</Label>
    <Radio className="mr-3" name="Gender" label="F" value="Femenino" onChange={onChange} required />
    <Radio name="Gender" label="M" value="Masculino" onChange={onChange} />
  </div>
);

GenderRadio.propTypes = {
  onChange: PropTypes.func,
};

export default GenderRadio;
