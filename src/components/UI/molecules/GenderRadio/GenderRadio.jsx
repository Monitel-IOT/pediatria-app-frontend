import React from 'react';
import Label from '../../atoms/Label/Label';
import Radio from '../../atoms/Radio/Radio';

const GenderRadio = () => (
  <div className="flex">
    <Label className="mr-5">Sexo</Label>
    <Radio className="mr-3" label="F" value="femenino" name="gender" />
    <Radio label="M" value="Male" name="gender" />
  </div>
);

export default GenderRadio;
