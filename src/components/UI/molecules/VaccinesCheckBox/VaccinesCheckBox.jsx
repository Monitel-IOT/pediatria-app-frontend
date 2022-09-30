import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../../atoms/Typography/Typography';
import CheckBox from '../../atoms/CheckBox/CheckBox';
import Card from '../../../layout/Card/Card';

const VaccinesCheckBox = ({ onChange }) => (
  <Card className="mt-4">
    <Typography component="h3" className="mb-5">
      Vacunas
    </Typography>
    <form className="flex justify-between">
      <div>
        <CheckBox label="BCG" onChange={onChange} />
        <CheckBox label="Hepatitis B" onChange={onChange} />
        <CheckBox label="AMA" onChange={onChange} />
        <CheckBox label="INF 1 y 2" onChange={onChange} />
        <CheckBox label="SPR" onChange={onChange} />
      </div>
      <div>
        <CheckBox label="1 P+PO+RO+N" onChange={onChange} />
        <CheckBox label="2 P+PO+RO+N" onChange={onChange} />
        <CheckBox label="3 P+PO" onChange={onChange} />
        <CheckBox label="Refuerzo SPR" onChange={onChange} />
      </div>
    </form>
  </Card>
);

VaccinesCheckBox.propTypes = {
  onChange: PropTypes.func,
};

export default VaccinesCheckBox;
